---
sidebar_position: 4
---

# Minting a Drop via API

This guide will walk you through minting a drop using Holaplex Hub.

You can try it out using our GraphiQL explorer: [https://api.holaplex.com/](https://api.holaplex.com/).

We'll assume you've already created an account in Hub and set up an organization, project, and drop. If you haven't, please take a look at our [Drops](../overview/drops) page.

## Step 1: Authenticate

All API calls need a header of the form
```json
  { "Authorization": "Your_API_Token" }
```

To get an API token:
    
  &nbsp; a. Log into [Hub](https://hub.holaplex.com/)

  &nbsp; b. On your organization's page, open the "Credentials" tab

  &nbsp; c. Click "Generate token"

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
```json
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

## Follow along

<iframe width="640" height="400" src="https://www.loom.com/embed/733f29d4ffd0402b853f74604034d9cf?sid=5bea2de1-fd7c-40e5-af01-f011fa1b58a9" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Next Steps

After minting a drop, you can perform additional actions, such as querying the drop, etc. Check out the API docs to figure out what is possible!

