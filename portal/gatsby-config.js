/* eslint-disable */
module.exports = {
    pathPrefix: "/jokul",
    siteMetadata: {
        title: `Jokul`,
        description: `Documentation of Jøkul design system`,
        author: `Fremtind`,
    },
    plugins: [
        "gatsby-plugin-typescript",
        "gatsby-plugin-sass",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `${__dirname}/src/texts`,
            },
        },
        `gatsby-transformer-remark`,
        {
            resolve: "gatsby-plugin-page-creator",
            options: {
                name: `components`,
                path: `${__dirname}/../packages`,
                ignore: [`!**/example/ex/**`],
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                defaultLayouts: {
                    default: require.resolve("./src/components/Layout/ComponentLayout.tsx"),
                },
            },
        },
    ],
};
