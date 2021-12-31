import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Layout } from '../compenents/layout';
import { Seo } from '../compenents/seo';

export default function AboutPage({ data }) {
  return (
    <>
      <Seo
        title="Leleu Paisaje | About this site"
        description="More information about this site."
      />
      <Layout></Layout>
    </>
  );
}
