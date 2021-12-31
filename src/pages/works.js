import * as React from 'react';
import Layout from '../compenents/layout';
import { Seo } from '../compenents/seo';

export default function WorksPage() {
  return (
    <>
      <Seo
        title="Leleu Paisaje | Works"
        description="Information about our recent works."
      />
      <Layout>
        <h1>Works</h1>
      </Layout>
    </>
  );
}
