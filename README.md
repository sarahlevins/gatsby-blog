# Gatsby Blog
This is a simple blog built with the [gatsby-starter-hello-world template](https://github.com/gatsbyjs/gatsby-starter-hello-world). Built following [Marcelo Pastorio's](https://softwaredeveloper.io/) [GatsbyJS: Getting Started tutorial on Pluralsight](https://app.pluralsight.com/library/courses/gatsbyjs-getting-started/table-of-contents).

Deployed [here using Surge](levinscodes-gatsby-blog.surge.sh).

## Skills Outline
This site uses the following
* SASS CSS-Modules to reduce the amount of code, and scope styles locally to avoid class name conflicts.
* React style components which are reusable across multiple pages.
* GraphQL to query data to render on the site's pages.
* The gatsby-source-filesytem and gatsby-transformer-remark plugins to bring in data from local files and change it to JSON format.
* The gatsby-node.js file to perform actions every time a MarkdownRemark node is processed during build, which creates blog post pages from those markdown files with friendly urls, using a template.

## Usage Guide

1.  **Clone the repo and run locally**

    Ensure you have the Gatsby CLI installed, clone this repo then type the following commands into terminal

    ```shell
    cd my-hello-world-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    The site is now running at `http://localhost:8000`!