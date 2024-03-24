import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  return await prisma.post.create({
    data: {
      title: 'First Post',
      content: 'This is a first post',
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();
    process.exit(1);
  });
