---
sidebar_position: 8
---

# Importing a Collection

Any existing Solana collection can be imported into Hub for management and analysis.

## Prerequisites

- A project created within [Holaplex Hub](https://hub.holaplex.com/)
- Access to the Holaplex Hub GraphQL API (an access token can be generated on Hub's "Credentials" page)
- Hub API Playground: [https://api.holaplex.com](https://api.holaplex.com/). You could also use a GraphQL client such as [Apollo Client](https://www.apollographql.com/client/) or a tool like [GraphQL Playground](https://github.com/graphql/graphql-playground)
- Your collection's current update authority keys must be accessible via cli

For all API requests to Hub, you'll need to include an authentication header of the form
```json
  {
    "Authorization": "<access-token>"
  }
```

## Step 1: Import collection mutation

The first step is to call the `importSolanaCollection` mutation to make Hub aware of the collection and viewable in the Hub console. Select the project where the collection should belong and the existing collection's token address.

#### Mutation
```graphql
mutation ImportSolanaCollection($input:ImportCollectionInput!) {
	importSolanaCollection(input:$input) {
    status
  }
}
```

#### Variables
```json
{
  "input": {
    "project":"<PROJECT_ID>",
    "collection":"<COLLECTION_TOKEN_ADDRESS>"
  }
}
```

The `project-id` can be found in Hub, by clicking the menu button next to the project name.

### Example response

```json
{
  "data": {
    "importSolanaCollection": {
      "status": "PENDING"
    }
  }
}
```

Once the collection is imported, it will be visible on Hub, under the "Collections" tab of the corresponding project.

## Step 2: Transfer update authority

In order to mint tokens to the collection, transfer the collection's update authority to the Hub project treasury wallet. Transfer the update authority using the Metaboss `set-update-authority-all` command: https://metaboss.rs/set.html#set-update-authority.

## Follow along

<iframe width="640" height="400" src="https://www.loom.com/embed/f738235295024bbbb1fef09d65de1467?sid=535401a4-436b-4707-a2c8-9ad1571c62fa" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>