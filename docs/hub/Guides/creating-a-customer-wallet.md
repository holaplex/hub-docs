---
sidebar_position: 4
---
Creating a Customer & Wallet
============================

Creating a wallet
------------------

Creating a wallet on Holaplex Hub involves two main steps: creating a customer and creating a wallet for that customer. The GraphQL mutations required for these steps are shown in the code snippet below →

```
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

Prerequisites
-------------

-   A Holaplex Hub account
-   Access to the Holaplex Hub GraphQL API
-   A GraphQL client, such as [Apollo Client](https://www.apollographql.com/client/) or a tool like [Postman](https://www.postman.com/) or [GraphQL Playground](https://github.com/graphql/graphql-playground)

Step 1: Create a Customer
-------------------------

The first step is creating a customer on the Holaplex Hub platform. To do this, you need to send a `createCustomer` mutation with the required input parameters.

### Mutation

```
mutation CreateCustomer($input: CreateCustomerInput!) {
  createCustomer(input: $input) {
    customer {
      id
    }
  }
}

```

### Input Parameters

-   `$input`: A `CreateCustomerInput` object containing the customer details.

    Example:

    ```
    {
      "customer": "{ID of customer}"
    }

    ```

### Example Request

```
mutation {
  createCustomer(input: { project: "{}" }) {
    customer {
      id
    }
  }
}

```

### Example Response

```
{
  "data": {
    "createCustomer": {
      "customer": {
        "id": "customer-id"
      }
    }
  }
}

```

Step 2: Create a Wallet for the Customer
----------------------------------------

After creating a customer, the next step is to create a wallet for that customer using the `createCustomerWallet` mutation.

### Mutation

```
mutation CreateCustomerWallet($input: CreateCustomerWalletInput!) {
  createCustomerWallet(input: $input) {
    wallet {
      address
    }
  }
}

```

### Input Parameters

-   `$input`: A `CreateCustomerWalletInput` object containing the customer ID.

    Example:

    ```
    {
      "customerId": "customer-id"
    }

    ```

### Example Request

```
mutation {
  createCustomerWallet(input: { customerId: "customer-id", assetId: "SOL | ETH" }) {
    wallet {
      assetId
      address
    }
  }
}

```

### Example Response

```
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

After completing these two steps, you will have successfully created a wallet for the customer on Holaplex Hub. The wallet address can be used for minting NFTs, trading, and other wallet-related operations.