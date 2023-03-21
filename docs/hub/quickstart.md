---
sidebar_position: 1
slug: /
---

# Quickstart

In this quickstart guide, we'll quickly go through **Hub in less than 5 minutes**.

## What is Hub?

Hub allows you to create and manage your **NFT Experiences**. Put simply, you can use Hub's APIs and intuitive interface to build great products. You can also  leverage Hub's powerful solutions and add exciting Web3 features to your existing product. 

The possibilities are endless. Click [here](hub/Introduction/what-is-hub) to learn more about Hub. Click [here](hub/Introduction/why-use-hub) to learn more about why you should use Hub. 

## Creating a Project

Think of Projects as a way to organize your campaigns and ideas. 

Click on Projects on the sidebar, click on Create a Project, add a relevant name and logo, and click create! It's that simple! 

If you get stuck here, check out this detailed [guide](hub/Guides/creating-a-project) that walks you step by step. 


## Creating Drops

Drops are where the magic happens. Each "drop" is a collection of limited edition NFTs numbered from 1 to N, where N is the maximum supply for the drop you've chosen.

To create a drop, click on a project from the project's screen, enter the relevant information on the screens that follow, pick a suitable time to schedule the minting, and you're done! 

As always, if you get stuck, you can check out this detailed [guide](hub/Guides/creating-drops) on creating drops. 


## Minting Drops

To mint a drop, simply use this GraphQL mutation -

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
Here's a detailed [guide](hub/Guides/minting-drops) on minting drops. 

## Creating a Customer & Wallet

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

Here's a detailed [guide](hub/Guides/creating-a-customer-wallet) on creating a customer and wallet. 

Hopefully, you now have enough to play around with & create your own experience. There's a lot more stuff in our API reference, so be sure to check that out!