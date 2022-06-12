import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Title from '../components/Title';
import { Products } from '../lib/constrants';
import { getProducts } from '../lib/products';

const Home: NextPage = ({ products }: any) => {
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="px-6 py-4">
        <Title>Next Shop</Title>
        <ul>
          {products.map((product: Products) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const products = await getProducts();
  return {
    props: {
      products,
    },
    revalidate: 5 * 60,
  };
};
