import { graphql } from 'gatsby';
import * as React from 'react';
import { Layout } from '../compenents/layout';
import { Seo } from '../compenents/seo';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const query = graphql`
    query ContactPageQuery($locale: String) {
        allContentfulContact(filter: { node_locale: { eq: $locale } }) {
            nodes {
                title
                slug
                seoDescription
                content {
                    raw
                }
                email
                phone
                lead
                formNameLabel
                formEmailLabel
                formMessageLabel
                buttonText
            }
        }
    }
`;

export default function ContactPage({ data }) {
    const {
        title,
        slug,
        seoDescription,
        content,
        lead,
        email,
        phone,
        formNameLabel,
        formEmailLabel,
        formMessageLabel,
        buttonText,
    } = data.allContentfulContact.nodes[0];

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
                <p>{documentToReactComponents(JSON.parse(content.raw))}</p>
                <section>
                    <form
                        method="post"
                        action="https://formspree.io/f/xwkypneo"
                    >
                        <label>
                            {formNameLabel}
                            <input type="text" />
                        </label>
                        <label>
                            {formEmailLabel}
                            <input type="email" name="_replyto" />
                        </label>
                        <label>
                            {formMessageLabel}
                            <textarea name="message"></textarea>
                        </label>
                        <button type="submit">{buttonText}</button>
                    </form>
                </section>
                <section>
                    <address>
                        <span>{email}</span>
                        <span>{phone}</span>
                    </address>
                </section>
            </Layout>
        </>
    );
}
