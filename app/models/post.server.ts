import { Post } from '.prisma/client';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class PostRepository {
  async create(params: Pick<Post, 'title' | 'content'>) {
    const { title, content } = params;
    if (!title || !content) throw new Error('Title and content are required');

    await prisma.post.create({
      data: {
        title: title,
        content: content,
      },
    });
    return;
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
