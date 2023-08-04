---
sidebar_position: 7
---

# Hosting Locally

# Overview

In this guide, we are going to locally host this repository [](https://github.com/holaplex/eluvio-sxsw)<https://github.com/holaplex/eluvio-sxsw> and in the process, we'll learn how a complete application using Hub can be run locally, so that you can tinker around with the various parts and test how everything works.

This application represents a IRL Scavenger Hunt experience we built for SXSW.

This is an NFT-based application with user authentication through Google, allowing users to mint NFTs of different colored keys. By minting any two keys out of 5, users would be able to unlock access to a video hosted on the Eluvio Content Fabric.

The demo uses Next.js, Postgres, Prisma ORM, next-auth, and the Holaplex Hub SDK.

Before we get started, log into Hub and create a project and a few drops inside that project.

Let's begin.

## Table of Contents

1.  Installation
2.  Usage
3.  Setting Up Google SSO
4.  Setting Up ngrok for Webhooks
5.  Configuration

## Setting Up Google SSO

To set up Single Sign-On (SSO) with Google, follow these steps:

1.  Go to the [Google Developer Console](https://console.developers.google.com/).
2.  Create a new project or select an existing one.
3.  Navigate to the "Credentials" page.
4.  Click on "Create Credentials" and select "OAuth client ID."
5.  Choose "Web application" as the application type.
6.  Set the "Authorized JavaScript origins" field to `http://localhost:3000`.
7.  Set the "Authorized redirect URIs" field to `http://localhost:3000/api/auth/callback/google`.
8.  Click "Create" to generate your `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`.

## Setting Up Ngrok for Webhooks

To test webhooks locally, you can use [ngrok](https://ngrok.com/) to expose your local server to the internet.

1.  [Download](https://ngrok.com/download) and install ngrok.

2.  **Start ngrok** to create a public URL for your localhost. Replace `3000` with your local server's port if it differs.

    ```bash
    ngrok http 3000

    ```

3.  Copy Forwarding URL provided by ngrok (e.g., `https://yoursubdomain.ngrok.io`or `yoursubdomain.ngrok-free.app`)

## Creating Webhooks

1.  Log into Hub and navigate to the Webhooks section
2.  Click on the "Add Webhook" button.
3.  Choose your project name from the drop down. If you haven't created a project & drop yet, this is your cue to do so and come back to this step.
4.  Give your Webhook a name that helps you identify it.
5.  Take the ngrok url above and add `/api/webhooks/holaplex` at the end of the url. Paste this url into the Target URL section.
6.  Choose the Events for the webhook namely, "Customer created", "Customer treasury created", "Customer wallet created", "Drop created" & "Drop minted".
7.  The webhook secret key should be copied and pasted in your `.env` file.

## Configuration

Create a `.env` file at the root of the project and add the following environment variables:

```toml
NEXT_PUBLIC_FQDN=http://localhost:3000

# Set up SSO with Google
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Database
DATABASE_URL=postgres://postgres:holaplex@localhost:5432/hub-starter
POSTGRES_DB=hub-starter
POSTGRES_PASSWORD=holaplex

# Holaplex
HOLAPLEX_API_ENDPOINT=your_holaplex_api_endpoint
HOLAPLEX_AUTH_TOKEN=your_holaplex_auth_token
HOLAPLEX_WEBHOOK_SECRET=your_holaplex_webhook_secret
HOLAPLEX_PROJECT_ID=your_holaplex_project_id
NEXT_PUBLIC_FQDN=http://localhost:3000
```

Replace the placeholder values with your actual credentials and API keys. The `HOLAPLEX_AUTH_TOKEN` can be created in the Hub, in the Organization's "Credentials" section.

Your `HOLAPLEX_PROJECT_ID` refers to the numbers & letters you see in the url bar after /projects/.
In the same way, you can navigate to each of your drops by the copying the part of the url after the /drops/ section & and pasting it after localhost.

Adding the drop id after the [localhost:3000/](http://localhost:3000/) url should bring you to the relevant drops page from where you'll be able to mint your NFT.

## Installation

1.  **Ensure you have Node.js and Docker installed on your workstation.**

2.  **Clone the repository:**

    ```bash
    git clone <https://github.com/holaplex/eluvio-sxsw>
    cd eluvio-sxsw
    ```

3.  **Start PostgreSQL in a Docker container:**

    ```bash
    docker compose up -d
    ```

4.  **Install dependencies:**

    ```bash
    npm install
    ```

5.  **Set up the database:**

    ```bash
    npm run reset
    ```

6.  **Set up Prisma client:**

    ```bash
    npm run generate
    ```

## Usage

After completing the installation steps, you can run the application using the following command:

```bash
npm run dev
```

You can access the application at [](http://localhost:3000/)<http://localhost:3000>.

At any point if things don't work, reset the database, generate the client and try again:

```bash
npm run reset
npm run generate
```
