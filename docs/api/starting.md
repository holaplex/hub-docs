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

## Using the API Explorer

Our [API explorer](https://api.holaplex.com) is an interactive interface used to send HTTP requests to our API and view the server responses. Here is how to use it:

1.  Generate an API Token:

    -   To use the API Explorer, you'll first need to generate an API token. This is found in the Hub Credentials section of the Hub sidebar.
    -   Click "Create New Token" to generate your unique API token. Make sure to save this in a secure location.
2.  Use the API Token:

    -   After generating your API token, switch to the 'Headers' tab in the API Explorer.
    -   Set the following JSON as your headers:

    ```json
    {
     "Authorization": "<api_token>"
    }
    ```

    -   Replace `<api_token>` with the token you generated in step 1. 

Please remember that all API requests must be made with this token. Keep your API token secret to prevent misuse.


When sending GraphQL requests to the Holaplex Hub API, you can use any GraphQL client library or tool that supports sending headers with requests, such as Apollo Client or Postman. Simply include the Authorization header with your access token in each request to authenticate your API calls.

Use the docs in the sidebar to find out how to use the schema:

- **Allowed operations**: queries and mutations.
- **Schema-defined types**: scalars, objects, enums, interfaces, unions, and input objects.

