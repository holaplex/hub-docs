---
sidebar_position: 4
---

# Creating a Customer & Wallet

## Creating a wallet

Creating a wallet on Holaplex Hub involves two main steps: creating a customer and creating a wallet for that customer. The GraphQL mutations required for these steps are shown in the code snippet below →

```graphql
mutation CreateCustomer($input: CreateCustomerInput!) {
  createCustomer(input: $input) {
    customer {
      id
    }
  }
}

mutation CreateCustomerWallet($input: CreateCustomerWalletInput!) {
  createCustomerWallet(input: $input) {
    wallet {
      address
    }
  }
}
```

In this guide, we'll walk you through the process of creating a wallet on Holaplex Hub.

## Prerequisites

- A Holaplex Hub account
- Access to the Holaplex Hub GraphQL API
- A GraphQL client, such as [Apollo Client](https://www.apollographql.com/client/) or a tool like [GraphQL Playground](https://github.com/graphql/graphql-playground)

## Step 1: Create a Customer

The first step is creating a customer on the Holaplex Hub platform. To do this, you need to send a `createCustomer` mutation with the required input parameters.

### Mutation

```graphql
mutation CreateCustomer($input: CreateCustomerInput!) {
  createCustomer(input: $input) {
    customer {
      id
    }
  }
}
```

### Input Parameters

- `$input`: A `CreateCustomerInput` object containing the project `UUID` where you want the customer to be assigned to.

Example:

```json
{
  "input": {
    "project": "<project-id>"
  }
}
```

### Example Request

```graphql
mutation {
  createCustomer(input: { project: "<project-id>" }) {
    customer {
      id
    }
  }
}
```

### Example Response

```json
{
  "data": {
    "createCustomer": {
      "customer": {
        "id": "15433469-a6e2-431b-9eee-be40056e2e0b"
      }
    }
  }
}
```

## Step 2: Create a Wallet for the Customer

After creating a customer, the next step is to create a wallet for that customer using the `createCustomerWallet` mutation.

### Mutation

```graphql
mutation CreateCustomerWallet($input: CreateCustomerWalletInput!) {
  createCustomerWallet(input: $input) {
    wallet {
      address
    }
  }
}
```

### Input Parameters

- `$input`: A `CreateCustomerWalletInput` object containing the customer ID from previous step response, and the desired `assetType` for the wallet.

> Check out the list of supported asset types on the [enums documentation](../../api/enums/asset-type.mdx)

Example:

```json
{
  "input": {
    "customer": "<customer-id>",
    "assetType": "SOL_TEST"
  }
}
```

### Example Request

```graphql
mutation {
  createCustomerWallet(
    input: { customer: "customer-id", assetType: SOL_TEST }
  ) {
    wallet {
      assetId
      address
    }
  }
}
```

### Example Response

```json
{
  "data": {
    "createCustomerWallet": {
      "wallet": {
        "assetId": "SOL",
        "address": "wallet-address"
      }
    }
  }
}
```

After completing these two steps, you will have successfully created a wallet for the customer on Holaplex Hub.
The wallet address can be used for minting NFTs, trading, and other wallet-related operations.
