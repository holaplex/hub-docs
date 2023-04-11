require('dotenv').config();

module.exports = {
  schema: [
    {
      [process.env.HOLAPLEX_API_ENDPOINT]: {
        headers: {
          Authorization: process.env.HOLAPLEX_AUTH_TOKEN
        }
      }
    }
  ],
  routeBasePath: 'api',
  rootPath: './docs',
  baseURL: '/api',
  loaders: {
    UrlLoader: '@graphql-tools/url-loader'
  },
  docOptions: {
    pagination: false, // disable buttons previous and next, same as cli flag --noPagination
    toc: false, // disable page table of content, same as cli flag --noToc
    index: false, // enable generated index pages, same as cli flag --index
    
  }
};
