require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        siteUrl: 'https://leleupaisaje.com',
        title: 'Leleu Paisaje',
        description: 'Sustainable landscape architect',
        image: 'https://gersom.nl/static/c6a7c58c9414fedce81adbc1072da3e2/1b4be/twitter-og-image.jpg',
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: `${process.env.GOOGLE_ANALYTICS_TRACKING_ID}`,
            },
        },
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'social-icons',
                path: `${__dirname}/static/social-icons`,
                name: 'images',
                path: `${__dirname}/static/images`,
            },
            __key: 'images',
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_DELIVERY_API,
                host: process.env.CONTENTFUL_HOST,
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `open sans\:400`,
                    'open sans:400i',
                    `open sans\:700`,
                    'open sans:700i',
                    `open sans\:800`,
                    'open sans:800i',
                ],
            },
        },
        {
            resolve: `gatsby-plugin-react-intl`,
            options: {
                // language JSON resource path
                path: `${__dirname}/src/intl`,
                // supported language
                languages: [`en`, `es`],
                // language file path
                defaultLanguage: `es`,
                // option to redirect to `/ko` when connecting `/`
                redirect: true,
                // option for use / as defaultLangauge root path. if your defaultLanguage is `ko`, when `redirectDefaultLanguageToRoot` is true, then it will not generate `/ko/xxx` pages, instead of `/xxx`
                redirectDefaultLanguageToRoot: false,
                // paths that you don't want to genereate locale pages, example: ["/dashboard/","/test/**"], string format is from micromatch https://github.com/micromatch/micromatch
                ignoredPaths: [],
                // option to fallback to the defined language instead of the `defaultLanguage` if the user langauge is not in the list
                fallbackLanguage: `en`,
            },
        },
    ],
};
