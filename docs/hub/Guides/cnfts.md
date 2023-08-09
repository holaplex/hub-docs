---
sidebar_position: 9
---

# Compressed NFTs on Solana

Compressed NFTs (cNFTs) use State Compression and merkle trees to reduce the storage cost for NFTs by nearly 1000x. Instead of storing an NFT's metadata in a typical Solana account, cNFTs store the metadata within the ledger (off-chain, but subject to consensus), rather than fully on-chain like conventional NFTs. 

This allows cNFTs to inherit the security and speed of the Solana blockchain, while at the same time reduce overall storage costs.

Solana RPC providers are utilized to store and manage data off-chain. Indexers are used to manage transaction data and facilitate data queries between RPCs and on-chain smart contracts for cNFTs. 

Existing smart contracts on Solana may need to be modified to interact with cNFTs, as this technology is still fairly new. However, with time and growing adoption, cNFTs will become fully supported by all programs in the ecosystem. 

With HUB, you can mint and also transfer cNFTs, just like any NFTs. And just like we support [transfer tracking](./transfer-out-of-hub-wallet.md) for all NFTs, cNFTs can be tracked as well so that you always know which wallets are holding your NFTs!

### How much cheaper are cNFTs?

Minting 10 Million NFTs on Solana used to cost 2.5 Million dollars. Now it’ll cost less than $250! This is assuming a price of $21 for each $SOL. [[Source](https://solana.com/news/state-compression-compressed-nfts-solana)]

### What are the benefits of cNFTs?

cNFTs will not only make minting NFTs more accessible to everyone, but it will also allow for more creativity to flourish in the NFT space. By reducing storage costs, creators, game developers and businesses of all kinds can now mint more NFTs & leverage the blockchain more effectively, experiment with new kinds of collections, and create more affordable experiences for everyone.

Opening up unimaginable use-cases like storing platform engagement like likes, comments, etc, daily streams of user data, daily or even hourly on-chain actions by users, etc, all are now possible at a fraction of the cost!

## How to mint cNFTs with Hub

### Step 1: Create a Collection on Solana
On Hub, cNFTs can be minted from a *Collection*. Collection support is currently API-only. We are working to add collection creation to Hub Console as well. You can interact with our API at [https://api.holaplex.com/](https://api.holaplex.com/) using an access token from your Hub organization.

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

For more info on creating a new collection on Hub, please see [Creating a Collection via API](../developers/create-collection-api.md). Be sure to set `"blockchain": "SOLANA"` - cNFTs are only available on Solana.

You can view your new collection on Hub Console, on your project's Collections tab. The Type is "Open" for any collections created using the `createCollection` mutation. 

Note that a collection is also created for each drop in your project - these collections that correspond to a drop have Type "Drop" and can *not* be used to mint a cNFT.

### Step 2: Mint to Collection
cNFTs can be minted to any Solana collection that was created using the `createCollection` mutation. This is currently possible using the Hub API and coming soon to the Hub Console. Use the `mintToCollection` that's detailed at [Minting to a Collection via API](../developers/mint-to-collection-api.md).

To mint a *compressed* NFT, simply set `"compressed": true`.

```graphql
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
  ```json
  {
    "input": {
      "collection": "<COLLECTION_ID>",
      "recipient": "<RECIPIENT_WALLET_ADDRESS>",
      "compressed": true,
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

## Follow along

Demo video coming soon!
