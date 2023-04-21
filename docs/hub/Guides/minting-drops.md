---
sidebar_position: 4
---

# Minting Drops

This guide will walk you through the process of minting a drop on the Holaplex Hub platform using the provided GraphQL mutation -

```graphql
mutation MintNft($input: MintDropInput!) {
  mintEdition(input: $input) {
    collectionMint {
      address
      owner
    }
  }
}
```

## Prerequisites

- A Holaplex Hub account
- An existing wallet created on the Holaplex Hub (see the previous guide on creating a wallet)
- Access to the Holaplex Hub GraphQL API
- A GraphQL client, such as [Apollo Client](https://www.apollographql.com/client/) or a tool like [GraphQL Playground](https://github.com/graphql/graphql-playground)

## Minting a Drop

To mint a drop, you need to send the `mintEdition` mutation with the required input parameters.

### Mutation

```graphql
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

- `$input`: A `MintDropInput` object containing the details of the drop.

Example:

```json
{
  "drop": "drop-id",
  "recipient": "wallet-address"
}
```

### Example Request

```graphql
mutation {
  mintEdition(
    input: {
        {   
            drop: "drop-id", 
            recipient: "wallet-address" 
        }
    }
  ) {
    collectionMint {
      address
      owner
    }
  }
}
```
CURL:
```
curl 'https://api.holaplex.com/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: file://' -H 'Authorization: ACCESS-TOKEN' --data-binary '{"query":"mutation MintNft($input: MintDropInput!) {\n  mintEdition(input: $input) {\n    collectionMint {\n      address\n      owner\n    }\n  }\n}\n","variables":{"input":{"drop":"DROP-ID","recipient":"RECIPIENT-WALLET-ADDRESS"}}}' --compressed
```
Replace `ACCESS-TOKEN`, `DROP-ID`, and `RECIPIENT-WALLET-ADDRESS`

### Example Response

```json
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

## Input Parameters Explained

- `drop`: The UUID of the drop that you want to mint. It can be found in the URL of the Hub's drops page
- `recipient`: The wallet address where the minted drop should be sent. This should be the address of the wallet created on the Holaplex Hub.

Note to find a customer's wallet address, perform the following query, e.g.:
```
{
  project(id:"a56e7745-37a2-40b7-9d25-d5c20b6fc137") {
		name
    customer(id:"33dedde4-543d-4653-bc10-db0a38e719cc") {
      wallet {
        address
      }
    }
  }
}
```
CURL:
```
curl 'https://api.holaplex.com/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: file://' -H 'Authorization: ACCESS-TOKEN' --data-binary '{"query":"{\n  project(id:\"PROJECT-ID\") {\n\t\tname\n    customer(id:\"CUSTOMER-ID\") {\n      wallet {\n        address\n      }\n    }\n  }\n}"}' --compressed
```
Replace `ACCESS-TOKEN`, `PROJECT-ID`, and `CUSTOMER-ID`

After successfully minting the drop, you will receive a response containing the collection address and the owner wallet address. The collection address can be used to manage and query the drop on the Holaplex Hub platform.

## Next Steps

After minting a drop, you can perform additional actions, such as querying the drop, etc. Check out the API docs to figure out what is possible!

