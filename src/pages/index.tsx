import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

// const

const Index: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    console.log('sss');
    router.replace('/home');
  }, [router]);

  return <></>;
};

export default Index;
