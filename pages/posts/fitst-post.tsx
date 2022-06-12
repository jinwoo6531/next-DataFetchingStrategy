import Head from 'next/head';
import React from 'react';

interface IPost {
  title: string;
  body: string;
}

function FitstPostPage({ post }: any) {
  return (
    <>
      <Head>
        <title>{post.title} - My Blog</title>
      </Head>
      <main>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </main>
    </>
  );
}

export default FitstPostPage;

export async function getStaticProps() {
  return {
    props: {
      post: {
        title: 'first Post',
        body: 'My first post, as static props',
      },
    },
  };
}
