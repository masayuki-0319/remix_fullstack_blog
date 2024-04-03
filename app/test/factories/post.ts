import { definePostFactory } from '../__generated__/fabbrica';

export const PostTestFactory = definePostFactory({
  defaultData: async ({ seq }) => ({
    title: `test-${seq}`,
    content: `test-${seq}`,
  }),
});
