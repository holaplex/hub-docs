---
sidebar_position: 2
---

Webhooks Overview
=================

This document describes the webhook implementation for Hub. Webhooks enable real-time notifications of events occurring in the Holaplex system, allowing for seamless integration with other services and applications. Create a webhook, similar to how to you created your API keys, and follow along! 

Table of Contents
-----------------

1.  Overview
2.  Events
3.  Payloads
4.  Handling Webhooks
5.  Verification

Overview
--------

The Holaplex Hub provides webhook notifications for specific events. When such an event occurs, the system sends an HTTP POST request to your specified webhook URL, containing a JSON payload with details about the event.

Events
------

As an example, this guide will focus on the following webhook event:

-   `customer_treasury.created`: This event is triggered when a customer's treasury is created.

Payloads
--------

Webhook payloads contain the following fields:

-   `event_type`: A string representing the type of event that occurred (e.g., `customer_treasury.created`).
-   `payload`: An object containing details about the event.

For the `customer_treasury.created` event, the payload contains these fields:

-   `customer_id`: The ID of the customer.
-   `treasury_id`: The ID of the created treasury.
-   `project_id`: The ID of the project associated with the customer.

Handling Webhooks
-----------------

To handle webhook events, you need to create an API route that listens for incoming HTTP POST requests. In this example, the route is implemented using Next.js API routes:

```
import type { NextApiRequest, NextApiResponse } from "next";
import holaplex from "@/modules/holaplex";
import { Webhook, WebhookRequiredHeaders } from "svix";
import { buffer } from "micro";
// ... other imports ...

// ... export config ...

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // ... implementation ...
}

```

In the `handler` function, you should:

1.  Read the payload and headers from the incoming request.
2.  Verify the authenticity of the request using the webhook secret.
3.  Process the event based on its `event_type`.
4.  Respond with an appropriate HTTP status code.

Verification
------------

To ensure the authenticity of webhook requests, you should verify the signature included in the HTTP headers. In this example, the `svix` library is used to perform the verification:

```
const secret = process.env.HOLAPLEX_WEBHOOK_SECRET as string;

// ...

const payload = (await buffer(req)).toString();
const headers = req.headers as unknown as WebhookRequiredHeaders;

const wh = new Webhook(secret);
let msg;

try {
  msg = wh.verify(payload, headers) as HolaplexWebhookEventResponse;
} catch (err) {
  res.status(400).json({});
}

```

Make sure to use the webhook secret provided by Holaplex when setting up the webhook.

* * * * *

This documentation should give you a basic understanding of how to implement and handle webhooks for the Holaplex Hub. Remember to adjust the details and explanations to better fit your specific use case or project.