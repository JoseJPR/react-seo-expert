# React Seo Expert [![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

React Seo Expert is a plugin for [React.js](https://reactjs.org/) projects with [Next.js](https://nextjs.org/) library.

Text analysis and assessment library in JavaScript based on The Open Graph protocol. 

## Installation
You can install React Seo Expert using npm:

```bash
npm install react-seo-expert
```

## Usage
You can either use React Seo Expert using the web worker API or use the internal components directly.

Because a web worker must be a separate script in the browser you first need to create a script for inside the web worker:

```js
import Head from 'next/head';
import React from 'react';
import Seo from 'react-seo';

class Index extends React.Component {
  render() {
    const SEO = {
      "keywords": "",
      "author": "",
      "description": "",
      "copyright": "",
      "language": "",
      "robots": "",
      "email": "",
      "google_site_verification": "",
      "viewport": "",
      "url": "",
      "title": "",
      "image": "",
      "twitter_username": "",
      "twitter_site": ""
    }
    return (
      <div>
        <Head>
          <Seo config={SEO} />
          <title>{SEO.title}</title>
        </Head>
      </div>
    );
  }
}
export default Index;
```

## Maintainers
[@JoseJPR](https://github.com/JoseJPR)

## License
[MIT](LICENSE.md)

## Happy Code
Created with JavaScript, lot of ❤️ and a few 🍺