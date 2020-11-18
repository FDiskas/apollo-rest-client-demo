import React from 'react';
import { Posts } from 'src/containers/posts/Posts';
import Layout from 'src/layouts/Layout';

export const PostsPage = () => (
  <Layout title="Users List | Next.js + TypeScript Example">
    <h1 className="text-lg font-bold">Posts List</h1>
    <Posts />
  </Layout>
);

export default PostsPage;
