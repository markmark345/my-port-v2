import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="bg-red-300 px-10">
        <h1>Hello</h1>
      </div>
    </>
  );
};

export default Home;
