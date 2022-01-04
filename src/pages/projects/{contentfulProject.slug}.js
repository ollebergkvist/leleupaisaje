import * as React from 'react';
import { Layout } from '../../compenents/layout';
import { Seo } from '../../compenents/seo';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

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
                gatsbyImageData(layout: FULL_WIDTH)
                description
            }
            gallery {
                gatsbyImageData(layout: CONSTRAINED)
                description
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

export default function ContentfulProjects({ data }) {
    const {
        title,
        slug,
        seoDescription,
        content,
        client,
        featuredImage,
        gallery,
        clientDescription,
        clientWebsiteUrl,
        type,
        location,
        status,
        projectYear,
        projectArea,
        collaborators,
        publishedDate,
    } = data.contentfulProject;

    const projectFeaturedImage = getImage(featuredImage);

    return (
        <>
            <Seo title={title} description={seoDescription} url={slug} />
            <Layout>
                <h1>{title}</h1>
                <div>
                    <GatsbyImage
                        image={projectFeaturedImage}
                        alt={featuredImage.description}
                    />
                </div>
                <section>
                    {documentToReactComponents(JSON.parse(content.raw))}
                </section>
                <section>
                    <p>{client}</p>
                    <p>{clientDescription.clientDescription}</p>
                    <p>{clientWebsiteUrl}</p>
                </section>
                <section>
                    <p>{client}</p>
                    <p>{clientWebsiteUrl}</p>
                    <p>{type}</p>
                    <p>{location}</p>
                    <p>{status}</p>
                    <p>{projectYear}</p>
                    <p>{projectArea}</p>
                    <p>{collaborators}</p>
                    <p>{publishedDate}</p>
                </section>
                <section>
                    {gallery.map((item, id) => {
                        const { gatsbyImageData, description } = item;
                        return (
                            <div key={id}>
                                <GatsbyImage
                                    image={getImage(gatsbyImageData)}
                                    alt={description}
                                />
                            </div>
                        );
                    })}
                </section>
                <section>
                    <h4>Links to next previous project here</h4>
                </section>
                <section>
                    <h2>Selected projects here</h2>
                </section>
            </Layout>
        </>
    );
}
