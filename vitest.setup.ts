import { vi } from 'vitest';

vi.mock('./app/db.server', () => ({
  prisma: vPrisma.client,
}));
