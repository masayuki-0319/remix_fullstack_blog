import { Post } from '.prisma/client';

import { prisma } from '~/db.server';

class PostRepository {
  async create(params: Pick<Post, 'title' | 'content'>) {
    const { title, content } = params;
    if (!title || !content) throw new Error('Title and content are required');

    return await prisma.post.create({
      data: {
        title: title,
        content: content,
      },
    });
  }

  async find(params: { id: Post['id'] }) {
    return await prisma.post.findUnique({ where: { id: params.id } });
  }

  async findAll(): Promise<Post[]> {
    return await prisma.post.findMany();
  }

  async delete(params: { id: Post['id'] }) {
    await prisma.post.delete({
      where: { id: params.id },
    });
    return;
  }
}

const postRepository = new PostRepository();

export { postRepository };
