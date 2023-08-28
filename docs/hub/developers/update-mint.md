---
sidebar_position: 9
---

# Update NFTs

In order to update an NFT using Hub, the following criteria must be met:
- The NFT was minted from a Collection on Hub
- The NFT must be on Solana
- The NFT is uncompressed

The following properties of an NFT that satisfies the above criteria can be updated:
- Name
- Symbol
- Description
- Image
- Attributes (add/remove/update)
- Seller fee basis points
- Creator(s)

### Update an NFT
Update support is available both through the HUB UI and the Hub Console as well. 
You can interact with our API at [https://api.holaplex.com/](https://api.holaplex.com/) using an access token from your Hub organization.

```graphql
mutation UpdateMint($input:UpdateMintInput!) {
  updateMint(input:$input) {
    collectionMint {
      id
      address
      owner
    }
  }
}
```
Variables:
```json
{
  "input":{
    "id":"<MINT_ID>",
    "sellerFeeBasisPoints":1,
    "creators":[
      {
        "address": "<CREATOR_WALLET_ADDRESS>",
        "share": 100,
        "verified": false
      }
    ],
    "metadataJson": {
      "name": "Updated token name",
      "symbol": "UPDATEDSYMBOL",
      "description": "Updated token image",
      "image": "<LINK_TO_IMAGE>",
      "attributes": []
    }
  }
}
```

Note the `creator` field `verified` can only be set to `true` when the creator is the treasury wallet. Otherwise, the `creator` input must have `"verified": false`.

You can view your updated token on Hub Console, on your project's Collections tab. The Type is "Open" for any collections created using the `createCollection` mutation. 

Note that a collection is also created for each drop in your project - these collections that correspond to a drop have Type "Drop" and can *not* be updated using the `updateMint` mutation.

#### How to find a `mint_id`

Query the mints in your collection:
```graphql
query GetCollectionMints($collection: UUID!) {
  collection(id: $collection) {
    mints {
      id
      creationStatus
      owner
      createdAt
      compressed
      metadataJson {
        name
      }
    }
  }
}
```

Variables:
```json
{
  "collection": "<COLLECTION_ID>"
}
```

Response:
```json
{
  "data": {
    "collection": {
      "mints": [
        {
          "id": "<MINT_ID>",
          "creationStatus": "<CREATION_STATUS>",
          "owner": "<CURRENT_OWNER>",
          "createdAt": "<CREATED_AT>",
          "compressed": <TRUE_OR_FALSE>,
          "metadataJson": {
            "name": "<TOKEN_NAME>"
          }
        },
        {
          "id": "<MINT_ID>",
          "creationStatus": "<CREATION_STATUS>",
          "owner": "<CURRENT_OWNER>",
          "createdAt": "<CREATED_AT>",
          "compressed": <TRUE_OR_FALSE>,
          "metadataJson": {
            "name": "<TOKEN_NAME>"
          }
        }
      ]
    }
  }
}
```

### View update status and update history

To view all updates made to an NFT by Hub, query `updateHistory` on the `mintId`:
```graphql
query GetUpdateHistory($mint: UUID!) {
  mint(id: $mint) {
    id
    updateHistories {
      id
      txnSignature
      status
      creditDeductionId
      createdBy
      createdAt
    }
  }
}
```

Variables:
```json
{
  "mint": "<MINT_ID>"
}
```

Sample response:
```json
{
  "data": {
    "mint": {
      "id": "bebd1d58-21fa-4662-bced-e75d65db52b5",
      "updateHistories": [
        {
          "id": "84aca0ca-6996-468f-9a43-dfd08a545258",
          "txnSignature": "jcJ3ECbGZk4NwxqZxnU5EzysWyaiRyvHkEkKppCErVrHHkBBnoA5WiRnKEc6eoZSP6wEhgcet7MJErHVR2GWMPk",
          "status": "CREATED",
          "creditDeductionId": "0000018a-053d-b9f9-d6d2-ddd021cb5276",
          "createdBy": "f18fd233-f02d-4bcb-b5a1-257dd5fff4fb",
          "createdAt": "2023-08-17T20:44:07.533964"
        },
        {
          "id": "9b5fe9c4-0751-4af1-bae5-0c6f61ef7a0c",
          "txnSignature": "ayWUQY2D3Sc2Kd4obFnq1Sm92STrPJPBku4X5wQ9o6PjuUq4a7o5Y4XUt22jX9fu8rKrt93bP34rN4mhTqhxC52",
          "status": "CREATED",
          "creditDeductionId": "0000018a-053c-603c-368c-447a9aa4d9d2",
          "createdBy": "f18fd233-f02d-4bcb-b5a1-257dd5fff4fb",
          "createdAt": "2023-08-17T20:42:39.308182"
        }
      ]
    }
  }
}
```

### Retry a failed update

If the `status` of your update is `FAILED`, you can retry the update using the `revisionId`. The `revisionId` can be found in the `id` field of `updateHistories` (above).
```graphql
mutation RetryUpdateMint($input: RetryUpdateMintInput!) {
	retryUpdateMint(input: $input) {
    status
  }
}
```

Variables:
```json
{
  "input": {
    "revisionId":"<REVISION_ID>"
  }
}
```

Sample response:
```json
{
  "data": {
    "retryUpdateMint": {
      "status": "PENDING"
    }
  }
}
```

## Follow along

Demo video coming soon!
