import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export function SocialLinks() {
    const query = useStaticQuery(graphql`
        query SocialLinksQuery {
            contentfulSocialLinks {
                facebookLabel
                facebookUrl
                instagramLabel
                instagramUrl
                linkedinLabel
                linkedinUrl
            }
        }
    `);

    const {
        facebookLabel,
        facebookUrl,
        instagramLabel,
        instagramUrl,
        linkedinLabel,
        linkedinUrl,
    } = query.contentfulSocialLinks;

    return (
        <ul>
            <li>
                <a href={facebookUrl}>{facebookLabel}</a>
            </li>
            <li>
                <a href={instagramUrl}>{instagramLabel}</a>
            </li>
            <li>
                <a href={linkedinUrl}>{linkedinLabel}</a>
            </li>
        </ul>
    );
}
