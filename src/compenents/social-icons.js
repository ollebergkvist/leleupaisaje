import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

export function SocialIcons() {
    const query = useStaticQuery(graphql`
        query SocialIconsQuery {
            contentfulSocialLinks {
                facebookUrl
                instagramUrl
                linkedinUrl
            }
        }
    `);

    const { facebookUrl, instagramUrl, linkedinUrl } =
        query.contentfulSocialLinks;

    return (
        <div class="social-links">
            <ul>
                <li>
                    <a href={facebookUrl}>
                        <StaticImage
                            src="../../static/social-icons/facebook-square-brands.svg"
                            alt="Facebook fontawesome square icon"
                            height={16}
                            width={16}
                            placeholder="dominantColor"
                            layout="fixed"
                            fadeIn={false}
                            loading="eager"
                        />
                    </a>
                </li>
                <li>
                    <a href={instagramUrl}>
                        <StaticImage
                            src="../../static/social-icons/instagram-square-brands.svg"
                            alt="Instagram fontawesome square icon"
                            height={16}
                            width={16}
                            placeholder="dominantColor"
                            layout="fixed"
                            fadeIn={false}
                            loading="eager"
                        />
                    </a>
                </li>
                <li>
                    <a href={linkedinUrl}>
                        <StaticImage
                            src="../../static/social-icons/linkedin-brands.svg"
                            alt="Linkedin fontawesome square icon"
                            height={16}
                            width={16}
                            placeholder="dominantColor"
                            layout="fixed"
                            fadeIn={false}
                            loading="eager"
                        />
                    </a>
                </li>
            </ul>
        </div>
    );
}
