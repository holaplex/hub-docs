# hub-docs

Guides and API documentation for the Holaplex Hub

# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```bash
$ yarn
```

### Local Development

```bash
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Commands

Retrieve the most recent version of the GraphQL schema and generate documentation pages for the "API Reference.

Add `.env` file to the root of the project and set the below environment variables. You can generate an auth token from the credentials tab of your HUB account.

```
HOLAPLEX_API_ENDPOINT=https://api.holaplex.com/graphql
HOLAPLEX_AUTH_TOKEN=
```

Once your environment is set run the below script to re-generate the api documentation.

```bash
$ yarn run graphql-to-doc
```

Create a branch, commit the changes, open a pull request, and merge. Once the changes are merged into the `main` branch they will be automatically deployed via a github action workflow.

### Deployment

Using SSH:

```bash
$ USE_SSH=true yarn deploy
```

Not using SSH:

```bash
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
