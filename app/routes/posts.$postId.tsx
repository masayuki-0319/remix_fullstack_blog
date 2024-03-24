import { Post } from '@prisma/client';
import { LoaderFunctionArgs, json } from '@remix-run/node';
import { Form, Link, useLoaderData } from '@remix-run/react';

import { postRepository } from '~/models/post.server';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.postId)
    throw new Response(null, {
      status: 404,
      statusText: 'Not Found',
    });

  const post = await postRepository.find({ id: params.postId });

  return json(post);
};

export default function PostShow() {
  const post: Post = useLoaderData();
  return (
    <div>
      <Link to='/posts'>一覧に戻る</Link>
      <h1>ポスト</h1>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <Form action='delete' method='post'>
        <button>削除</button>
      </Form>
    </div>
  );
}
