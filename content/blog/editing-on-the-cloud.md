---
title: How can my editors edit a TinaCMS site?
date: '2019-12-17T20:09:31.626Z'
draft: false
author: James O'Halloran
---

One of the main draws of Tina is that it can give your editors an incredible user experience tailored to their use-case. That being said, it wouldn't be an ideal solution if each editor needed to run their own local development server.

We've been teasing [Tina Teams](/teams 'Tina Teams') as the solution for this. While `Tina Teams` isn't quite ready yet, we'd like to shed some light on how editors can edit on the cloud and where `Tina Teams` fits in.

### Overview

Typically, Tina will be hidden on your live site, and will only be accessible locally, or on your **cloud development environment**.
If you're using git as your backend, you could either host your master branch on the cloud development server (and have all commits deployed to your live site), or you could host another staging branch.

### Hosting ☁️

Part of what makes Tina great is that it gives the developer control. It's important for us to extend this control into the Cloud editing experience. For this reason, we've designed it so that you can **host your development environment wherever you like.**

Already have a Gatsby Cloud plan?
Want to host a small site under Heroku's free tier?

The choice is up to you, depending on your needs!

You can fire up a development environment using one of these services and have users start making commits from the cloud.

If this isn't something in which you'd like to manage, you'll eventually be able to host your staging environment through us on `Tina Teams`.

<tip>Depending on your use-case, hosting might be all that you'll need to have your editors editing on the cloud. Otherwise, you might consider using `Tina Teams` for some additional functionality detailed below.</tip>

### Authorization 👤

Some services (like Gatsby Previews) will allow you to password protect your environment. If you're hosting somewhere else, you likely don't want strangers accessing your site and making commits. One of the features that `Tina Teams` provides is an **authentication layer over your cloud development environment**. Users will first need to log in before accessing your cloud environment.

### User Management 👨 👩

With Tina Teams, users can have **custom roles assigned to each user**, which can be referenced within your site.
Maybe you have an external contributor who can only access a specific blog post? An editor who can create, but not delete pages? The implementation is up to you and your site's needs.

### Commit Authoring 🗣️

Since users will need to authenticate with Tina Teams, we can **tie commits back to the logged-in user**, so you can always find out who put that llama image in your blog post (so you can thank them, of course).
![tinacms-add-new-file-gif](/img/rico-replacement.jpg)

### In Summary

Not all sites fit into the same box, so we're giving the flexibility to manage your cloud development environment however makes sense for you. Running a development environment on `Gatsby Previews` without `Tina Teams` will work for some, and certain users may require deeper user management with `Tina Teams`.

<br />

We've also got some other "down the road "features planned which will make it much easier to work alongside other team members on your cloud environment: e.g Locking files when being edited by another user. Stay tuned!

<br />

# ✨

<br />

Thanks for reading! We're going to have some examples soon detailing how to host your cloud development environment on a few different services. You can also sign up for our [Tina Teams Beta](http://tinacms.org/teams) to try it out early!