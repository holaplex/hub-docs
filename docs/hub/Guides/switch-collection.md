---
sidebar_position: 10
---

# Move an NFT from one collection to another

The Hub API can be used to move an NFT from one collection to another. In order to use the `switchCollection` mutation, the following must be true:
- The NFT to be moved was created in Hub (or imported into Hub and has the Hub project treasury as its update authority)
- The NFT is on Solana
- The NFT is *not* compressed
- The destination collection belongs to the same Hub project as the original collection
- The destination collection was created in Hub (or imported into Hub and has the Hub project treasury as its update authority)

Upon switching collections, credits will be deducted from your organization's account. To view the number of credits charged for this or any action, view your organization's credit page: [https://hub.holaplex.com/credits/costs](https://hub.holaplex.com/credits/costs)

## Example

```graphql
mutation SwitchCollection($input: SwitchCollectionInput!) {
    switchCollection(input: $input) {
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
    "input": {
        "mint": "<MINT-ID>",
        "collectionAddress": "<COLLECTION-ADDRESS>"
    }
}
```
Replace `<MINT-ID>` with the id of the mint to be moved and `<COLLECTION-ADDRESS>` with the on-chain address of the destination collection.

As with all Hub API calls, you'll need an access token that can be generated on your organization's Credentials tab: [https://hub.holaplex.com/credentials](https://hub.holaplex.com/credentials)
This token should be included in the call's header:
```json
{
  "Authorization": "<access-token>"
}
```