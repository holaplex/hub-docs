---
sidebar_position: 3
---

# Creating a Customer & Wallet

In this guide, we'll walk you through the process of creating a customer and a wallet on Holaplex Hub. This wallet can then be used to mint tokens into.

## Prerequisites

- A project created within [Holaplex Hub](https://hub.holaplex.com/)
- Access to the Holaplex Hub GraphQL API (an access token can be generated on Hub's "Credentials" page)
- Hub API Playground: [https://api.holaplex.com](https://api.holaplex.com/). You could also use a GraphQL client such as [Apollo Client](https://www.apollographql.com/client/) or a tool like [GraphQL Playground](https://github.com/graphql/graphql-playground)

For all API requests to Hub, you'll need to include an authentication header of the form
```
  {
    "Authorization": "<access-token>"
  }
```

## Step 1: Create a Customer

The first step is creating a customer associated to a project in Hub. To do this, you need to send a `createCustomer` mutation with the required input parameters.

#### Mutation
```graphql
mutation CreateCustomer($input: CreateCustomerInput!) {
  createCustomer(input: $input) {
    customer {
      id
    }
  }
}
```

#### Variables
```json
{
  "input": {
    "project": "<project-id>"
  }
}
```

The `project-id` can be found in Hub, by clicking the menu button next to the project name.

#### Example Curl Request
```
curl 'https://api.holaplex.com/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: file://' -H 'Authorization: ACCESS-TOKEN' --data-binary '{"query":"mutation CreateCustomer($input: CreateCustomerInput!) {\n  createCustomer(input: $input) {\n    customer {\n      id\n    }\n  }\n}\n","variables":{"input":{"project":"PROJECT-ID"}}}' --compressed
```
Replace `ACCESS-TOKEN` and `PROJECT-ID`

### Response

```json
{
  "data": {
    "createCustomer": {
      "customer": {
        "id": "<customer-id>"
      }
    }
  }
}
```

## Step 2: Create a Customer's Wallet

After creating a customer, the next step is to create a wallet for that customer using the `createCustomerWallet` mutation. Note that creating a wallet will use credits.

#### Mutation
```graphql
mutation CreateCustomerWallet($input: CreateCustomerWalletInput!) {
  createCustomerWallet(input: $input) {
    wallet {
      address
    }
  }
}
```

#### Variables
```json
{
  "input": {
    "customer": "<customer-id>",
    "assetType": "SOL"
  }
}
```
Check out the list of supported asset types on the [enums documentation](../../api/enums/asset-type.mdx). We currently support `"assetType": "SOL"`.

#### Example Curl Request
```
curl 'https://api.holaplex.com/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: file://' -H 'Authorization: ACCESS-TOKEN' --data-binary '{"query":"mutation CreateCustomerWallet($input: CreateCustomerWalletInput!) {\n  createCustomerWallet(input: $input) {\n    wallet {\n      address\n    }\n  }\n}","variables":{"input":{"customer":"CUSTOMER-ID","assetType":"SOL"}}}' --compressed
```
Replace `ACCESS-TOKEN` and `CUSTOMER-ID`

### Response

```json
{
  "data": {
    "createCustomerWallet": {
      "wallet": {
        "address": "<wallet-address>"
      }
    }
  }
}
```

After completing these two steps, you will have successfully created a wallet for the customer in Holaplex Hub.
The wallet address can be used for minting NFTs, trading, and other wallet-related operations. 
Customers and wallets can be viewed on the project page in Hub.

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