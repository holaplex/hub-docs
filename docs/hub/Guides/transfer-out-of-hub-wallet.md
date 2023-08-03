---
sidebar_position: 7
---

# Transferring a token out of a Hub wallet

In this guide, we'll use Hub API to transfer a Hub-minted token out of a Hub wallet. We'll add corresponding UI to our starter mint repos. The feature is available now via Hub API.

## Prerequisites

- A token minted out of a drop within [Holaplex Hub](https://hub.holaplex.com/) or via Hub API
- Access to the Holaplex Hub GraphQL API (an access token can be generated on Hub's "Credentials" page)
- Hub API Playground: [https://api.holaplex.com](https://api.holaplex.com/). You could also use a GraphQL client such as [Apollo Client](https://www.apollographql.com/client/) or a tool like [GraphQL Playground](https://github.com/graphql/graphql-playground)
- 

For all API requests to Hub, you'll need to include an authentication header of the form
```
  {
    "Authorization": "<access-token>"
  }
```

The first step is creating a customer associated to a project in Hub. To do this, you need to send a `createCustomer` mutation with the required input parameters.

## Mutation
```graphql
mutation TransferAsset($input:TransferAssetInput!) {
  transferAsset(input:$input) {
    mint {
      id
      address
    }
  }
}
```

### Variables
```json
{
  "input": {
    "id": "<mint-id>",
    "recipient":"<destination-wallet-address>"
  }
}
```

### Response

```json
{
  "data": {
    "transferAsset": {
      "mint": {
        "id": "<mint-id>",
        "address": "<token-address>",
      }
    }
  }
}
```

Note that the API only supports transfering an NFT out of a Hub wallet. If a transfer is requested from an external wallet (even if the token was minted by Hub), Hub will return an error.

## Follow along

<iframe width="640" height="400" src="https://www.loom.com/embed/981c9e56f9074b5ca1e4234012383c4e?sid=e776e345-47fd-4bbb-8df3-070729a18502" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>