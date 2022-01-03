import { graphql } from 'gatsby';
import * as React from 'react';
import { Layout } from '../compenents/layout';
import { Seo } from '../compenents/seo';

export const query = graphql`
    query ContactPageQuery {
        contentfulContact {
            title
            address
            zip
            country
            state
            city
            email
            phone
        }
    }
`;

export default function AboutPage(props) {
    const { title, address, zip, country, state, city, email, phone } =
        props.data.contentfulContact;

    return (
        <>
            <Seo title={title} description="How to get in touch with us." />
            <Layout>
                <h1>{title}</h1>
                <section>
                    <form
                        method="post"
                        action="https://formspree.io/f/xwkypneo"
                    >
                        <label>
                            Your name:
                            <input type="text" />
                        </label>
                        <label>
                            Your email:
                            <input type="email" name="_replyto" />
                        </label>
                        <label>
                            Your message:
                            <textarea name="message"></textarea>
                        </label>
                        <button type="submit">Send</button>
                    </form>
                </section>
                <section>
                    <address>
                        <a href={`mailto:${email}`}>{email}</a>
                        <a href={`tel:${[phone]}`}>{phone}</a>
                        <ul>
                            <li>{address}</li>
                            <li>{zip}</li>
                            <li>{city}</li>
                            <li>{state}</li>
                            <li>{country}</li>
                        </ul>
                    </address>
                </section>
            </Layout>
        </>
    );
}
