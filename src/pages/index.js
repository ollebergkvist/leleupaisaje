import * as React from 'react';
import { Seo } from '../compenents/seo.js';
import { Layout } from '../compenents/layout.js';
import { StaticImage } from 'gatsby-plugin-image';
import { imageWrapper } from '../styles/modules/index.module.css';
import { graphql } from 'gatsby';

export default function IndexPage(props) {
  return (
    <>
      <Seo
        title="Leleu Paisaje | About this site"
        description="More information about this site."
      />
      <Layout>
        <section>
          <h1>Home</h1>
          <div className={imageWrapper}>
            {/* <StaticImage
              src="../images/ivana-la-61jg6zviI7I-unsplash.jpg"
              alt="dog"
              placeholder="dominantColor"
              width={300}
              height={300}
            /> */}
          </div>
        </section>
      </Layout>
    </>
  );
}
