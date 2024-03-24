import { Post, PrismaClient } from '@prisma/client';
import { json, type MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'Remix fullstack blog' },
    { name: 'description', content: 'Remix fullstack blog' },
  ];
};

export const loader = async () => {
  const prisma = new PrismaClient();
  const posts = await prisma.post.findMany();

  return json(posts);
};

export default function Index() {
  const posts: Post[] = useLoaderData();
  console.log({ posts });

  return (
    <div>
      <h1>Welcome to Remix fullstack blog</h1>
    </div>
  );
}
