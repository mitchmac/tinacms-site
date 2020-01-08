---
title: Export WordPress Content to Markdown and Gatsby
date: '2019-12-19T00:00:00.000Z'
draft: false
author: Mitch MacKenzie
---
Say hello to the [WordPress to Gatsby Exporter](https://github.com/tinacms/wp-gatsby-markdown-exporter)! It's a WordPress plugin to export posts, pages, and other content from WordPress to Markdown.

It's true that WordPress powers a large portion of sites on the web. But there are many cases where a modern static site generator like [GatsbyJS](https://www.gatsbyjs.org/) can be better suited to build a website. Add TinaCMS into the mix for real-time editing and we get a modern website that developers and content creators will enjoy.

Gatsby provides the intrinsic benefits of traditional static site generators like increased security, improved performance, and lower maintenance overhead. It also tackles modern problems like enhanced offline browsing and progressive image loading.

<figure><img alt="Gatsby vs WordPress comparison table" style="margin: auto; padding: 2rem .5rem; border: none;" src="/img/blog/gatsby-vs-wordpress.png" /><figcaption><a href="https://www.gatsbyjs.org/features/cms/gatsby-vs-wordpress/">GatsbyJS vs WordPress comparison</a></figcaption></figure>

Gatsby can include content from many sources, including from existing WordPress sites. If we want to decommission the WordPress site, exporting the content to Markdown will ensure it's editable in the future. That's where the WordPress to Gatsby Exporter plugin helps us.

## Installing the exporter plugin

Installing the exporter WordPress plugin is like most other plugins.

1. [Download the latest release](https://github.com/tinacms/wp-gatsby-markdown-exporter/releases/latest/download/wp-gatsby-markdown-exporter.zip).
2. Unzip the files into the WordPress plugins directory (usually wp-content/plugins).
3. Activate the plugin from the WordPress admin.

## Using the plugin

Clicking "Export to Gatsby" in the WordPress admin sidebar and that will bring us to a form to download a Zip file of the site's content.

The form has several options that allow us to customize the exported content so that it fits into a Gatsby website. We've tried to create sensible default options so that we can try clicking "Download Zip File" to get started quickly. Exporting content to a new system is usually an iterative process so we may need to tweak the export options and try a few times before getting it right.

The plugin also provides a command to be run on the CLI using [WP-CLI](https://wp-cli.org/). This option works best for WordPress sites with a lot of content and gets around PHP limitations like timeouts. Check out more details about CLI usage in the [plugin's readme file](https://github.com/tinacms/wp-gatsby-markdown-exporter/blob/master/README.md).

## Getting exported content into Gatsby blog starter

[Gatsby's blog starter](https://github.com/gatsbyjs/gatsby-starter-blog) is an easy way to see how Markdown can be used with Gatsby. Checkout the starter's [quick start guide](https://github.com/gatsbyjs/gatsby-starter-blog#-quick-start) to get it up and running.

To get our exported WordPress content in place:

1. Unzip the exported Markdown files into the "content/blog" directory of the starter.
2. Place the "uploads" directory from the WordPress export in the "content" directory of the starter.
3. Add the following under the plugins section of gatsby-config.js so that any images and uploads exported from WordPress can be found by Gatsby:
```
{
  resolve: `gatsby-source-filesystem`,
  options: {
    path: `${__dirname}/content/uploads`,
    name: `uploads`,
  },
},

```

## Getting exported content into Tina Grande

[Tina Grande](https://github.com/tinacms/tina-starter-grande) is a beautiful Gatsby starter that includes TinaCMS for real-time content editing.

With a few easy export customizations we can get our WordPress content into Tina Grande and fully editable.

Tina Grande uses an "authors" frontmatter field that expects a list of authors, so we'll need to tell the exporter plugin to restructure our WordPress content to accommodate that. Tina Grande also uses the "path" field so we'll switch the label of the field that's exported from WordPress.

On the exporter form's "Change field name" we'll add:
```
author,authors
permalink,path
```

and on the form's "Convert fields to array" we'll add (the original name of the authors remapped field):
```
author
```
