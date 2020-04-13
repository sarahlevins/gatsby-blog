const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

// create slug urls for each markdown blog post
exports.onCreateNode = ({ node, getNode, actions }) => {
    if (node.internal.type === 'MarkdownRemark') {
        const { createNodeField } = actions
        const slug = createFilePath({ node, getNode, basePath: 'markdown' })
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return new Promise(resolve => {
        graphql(`{
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }

            }
        }`
        ).then(result => {
            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                createPage({
                    path: node.fields.slug,
                    component: path.resolve('./src/templates/post.js'),
                    context: {
                        slug: node.fields.slug,
                    }
                })
            })
            resolve()
        })
    })
}