import React from 'react';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
const Section1 = dynamic(
  () => import('@/components/Content/MobileComponent/Section1'),
  {
    suspense: true,
  }
);
const Section2 = dynamic(
  () => import('@/components/Content/MobileComponent/Section2'),
  {
    suspense: true,
  }
);
const Section3 = dynamic(
  () => import('@/components/Content/MobileComponent/Section3'),
  {
    suspense: true,
  }
);
export default function index() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Section1 />
        <Section2 />
        <Section3 />
      </Suspense>
    </>
  );
}
