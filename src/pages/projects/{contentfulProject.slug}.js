import * as React from 'react';
import { Layout } from '../../compenents/layout';
import { Seo } from '../../compenents/seo';
import { graphql } from 'gatsby';

export const query = graphql`
    query ProjectQuery($id: String) {
        contentfulProject(id: { eq: $id }) {
            id
            title
            slug
            seoDescription
            content {
                raw
            }
            architect
            landscapeArchitect
            type
            year
            squareMeters
            executionDate
            client
            clientDescription {
                clientDescription
            }
            clientWebsiteUrl
        }
    }
`;

export default function ContentfulProjects(props) {
    const { title, seoDescription, content, slug } =
        props.data.contentfulProject;

    return (
        <>
            <Seo title={title} description={seoDescription} url={slug} />
            <Layout>
                <h1>{title}</h1>
                <section>{content.raw}</section>
            </Layout>
        </>
    );
}
