import React from 'react';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
const Section1 = dynamic(
  () => import('@/components/Content/PortfolioComponent/Section1'),
  {
    suspense: true,
  }
);
const Section2 = dynamic(
  () => import('@/components/Content/PortfolioComponent/Section2'),
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
      </Suspense>
    </>
  );
}
