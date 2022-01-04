import * as React from 'react';
import { Layout } from '../compenents/layout';
import { Seo } from '../compenents/seo';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const query = graphql`
    query AboutPageQuery {
        allContentfulAbout {
            nodes {
                title
                slug
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
                lead
            }
        }
    }
`;

export default function AboutPage({ data }) {
    const { title, slug, seoDescription, content, lead } =
        data.allContentfulAbout.nodes[0];

    return (
        <>
            <Seo
                title={title}
                description={seoDescription.seoDescription}
                url={slug}
            />
            <Layout>
                <h1>{title}</h1>
                <span>{lead}</span>
                <section>
                    {documentToReactComponents(JSON.parse(content.raw))}
                </section>
            </Layout>
        </>
    );
}
