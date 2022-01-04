import * as React from 'react';
import { Layout } from '../../compenents/layout';
import { Seo } from '../../compenents/seo';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

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
            featuredImage {
                description
                file {
                    url
                }
            }
            gallery {
                file {
                    url
                }
            }
            client
            clientDescription {
                clientDescription
            }
            clientWebsiteUrl
            type
            location
            status
            projectYear
            projectArea
            collaborators
            publishedDate
        }
    }
`;

export default function ContentfulProjects(props) {
    const {
        title,
        slug,
        seoDescription,
        content,
        client,
        clientDescription,
        clientWebsiteUrl,
        type,
        location,
        status,
        projectYear,
        projectArea,
        collaborators,
        publishedDate,
    } = props.data.contentfulProject;

    return (
        <>
            <Seo title={title} description={seoDescription} url={slug} />
            <Layout>
                <h1>{title}</h1>
                <section>
                    {documentToReactComponents(JSON.parse(content.raw))}
                </section>
                <section>
                    <span>{client}</span>
                    <span>{clientDescription.clientDescription}</span>
                    <span>{clientWebsiteUrl}</span>
                </section>
                <section>
                    <span>{client}</span>
                    <span>{clientWebsiteUrl}</span>
                    <span>{type}</span>
                    <span>{location}</span>
                    <span>{status}</span>
                    <span>{projectYear}</span>
                    <span>{projectArea}</span>
                    <span>{collaborators}</span>
                    <span>{publishedDate}</span>
                </section>
            </Layout>
        </>
    );
}
