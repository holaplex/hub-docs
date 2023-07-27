---
sidebar_position: 7
---

Minting to a Collection via API
============

Hub's API can be used to create a verified collection on Solana and then mint a token into that collection, compressed or uncompressed.

## Step 1: Authenticate

All API calls need a header of the form
```
  { "Authorization": "Your_API_Token" }
```

To get an API token:
    
  &nbsp; a. Log into [Hub](https://hub.holaplex.com/)

  &nbsp; b. On your organization's page, open the "Credentials" tab

  &nbsp; c. Click "Generate token"

  ## Step 2: GraphQL mutation

  A sample `mintToCollection` mutation:
  ```
  mutation MintToCollection($input: MintToCollectionInput!) {
    mintToCollection(input: $input) {
        collectionMint {
            id
            creationStatus
            compressed
        }
    }
  }
  ```
  Variables:
  ```
  {
    "input": {
        "collection": "<COLLECTION_ID>",
        "recipient": "<RECIPIENT_WALLET_ADDRESS>",
        "compressed": false,
        "creators":[
            {
                "address": "<CREATOR_WALLET_ADDRESS>",
                "share": 100,
                "verified": false
            }
        ],
        "metadataJson": {
            "name": "Token name",
            "symbol": "SYMBOL",
            "description": "Token description",
            "image": "<LINK_TO_IMAGE>",
            "attributes": []
        }
    }
  }
  ```

  Note the `creator` field `verified` can only be set to `true` when the creator is the project treasury wallet. Otherwise, the `creator` input must have `"verified": false`.

  ## Step 3: Check status of collection mint
  
  To view the status of a collection mint created by the steps above, use the collection's `id`:
  ```
  query GetCollectionMintStatus($project: UUID!, $collection:UUID!) {
    project(id: $project) {
        id
        name
        collection(id: $collection) {
            id
            creationStatus,
      			mints {
                    id,
                    creationStatus
                }
            }
        }
    }
  ```
  Variables:
  ```
  {
    "project": "<PROJECT_ID>",
    "collection": "<COLLECTION_ID>"
  }
  ```

 ## Step 4: Retry a failed mint

 To retry a mint from collection that has failed, use the `retryMintToCollection` mutation:
 ```
    mutation RetryMintToCollection($input: RetryMintEditionInput!) {
        retryMintToCollection(input: $input) {
            collectionMint {
                id
                creationStatus
                compressed
            }
        }
    }
 ```
 Variables:
 ```
    {
        "input": {
            "id":"<MINT_ID>"
        }
    }
```