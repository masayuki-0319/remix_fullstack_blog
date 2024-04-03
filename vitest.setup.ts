import { initialize } from '@quramy/prisma-fabbrica/lib/internal';
import { vi } from 'vitest';

import { prisma } from '~/db.server';

// prisma-fabbrica 初期設定
initialize({ prisma });

vi.mock('./app/db.server', () => ({
  prisma: vPrisma.client,
}));
