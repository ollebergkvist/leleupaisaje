import * as React from 'react';
import { Layout } from '../../compenents/layout';
import { Seo } from '../../compenents/seo';
import { graphql } from 'gatsby';

export const query = graphql`
    query ArticleQuery($id: String) {
        contentfulArticle(id: { eq: $id }) {
            id
            slug
            title
            seoDescription
            content {
                raw
            }
            publishedDate
        }
    }
`;

export default function ContentfulNews(props) {
    const { title, seoDescription, slug, publishedDate } =
        props.data.contentfulArticle;

    return (
        <>
            <Seo
                title={title}
                description={seoDescription.seoDescription}
                url={slug}
            />
            <Layout>
                <h1>{title}</h1>
                <p>{publishedDate}</p>
            </Layout>
        </>
    );
}
