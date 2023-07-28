---
sidebar_position: 6
---

Creating a Collection via API
============

Hub's API can be used to create a verified collection and then mint a token into that collection, on both Solana and Polygon.

## Step 1: Authenticate

All API calls need a header of the form
```json
  { "Authorization": "Your_API_Token" }
```

To get an API token:
    
  &nbsp; a. Log into [Hub](https://hub.holaplex.com/)

  &nbsp; b. On your organization's page, open the "Credentials" tab

  &nbsp; c. Click "Generate token"

  ## Step 2: GraphQL mutation

  A sample `createCollection` mutation:
  ```graphql
  mutation CreateCollection($input: CreateCollectionInput!) {
    createCollection(input: $input) {
        collection {
            id
            creationStatus
        }
    }
  }	
  ```
  Variables:
  ```json
  {
  "input": {
    "project":"<PROJECT_ID>",
    "blockchain": "SOLANA",
    "creators":[
      {
        "address": "<CREATOR_WALLET_ADDRESS>",
        "share": 100,
        "verified": false
      }
    ],
    "metadataJson": {
      "name": "Collection name",
      "symbol": "SYMBOL",
      "description": "Collection description",
      "image": "<LINK_TO_IMAGE>",
      "attributes": []
    }
  }
}
  ```

  Note the `creator` field `verified` can only be set to `true` when the creator is the treasury wallet. Otherwise, the `creator` input must have `"verified": false`.

  ## Step 3: Check status of collection creation
  
  To view the status of a collection created by the steps above, use the new collection's `id` that is returned when creating the collection to query:
  ```graphql
  query GetCollectionStatus($project: UUID!, $collection:UUID!) {
    project(id: $project) {
        id
        name
        collection(id: $collection) {
            id
            creationStatus
        }
    }
  }
  ```
  Variables:
  ```json
  {
    "project": "<PROJECT_ID>",
    "collection": "<COLLECTION_ID>"
  }
  ```

  Note that collections following these steps are assigned to a `project`. By default, each new `drop` is assigned a `collection` - _these_ collections can be queried under `drops` (`drops` are under `projects`).