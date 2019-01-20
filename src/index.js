import React from 'react';

const Seo = props => {
  const seo = {
    keywords: props.config.keywords || null,
    author: props.config.author || null,
    copyright: props.config.copyright || null,
    language: props.config.language || null,
    robots: props.config.robots || null,
    email: props.config.email || null,
    google_site_verification: props.config.google_site_verification || null,
    viewport: props.config.viewport || null,
    title: props.config.title || null,
    description: props.config.description || null,
    image: props.config.image || null,
    twitter_username: props.config.twitter_username || null,
    twitter_site: props.config.twitter_site || null,
    url_page: props.config.url_page || null
  }
  return(
    <head>
      {seo.keywords && <meta name="keywords" content={seo.keywords} />}
      {seo.author && <meta name="author" content={seo.author} />}
      {seo.description && <meta name="description" content={seo.description} />}
      {seo.copyright && <meta name="copyright" content={seo.copyright} />}
      {seo.language && <meta name="language" content={seo.language} />}
      {seo.robots && <meta name="robots" content={seo.robots} />}
      {seo.email && <meta name="reply-to" content={seo.email} />}        
      {seo.google_site_verification && <meta name="google-site-verification" content={seo.google_site_verification} />}
      {seo.viewport && <meta name="viewport" content={seo.viewport} />}
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && <meta property="og:description" content={seo.description} />}
      {seo.image && <meta property="og:image" content={seo.image} />}
      {seo.twitter_username && <meta name="twitter:creator" content={seo.twitter_username} />}
      {seo.twitter_site && <meta name="twitter:site" content={seo.twitter_site} />}
      {seo.url && <link rel="canonical" href={seo.url} />}
    </head>
  )
};

export default Seo;
