const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        },
    });
};

// exports.createPage = async ({ actions, graphql }) => {
//     const { createPage } = actions;

//     const {
//         data: { contentfulNews, allContentfulArticle },
//     } = await graphql(``);

//     allContentfulArticle.edges.forEach((article) =>
//         createPage({
//             path: `${article.node.slug}`,
//         })
//     );
// };

// exports.onCreatePage = ({ page, actions }) => {
//     const { createPage, deletePage } = actions;

//     if (!page.context.locale) {
//         const language = page.context.language;
//         const locale = language === 'en' ? 'en-US' : language;
//         deletePage(page);

//         createPage({
//             ...page,
//             context: {
//                 ...page.context,
//                 locale,
//             },
//         });
//     }
// };
