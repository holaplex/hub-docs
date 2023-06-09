---
sidebar_position: 2
---

# Quickstart

Learn how to create a drop in Hub in **minutes**.

## What is Hub?

Holaplex Hub (”Hub”), a product by Holaplex, provides a collection of loosely coupled microservices which make it easy to launch NFT campaigns, mint digital collectibles, run loyalty programs, and more through whitelabel interfaces and robust developer APIs.

## Create a Hub account
Create an account here: https://hub.holaplex.com/

## Organizations
### Create an Organization
When you first log into Hub, you'll be prompted to create an organization. You'll be awarded 1,000 credits to get your organization started. 

### Invite team members
You can invite team members to your organization on the [Members tab](https://hub.holaplex.com/members). 

We're still configuring Hub's email server. For now, please use the Invite Link (found in the kebab menu) after adding an invitee's email address.

### Join an Organization

If you've received an invite link, click to either create an account or sign in, after which you'll automatically be added to that organization.

## Projects
### Create a Project

Each organization can have one or more projects. We think of projects as a way to organize our campaigns and ideas.

Click on [Projects](https://hub.holaplex.com/projects) on the sidebar, click on [Create project](https://hub.holaplex.com/projects/new), add a relevant name and logo, and click create.

A treasury wallet will be automatically created for each new project. All members of the organization will have access to its projects.

For a more detailed description of creating a project, please check out our step-by-step [guide](hub/Guides/creating-a-project).

## Drops
### Create a Drop

Drops are where the magic happens. Each "drop" is a collection of limited edition NFTs to be minted, numbered from 1 to N, where N is the maximum supply for the drop you've chosen.

To create a drop, first select a project where the drop should live. From the project page, click **Create drop**. Follow the prompts to enter metadata and upload assets for your drop, specify a royalty structure, and specify a start and end time for minting.

As always, if you get stuck, you can check out this detailed [guide](hub/Guides/creating-drops) on creating drops.

## Mint Drops

Once a drop is created, the possibilities for minting are endless. Take a look at our starter repos to spin up a [sample mint page](https://github.com/holaplex/hub-starter-mint) or an [NFT scavenger hunt](https://github.com/holaplex/hub-starter-scavenger).

To incorporate minting into your own application, use the [Hub API](api). For example, a request via this GraphQL mutation will mint an NFT into a specified wallet:

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

Thanks for reading through the Quickstart! If you have questions, please reach out to us at [support@holaplex.com](mailto:support@holaplex.com).