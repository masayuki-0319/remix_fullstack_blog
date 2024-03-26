import { Post } from '@prisma/client';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';

import { postRepository } from '~/models/post.server';

export const loader = async () => {
  const posts = await postRepository.findAll();

  return json(posts);
};

export default function PostIndex() {
  const posts: Post[] = useLoaderData();
  return (
    <div>
      <h1>ポスト</h1>
      <Link to='new'>ポストを作成する</Link>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>
            <Link to={post.id}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
