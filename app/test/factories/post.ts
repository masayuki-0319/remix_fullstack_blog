import { Post } from '@prisma/client';
import { Factory } from 'fishery';

import { postRepository } from '~/models/post.server';

export const postTestFactory = Factory.define<Post>(
  ({ sequence, onCreate }) => {
    onCreate((post) => postRepository.create(post));

    return {
      id: `uuid-${sequence}`,
      title: `test-${sequence}`,
      content: `test-${sequence}`,
      published: true,
    };
  }
);
