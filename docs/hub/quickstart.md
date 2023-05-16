---
sidebar_position: 1
slug: /
---

# Quickstart

Learn how to create a drop in Hub in **minutes**.

## What is Hub?

Hub allows you to create and manage your **NFT Experiences**. Put simply, you can use Hub's APIs and intuitive interface to build great products. You can also leverage Hub's powerful solutions and add exciting Web3 features to your existing product.

The possibilities are endless. Click [here](hub/Introduction/what-is-hub) to learn more about Hub. Click [here](hub/Introduction/why-use-hub) to learn more about why you should use Hub.

## Creating a Hub account
Create an account here: https://hub.holaplex.com/

## Organizations
### Creating an Organization
When you first log into Hub, you'll be prompted to create an organization. You'll be awarded 1,000 credits to get your organization started. 

### Inviting team members
You can invite team members to your organization on the [Members tab](https://hub.holaplex.com/members). 

We're still configuring Hub's email server. For now, please use the Invite Link (found in the kebab menu) after adding an invitee's email address.

### Joining an Organization

If you've received an invite link, click to either create an account or sign in, after which you'll automatically be added to that organization.

## Projects
### Creating a Project

Each organization can have one or more projects. We think of projects as a way to organize our campaigns and ideas.

Click on [Projects](https://hub.holaplex.com/projects) on the sidebar, click on [Create project](https://hub.holaplex.com/projects/new), add a relevant name and logo, and click create.

A treasury wallet will be automatically created for each new project. All members of the organization will have access to its projects.

For a more detailed description of creating a project, please check out our step-by-step [guide](hub/Guides/creating-a-project).

## Drops
### Creating a Drop

Drops are where the magic happens. Each "drop" is a collection of limited edition NFTs to be minted, numbered from 1 to N, where N is the maximum supply for the drop you've chosen.

To create a drop, first select a project where the drop should live. Then click **Create drop**. Follow the prompts to enter assets and metadata for your drop, royalty specifications, and a start/end time for minting.

As always, if you get stuck, you can check out this detailed [guide](hub/Guides/creating-drops) on creating drops.

## Minting Drops

To mint a drop, simply use this GraphQL mutation -

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

Here's a detailed [guide](hub/Guides/minting-drops) on minting drops.

## Creating a Customer & Wallet

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

Here's a detailed [guide](hub/Guides/creating-a-customer-wallet) on creating a customer and wallet.

Hopefully, you now have enough to play around with & create your own experience. There's a lot more stuff in our API reference, so be sure to check that out!
