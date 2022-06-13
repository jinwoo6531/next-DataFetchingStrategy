import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import Title from '../../components/Title';
import { Products } from '../../lib/constrants';
import { getProduct, getProducts } from '../../lib/products';

const ProductPage = ({ product }: any) => {
  console.log('[ProductPage] render', product);

  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="px-6 py-4">
        <Title>{product.title}</Title>
        <p>{product.description}</p>
      </main>
    </>
  );
};

export default ProductPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await getProducts();
  return {
    paths: products.map((product: Products) => ({
      params: { id: product.id.toString() },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({
  params: { id },
}: any) => {
  try {
    const product = await getProduct(id);
    return {
      props: { product },
      revalidate: 30,
    };
  } catch (error) {
    return { notFound: true };
  }
};
