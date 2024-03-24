import { redirect, type ActionFunctionArgs } from '@remix-run/node';

import { postRepository } from '~/models/post.server';

export const action = async ({ params }: ActionFunctionArgs) => {
  if (!params.postId) throw new Error('Parameter is missing');

  await postRepository.delete({ id: params.postId });

  return redirect('/posts');
};
