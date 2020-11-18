import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './Layout.module.scss';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className={styles.layout}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav className="fixed z-50 w-full bg-white top-0 flex flex-wrap items-center gap-2 px-2 py-3 shadow-lg">
        <Link href="/">
          <a>Home</a>
        </Link>
        |
        <Link href="/posts">
          <a>Posts</a>
        </Link>
        |
        <Link href="/about">
          <a>About</a>
        </Link>
        |
        <Link href="/users">
          <a>Users List</a>
        </Link>
        | <a href="/api/users">Users API</a>
      </nav>
    </header>
    <div className="mt-10 p-10 h-full">{children}</div>
    <footer className="fixed z-50 w-full bg-gray-100 bottom-0 shadow-xl">
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
