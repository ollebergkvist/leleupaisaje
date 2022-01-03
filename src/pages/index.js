import * as React from 'react';
import { Seo } from '../compenents/seo.js';
import { Layout } from '../compenents/layout.js';
import { graphql, useStaticQuery } from 'gatsby';
import { Language } from '../compenents/language.js';

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
                    <h1>{title}</h1>
                    <div className="test"></div>
                </section>
            </Layout>
            <Language />
        </>
    );
}
