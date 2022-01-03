import * as React from 'react';
import { Layout } from '../compenents/layout';
import { Seo } from '../compenents/seo';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const query = graphql`
    query AboutPageQuery {
        contentfulAbout {
            title
            seoDescription {
                seoDescription
            }
            content {
                raw
                # references {
                #     ... on ContentfulAsset {
                #         contentful_id
                #         gatsbyImageData(
                #             layout: FULL_WIDTH
                #             placeholder: BLURRED
                #         )
                #     }
                # }
            }
        }
    }
`;

export default function AboutPage({ data }) {
    const { title, seoDescription, content } = data.contentfulAbout;

    return (
        <>
            <Seo title={title} description={seoDescription.seoDescription} />
            <Layout>
                <h1>{title}</h1>
                <section>
                    {documentToReactComponents(JSON.parse(content.raw))}
                </section>
                <section></section>
            </Layout>
        </>
    );
}
