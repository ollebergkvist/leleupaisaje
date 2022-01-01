import * as React from 'react';
import { Layout } from '../compenents/layout';
import { Seo } from '../compenents/seo';

export default function AboutPage({ data }) {
  return (
    <>
      <Seo
        title="Leleu Paisaje | Projects"
        description="More information about our projects."
      />
      <Layout></Layout>
    </>
  );
}
