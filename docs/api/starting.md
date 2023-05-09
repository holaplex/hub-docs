---
id: schema
slug: /api
title: API Reference
sidebar_position: 1
hide_table_of_contents: true
pagination_next: null
pagination_prev: null
sidebar_class_name: navbar__toggle
---

# Overview

The Holaplex Hub API provides a GraphQL interface for creating NFT-based blockchain applications. It allows users to interact with the API to provision custodial wallets and mint NFT drops on multiple blockchains. The API also provides features for managing users and organizations, as well as subscribing to change events through webhooks. It is not RESTful, and is designed to be accessed using GraphQL. Overall, the Holaplex Hub API is a powerful tool for developers looking to build blockchain applications with support for multiple chains and custodial wallet management.

## Authentication

To authenticate with the Holaplex Hub API, you need to include an Authorization header in your GraphQL API requests. The header should contain the word "Bearer" followed by a space, and then your API access token.

Here's an example of what the Authorization header should look like:

```
curl -X POST -H "Authorization: <access_token>" \
-H "Content-Type: application/json" \
-d '{"query": "query($id: UUID!) { organization(id: $id) { id name } }", "variables": {"id": "<organization_id>"}}' \
https://api.holaplex.com/graphql
```

Replace <access_token> with a valid access token obtained through the authentication process, and replace <organization_id> with the ID of the organization you want to query.

To obtain an API access token, you'll need to create an API credential using Hub Credentials. Once you have an API credential, you can use it to authenticate with the Hub API and make authorized requests.

When sending GraphQL requests to the Holaplex Hub API, you can use any GraphQL client library or tool that supports sending headers with requests, such as Apollo Client or Postman. Simply include the Authorization header with your access token in each request to authenticate your API calls.

Use the docs in the sidebar to find out how to use the schema:

- **Allowed operations**: queries and mutations.
- **Schema-defined types**: scalars, objects, enums, interfaces, unions, and input objects.

