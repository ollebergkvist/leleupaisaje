import * as React from 'react';
import { Seo } from '../compenents/seo.js';
import { Layout } from '../compenents/layout.js';
import { imageWrapper } from '../styles/modules/images.module.css';
import { graphql, useStaticQuery } from 'gatsby';

export default function IndexPage() {
    const query = useStaticQuery(graphql`
        query HomePageQuery {
            allContentfulHome {
                nodes {
                    title
                }
            }
        }
    `);

    const { title } = query.allContentfulHome.nodes[0];

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
