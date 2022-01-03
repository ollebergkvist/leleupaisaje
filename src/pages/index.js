import * as React from 'react';
import { Seo } from '../compenents/seo.js';
import { Layout } from '../compenents/layout.js';
import { graphql, useStaticQuery } from 'gatsby';
import { Language } from '../compenents/language.js';

export const query = graphql`
    query PageQuery($locale: String) {
        allContentfulHome(filter: { node_locale: { eq: $locale } }) {
            nodes {
                title
            }
        }
    }
`;

export default function IndexPage({ data }) {
    const { title } = data.allContentfulHome.nodes[0];

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
