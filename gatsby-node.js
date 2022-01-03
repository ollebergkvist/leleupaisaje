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

exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions;
    deletePage(page);
    // You can access the variable "locale" in your page queries now
    createPage({
        ...page,
        context: {
            ...page.context,
            locale: page.context.intl.language,
        },
    });
};
