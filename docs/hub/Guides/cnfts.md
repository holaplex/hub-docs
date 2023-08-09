---
sidebar_position: 9
---

# Compressed NFTs on Solana

Why they're so great

## How to mint cNFTs with Hub

### Step 1: Create a Collection on Solana
On Hub, cNFTs can be minted from a *Collection*. Collection support is currently API-only. We are working to add collection creation to Hub Console as well. To view the API call that creates a new collection on Hub, please see [Creating a Collection via API](../developers/create-collection-api.md). Be sure to set `"blockchain": "SOLANA"` - cNFTs are built on Solana.

You can view your new collection on Hub Console, on your project's Collections tab. The Type is "Open" for any collections created using the `createCollection` mutation. 

Note that a collection is also created for each drop in your project - these collections that correspond to a drop have Type "Drop" and can *not* be used to mint a cNFT.

### Step 2: Mint to Collection
cNFTs can be minted to any Solana collection that was created using the `createCollection` mutation. This is currently possible using the Hub API and coming soon to the Hub Console. Use the `mintToCollection` that's detailed at [Minting to a Collection via API](../developers/mint-to-collection-api.md).

To mint a *compressed* NFT, simply set `"compressed": true`.

## Follow along

Add a video demo