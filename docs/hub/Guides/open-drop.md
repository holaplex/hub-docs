---
sidebar_position: 11
---

# Open Drops

An Open Drop offers a highly versatile method for distributing a collection of NFTs. It allows you to conveniently include images and metadata for a customizable number of NFTs, which can be minted through our API according to your specific requirements. For instance, an Open Drop is ideal for creating a generative collection, and you can leverage the Hub API to construct any distribution mechanism that suits your needs. Open Drops are currently only supported on Solana. 

Follow the steps below to create, queue, and mint an Open Drop using the Hub API.

## Create an Open Drop

First, create an Open Drop using the `createDrop` mutation. The collection (MCC on Solana) will be created using the `metadataJson` and `creators` specified in drop creation.

### Example

```graphql
mutation CreateDrop($input: CreateDropInput!) {
  createDrop(input: $input) {
    drop {
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
    "project": "<PROJECT-ID>",
    "blockchain": "SOLANA",
    "creators": [
      {
        "address": "<COLLECTION-CREATOR-ADDRESS>",
        "verified": true,
        "share": 100
      }
    ],
    "metadataJson": {
      "name": "COLLECTION NAME",
      "symbol": "COLLECTION SYMBOL",
      "description": "COLLECTION DESCRIPTION",
      "image": "<LINK-TO-COLLECTION-IMAGE>",
      "attributes": []
    },
    "type": "OPEN"
  }
}
```

Replace `<PROJECT-ID>` with the id of the project where the Open Drop should reside (on the ["Projects" tab](https://hub.holaplex.dev/projects) in Hub console, click the menu button next to the desired project to copy the project ID).

Replace `<COLLECTION-CREATOR-ADDRESS>` with the address of the creator wallet. The creator must have `"verified": false` if the wallet is not the Hub project treasury wallet. The address of the Hub project treasury wallet can be found on the "Treasury" tab on the Hub console.

Note that Open Drops are currently only supported on Solana.

As with all Hub API calls, you'll need an access token that can be generated on your organization's Credentials tab: [https://hub.holaplex.com/credentials](https://hub.holaplex.com/credentials)
This token should be included in the call's header:
```json
{
  "Authorization": "<access-token>"
}
```

Sample response:
```json
{
  "data": {
    "createDrop": {
      "drop": {
        "id": "<NEW-DROP-ID>",
        "creationStatus": "PENDING"
      }
    }
  }
}
```

Upon successful request, you can view the new drop in Hub console, on your Project's "Drops" tab.

## Queue Mint to Drop

Use the `queueMintToDrop` mutation to "load up" your drop with tokens to be minted.

A queued mint does not yet live on chain as an NFT. However, tts asset and metadata are uploaded to decentralized storage in preparation for the later mint.

### Example

```graphql
mutation QueueMintToDrop($input: QueueMintToDropInput!) {
  queueMintToDrop(input: $input) {
    collectionMint {
      id
      address
      owner
      signature
      creationStatus
    }
  }
}	
```
Variables:
```json
{
  "input": {
    "drop": "<DROP-ID>",
    "metadataJson": {
      "name": "NFT Name",
      "symbol": "SYMBOL",
      "description": "NFT description",
      "image": "https://nftstorage.link/ipfs/image-link",
      "attributes": []
    }
  }
}
```

Sample response:
```json
{
  "data": {
    "queueMintToDrop": {
      "collectionMint": {
        "id": "<MINT-ID>",
        "address": null,
        "owner": null,
        "signature": null,
        "creationStatus": "QUEUED"
      }
    }
  }
}
```

The `collectionMint: id` in the response can be used to mint that queued token at a future time.

To view your queued NFT on Hub console, navigate to the Collection page that's associated with your Open Drop.

## Mint a Queued NFT

After queuing an NFT to an Open Drop, you can mint it into a wallet using the `mintQueued` mutation. The NFT can be minted as either an NFT or cNFT and this choice is made at the time of mint.

### Example

```graphql
mutation QueueMintToDrop($input: QueueMintToDropInput!) {
  queueMintToDrop(input: $input) {
    collectionMint {
      id
      address
      owner
      signature
      creationStatus
    }
  }
}	
```
Variables:
```json
{
  "input": {
    "mint": "<MINT-ID>",
    "recipient": "<DESTINATION-WALLET-ADDRESS>",
    "compressed": true
  }
}
```

The mint can be either compressed or uncompressed.

## Get All Queued Mints

To query queued mints, use the `queuedMints` field under a `drop`:

### Example

```graphql
query GetQueuedMints($drop: UUID!) {
  drop(id: $drop) {
    queuedMints {
      id
      creationStatus
      createdAt
      metadataJson {
        name
      }
      creators {
        address
      }
    }
  }
}	
```
Variables:
```json
{
  "input": {
    "drop": "<DROP-ID>",
  }
}
```

Sample response:
```json
{
  "data": {
    "drop": {
      "queuedMints": [
        {
          "id": "<MINT-ID>",
          "creationStatus": "QUEUED",
          "createdAt": "2023-09-15T21:20:04.871010+00:00",
          "metadataJson": {
            "name": "Queued token name"
          },
          "creators": [
            {
              "address": "<CREATOR-WALLET-ADDRESS>"
            }
          ]
        }
      ]
    }
  }
}
```