---
title: Getting Started with vuepress
description: Basic intro to vuepress
author: Manan Chawla
type: article
image: /images/Intro_to_Vuepress/logo.png
sidebarDepth: 2
tags: vuepress vue blog
---
![img](/images/Intro_to_Vuepress/logo.webp)
# Into to Vuepress

VuePress is an amazing and very powerful static site generator. The blog you are seeing is made by vuepres itself.
Main idea to make vuepress was for ease in maintaining documentation but it can also be used to make awesome personal
blogs and can easily be deployed on many static site hosting like vercel netlify and github pages.

## How does it work?

Vuepress works by converting the markdown text into html. The plus point is that its rendered statically. Thats why it loads very quickly. All of the functionalities of vue router is native to vuepress.

Second advantage of vuepress is that you can declare global components like in vue and then use it in your markdown files which gives awesome flexibility to create and customise your blog pages. 

## Installation

The recommended way to install vuepress is to use [create vuepress-site generator](https://github.com/vuepressjs/create-vuepress-site/). Its a nice and easy tool to create and use nice and simple boilerplate vuepress app.


<code-group style="margin-top:10px;">
<code-block title="YARN">
```bash
yarn create vuepress-site [optionalDirectoryName]
```
</code-block>

<code-block title="NPM">
```bash
npx create-vuepress-site [optionalDirectoryName]
```
</code-block>
</code-group>


After installation, Change the directory to docs and install the dependencies.

```bash
cd docs
```
<code-group style="margin-top:10px;">
<code-block title="YARN">
```bash
yarn
```
</code-block>

<code-block title="NPM">
```bash
npm install
```
</code-block>
</code-group>


After installing the required dependencies, run the dev script to start the server at [http://localhost:8080](http://localhost:8080)

<code-group style="margin-top:10px;">
<code-block title="YARN">
```bash
yarn dev
```
</code-block>

<code-block title="NPM">
```bash
npm run dev
```
</code-block>
</code-group>

#### Directory Structres

You will see a index.md file in the docs folder. This is your main file displayed on your main page. It is displayed on your front page. It takes the information from the frontmatter inside it. A sample index file is given below.

![img](/images/Intro_to_Vuepress/sample_index.webp)

## Plugins and Themes

Vuepress has an awesome support of official and community plugins as well as themes. It really helps improving user experience and seo. In the source folder, there is a file called `config.js` which holds all the configuration of our vuepress project including meta tags, github repository, title, plugins and much more. For example to install the vuepress social plugin we can just write

```bash
npm install vuepress-plugin-social-share -D
```
and then include it in the config.js.
```js
plugins: [
    'social-share',
        {
            networks: ['twitter', 'facebook']
        },
]
```

To use it in our markdown file, we can include it just like any other vue component.
```md
<social-share :networks="['facebook', 'twitter']"/>
```

Themes can also be used in the same way.

## Deployment

It is very easy to deploy existing vuepress project. Just run 
```js 
npm run build 
``` 
and deploy it on any static website hosting paas like github pages netlify vercel gitlab etc. Thankyou.

<social-share :networks="['facebook', 'twitter']"/>