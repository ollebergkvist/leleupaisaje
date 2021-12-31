import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Layout } from '../compenents/layout';
import { Seo } from '../compenents/seo';

export default function NewsPage({ data }) {
  return (
    <>
      <Seo
        title="Leleu Paisaje | About this site"
        description="More information about this site."
      />
      <Layout>
        <h1>About</h1>
      </Layout>
    </>
  );
}
