---
sidebar_position: 11
---

# Open Drops

An Open Drop offers a highly versatile method for distributing a collection of NFTs. It allows you to conveniently include images and metadata for a customizable number of NFTs, which can be minted through our API according to your specific requirements. For instance, an Open Drop is ideal for creating a generative collection, and you can leverage the Hub API to construct any distribution mechanism that suits your needs. Open Drops are currently only supported on Solana and only possible using Hub API.

## Create a collection?

If you'd like your NFTs created via an Open Drop to belong to a collection (e.g. an MCC on Solana), create a collection in Hub first:



## Create an Open Drop

First, create an Open Drop using the `createDrop` mutation. The collection (MCC on Solana) will be created using the metadata JSON specified in drop creation.

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
        "address": "<CREATOR-ADDRESS>",
        "verified": true,
        "share": 100
      }
    ],
    "metadataJson": {
      "name": "WHAT IS THIS",
      "symbol": "TEST",
      "description": "WHAT IS THIS",
      "image": "https://nftstorage.link/ipfs/bafybeifvj5diegyxcyr62l2zvzfo6y2s3ijndyb4y633telkgvgawquucm",
      "attributes": []
    },
    "type": "OPEN"
  }
}
```

Replace `<PROJECT-ID>` with the id of the project where the Open Drop should reside (on the ["Projects" tab](https://hub.holaplex.dev/projects) in Hub console, click the menu button next to the desired project to copy the project ID).

Replace `<CREATOR-ADDRESS>` with ..... ??? TO DO!

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

NOT TRUE If you'd like to assign the queued NFT to a collection (MCC on Solana), create the collection before queuing a mint to the drop. After the collection is created, include the collection ID in the metadata JSON input for the queued drop.

A queued mint does not yet live on chain as an NFT. Its asset and metadata are uploaded to decentralized storage.

TO DO: does it have to be in the associated collection? What if collection field is blank? What if collection field points to a different collection?

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

To view your queued NFT on Hub Console, navigate to the Collection page that's associated with your Open Drop.

## Mint a Queued NFT

After queuing an NFT to an Open Drop, you can mint it into a wallet using the `mintQueued` mutation.

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