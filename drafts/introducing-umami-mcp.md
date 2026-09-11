---
title: "Introducing Umami MCP: Ask Your Analytics"
description: Connect your AI assistant to Umami to explore traffic, events, and conversions through conversation. Available now on Umami Cloud, with self-hosted support committed.
author: Mike Cao
date: 2026-09-10T00:00:00-07:00
category: product-updates
---

# Introducing Umami MCP: Ask Your Analytics

Some analytics questions lead to more questions. Traffic is up this week, but where is it coming from? Which pages are getting the extra attention? Are those visitors signing up?

We're introducing Umami MCP, a new way to explore your analytics through conversation with an AI assistant. MCP is available now on Umami Cloud, and we've committed support for self-hosted installations to the Umami repository.

## Your analytics, in the conversation

The Model Context Protocol (MCP) gives AI applications a standard way to connect to external tools and data. Umami's MCP server lets a compatible assistant query your analytics as you ask questions.

You can start with something simple:

> How many visitors did my website get last week compared with the week before?

Then follow up:

> Break that down by traffic source. Which sources grew the most?

The assistant can retrieve the relevant data from Umami and use the results to answer. You don't need to export a spreadsheet, copy numbers into a chat, or write an API request for each question.

## Go beyond traffic totals

The integration covers traffic summaries, trends, top pages, referrers, campaigns, and realtime visitors. It also provides tools for exploring events and sessions, conversion funnels, visitor journeys, retention, attribution, and revenue.

That opens up questions like:

- **Campaigns:** Which UTM campaigns brought the most visitors last month?
- **Conversions:** Where did visitors drop off between the pricing page and signup?
- **Visitor behavior:** What paths did people take through the site?
- **Revenue:** How did tracked revenue change compared with the previous period?

The latest MCP tools add event totals and trends, custom event properties, saved funnels and goals, segments, timeline annotations, and Core Web Vitals. These let an assistant work with more of the context you've already built in Umami: checking a saved checkout funnel, looking up a launch annotation alongside a traffic spike, or finding pages with slow loading performance.

Answers use the data you've recorded in Umami. If you're already tracking custom events or revenue, those become part of what you can explore.

## Read-only, with your existing permissions

All Umami MCP tools are read-only. An assistant can retrieve analytics and run analyses, but the MCP tools cannot change your settings, create websites, or delete data.

Requests go through the Umami API and its existing authorization checks. The connection respects your website and team permissions, and Cloud access follows the same subscription requirements as the Cloud API. You can revoke the API key to disconnect access.

When you connect an assistant, the analytics returned by the tools are shared with that application to answer your questions.

## Connect to Umami Cloud

Create an API key under **Settings → API keys** in [Umami Cloud](https://cloud.umami.is). Copy it when it's created; the full key is only shown once. You can also use an existing Cloud API key.

In an MCP client that supports **Streamable HTTP** and bearer-token authentication, add this server URL:

```text
https://cloud.umami.is/mcp
```

Configure the authorization header with your full Cloud API key:

```text
Authorization: Bearer api_<your-cloud-api-key>
```

Clients that support custom headers can also use `x-umami-api-key`. The exact setup screen depends on your client.

Once connected, try: **“Show my websites, then summarize traffic for the last seven days.”**

## Self-hosted support

We've also committed MCP support for self-hosted Umami. To use it, your installation needs a build that includes these changes.

MCP is disabled by default. Enable it in your deployment configuration and restart Umami:

```env
MCP_ENABLED=1
```

Create an API key under **Settings → API keys**, then connect your MCP client to `/mcp` on your instance:

```text
https://analytics.example.com/mcp
```

Use your self-hosted API key for authentication:

```text
Authorization: Bearer umami_<your-api-key>
```

The self-hosted endpoint uses the same read-only tools and respects the key owner's existing permissions.

## Try it out

Connect your assistant to [Umami Cloud](https://cloud.umami.is) and start with a question you normally open the dashboard to answer. Then ask the follow-up.

We'd love to hear what you discover and which questions you'd like Umami to help answer next. Share your feedback on [GitHub](https://github.com/umami-software/umami) or [Discord](https://discord.gg/4dz4zcXYrQ).
