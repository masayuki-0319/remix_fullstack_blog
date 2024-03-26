import { Link } from '@remix-run/react';

import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Remix fullstack blog' },
    { name: 'description', content: 'Remix fullstack blog' },
  ];
};

export default function Index() {
  return (
    <div>
      <Link to='/posts'>ポスト一覧</Link>
    </div>
  );
}
