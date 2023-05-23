---
sidebar_position: 6
---

Deploying a Mint Page
===============

Overview
========

In this guide, we'll fork the mint page starter app and deploy it using Render.

Prerequisites:
1. [Render account](https://render.com/)
2. Drop configured in [Hub](https://hub.holaplex.com/)

Follow along as Mackenzie deploys a mint page here:

<iframe src="https://www.loom.com/embed/7c637cf4aafa4d6e8081c5bf16026e00" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>


Details
========

### Fork the starter app repository

Fork the repository https://github.com/holaplex/hub-starter-mint and give it a unique name

### Customize the mint page

1. In the file `tailwind.config.js`, configure the following color options:
    - `cta` (call to action) - primary color for buttons
    - `backdrop` - background color
    - `contrast` - background color of sale boxes

2. Replace the image file: `public/img/logo.png`. The logo has a fixed size - this can be adjusted at `src/app/Home.tsx`.

3. Commit changes and push to the fork.

### Create Render Blueprint Instance

1. Log in to [dashboard.render.com](dashboard.render.com)

2. Create a new Blueprint Instance

    a. Connect the newly forked repository to Render (GitHub -> Configure account, grant Render access to the repository)

    b. Enter Blueprint Name and select the repository branch to deploy

### Set configuration variables

1. `GOOGLE_CLIENT_ID` & `GOOGLE_CLIENT_SECRET`

    a.  Go to the [Google Developer Console](https://console.developers.google.com/).

    b. Create a new project or select an existing one.

    c. Navigate to the "Credentials" page.

    d. Click on "Create Credentials" and select "OAuth client ID."

    e. Choose "Web application" as the application type.

    f. We will return to enter the  "Authorized JavaScript origins" and the "Authorized redirect URIs" shortly below.

    g. Click "Create" to generate your `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`.

2. `HOLAPLEX_AUTH_TOKEN`

    a. Log into the [Hub](https://hub.holaplex.com/)

    b. Create a new Organization or select an existing one.

    c. On the "Credentials" tab, click "Generate token"

3. `HOLAPLEX_PROJECT_ID` 

    a. On the [Hub](https://hub.holaplex.com/), create a new Project or select an existing one.

    b. The UUID in the URL is the Project ID, e.g. the Project ID corresponding to the Hub URL `https://hub.holaplex.com/projects/dc2471ec-6b34-4ca0-8c78-9906a59316fc/drops` is `dc2471ec-6b34-4ca0-8c78-9906a59316fc`

4. `HOLAPLEX_DROP_ID`

    a. On the [Hub](https://hub.holaplex.com/), create a new Drop or select an existing one.

    b. The UUID in the URL is the Drop ID, e.g. the Drop ID corresponding to the Hub URL `https://hub.holaplex.com/projects/dc2471ec-6b34-4ca0-8c78-9906a59316fc/drops/394ed9dd-b764-4e0f-a9b1-bb362fd56fb9/holders` is `394ed9dd-b764-4e0f-a9b1-bb362fd56fb9`
    
5. `NEXTAUTH_URL` - Render will produce this URL, leave it blank for now.

6. Click *Apply* to create the database and web service

### Finish configuration

1. On the web service page, copy the deploy URL (e.g. https://mint-page.onrender.com)

2. Set `NEXTAUTH_URL` - on the "Environment" tab, add an environment variable named `NEXTAUTH_URL` and paste the deploy URL as value. Save Changes.

3. On the [Google Developer Console](https://console.developers.google.com/), navigate to Credentials -> Client ID for Web application. Add a URI to "Authorized JavaScript origins" and paste the same link.

4. Also add a URI to "Authorized redirect URIs", paste the same link and append `/api/auth/callback/google`, e.g. `https://mint-page.onrender.com/api/auth/callback/google`



### Set up the database

1. In Render, navigate to web app's "Shell" tab.

2. Run `npm run db`

### View your mint page

Your mint page is now deployed and ready to use! The URL is available in Render, e.g. https://mint-page.onrender.com