'use client';

import Link from 'next/link';

function NavBar(): JSX.Element {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
      </nav>
      <Link href="posts">Posts</Link>
    </div>
  );
}

export default NavBar;
