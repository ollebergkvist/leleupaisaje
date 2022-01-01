import * as React from 'react';
import { Seo } from '../compenents/seo.js';
import { Layout } from '../compenents/layout.js';
import { imageWrapper } from '../styles/modules/index.module.css';

export default function IndexPage(props) {
  return (
    <>
      <Seo title="Leleu Paisaje | Home" description="Homepage." />
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
