import { PostTestFactory } from '~/test/factories/post';

import { postRepository } from './post.server';

describe('PostRepository', () => {
  describe('create', () => {
    it('新しいポストを登録できる', async () => {
      const params = await PostTestFactory.build();

      const createdPost = await postRepository.create(params);

      expect(createdPost.title).toBe(params.title);
      expect(createdPost.content).toBe(params.content);
    });
  });

  describe('find', () => {
    it('引数の id が存在すると、ポストを取得できる', async () => {
      const post = await PostTestFactory.create();
      const foundPost = await postRepository.find({ id: post.id });

      expect(foundPost).toBeDefined();
      expect(foundPost?.id).toBe(post.id);
    });
  });

  describe('findAll', () => {
    it('全てのポストを取得できる', async () => {
      await PostTestFactory.createList(3);

      const posts = await postRepository.findAll();

      expect(posts).toHaveLength(3);
    });
  });

  describe('delete', () => {
    it('引数の id が存在すると、ポストを削除できる', async () => {
      const post = await PostTestFactory.create();

      await postRepository.delete({ id: post.id });

      const deletedPost = await postRepository.find({ id: post.id });

      expect(deletedPost).toBeNull();
    });
  });
});
