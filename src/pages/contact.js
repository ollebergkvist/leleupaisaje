import * as React from 'react';
import { Layout } from '../compenents/layout';
import { Seo } from '../compenents/seo';

export default function AboutPage() {
  return (
    <>
      <Seo
        title="Leleu Paisaje | Contact"
        description="How to get in touch with us."
      />
      <Layout>
        <h1>Contact</h1>
      </Layout>
    </>
  );
}
