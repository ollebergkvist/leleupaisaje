import * as React from 'react';
import { Layout } from '../compenents/layout';
import { Seo } from '../compenents/seo';

export default function NewsPage({ data }) {
  return (
    <>
      <Seo title="Leleu Paisaje | News" description="Latest news." />
      <Layout>
        <h1>News</h1>
      </Layout>
    </>
  );
}
