---
sidebar_position: 3
---
Minting Drops
==============



This guide will walk you through the process of minting a drop on the Holaplex Hub platform using the provided GraphQL mutation -

```
mutation MintNft($input: MintDropInput!) {
mintEdition(input: $input) {
collectionMint {
address
owner
}
}
}

```

Prerequisites
-------------

-   A Holaplex Hub account
-   An existing wallet created on the Holaplex Hub (see the previous guide on creating a wallet)
-   Access to the Holaplex Hub GraphQL API
-   A GraphQL client, such as [Apollo Client](https://www.apollographql.com/client/) or a tool like [Postman](https://www.postman.com/) or [GraphQL Playground](https://github.com/graphql/graphql-playground)

Minting a Drop
--------------

To mint a drop, you need to send the `mintEdition` mutation with the required input parameters.

### Mutation

```
mutation MintNft($input: MintDropInput!) {
  mintEdition(input: $input) {
    collectionMint {
      address
      owner
    }
  }
}

```

### Input Parameters

-   `$input`: A `MintDropInput` object containing the details of the drop.

    Example:

    ```
    {
      "recipient": "wallet-address",
      "metadataURI": "<https://example.com/metadata.json>",
      "maxSupply": 100
    }

    ```

### Example Request

```
mutation {
  mintEdition(input: { recipient: "wallet-address", metadataURI: "<https://example.com/metadata.json>", maxSupply: 100 }) {
    collectionMint {
      address
      owner
    }
  }
}

```

### Example Response

```
{
  "data": {
    "mintEdition": {
      "collectionMint": {
        "address": "collection-address",
        "owner": "wallet-address"
      }
    }
  }
}

```

Input Parameters Explained
--------------------------

-   `recipient`: The wallet address where the minted drop should be sent. This should be the address of the wallet created on the Holaplex Hub.
-   `metadataURI`: A publicly accessible URL pointing to a JSON file containing the metadata for the drop. This metadata should be compliant with the [NFT Metadata Standard](https://docs.metaplex.com/programs/token-metadata/overview).
-   `maxSupply`: The maximum number of NFTs that can be minted in this drop. This is an optional field; if not provided, the default value will be used.

After successfully minting the drop, you will receive a response containing the collection address and the owner wallet address. The collection address can be used to manage and query the drop on the Holaplex Hub platform.

Next Steps
----------

After minting a drop, you can perform additional actions, such as querying the drop, etc. Check out the API docs to figure out what is possible!