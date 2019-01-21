import React from 'react';

const Seo = props => {
  const seo = {
    keywords: props.config.keywords || null,
    author: props.config.author || null,
    copyright: props.config.copyright || null,
    email: props.config.email || null,
    language: props.config.language || null,
    robots: props.config.robots || null,
    google_site_verification: props.config.google_site_verification || null,
    viewport: props.config.viewport || null,
    title: props.config.title || null,
    description: props.config.description || null,
    locale: props.config.locale || null,
    type: props.config.type || null,
    image: props.config.image || null,
    video: props.config.video || null,
    audio: props.config.audio || null,
    url: props.config.url || null
    twitter_card: props.config.twitter_card || null,
    twitter_site: props.config.twitter_site || null,
    twitter_creator: props.config.twitter_creator || null
  }
  return(
    <head>
      {seo.keywords && <meta name="keywords" content={seo.keywords} />}
      {seo.author && <meta name="author" content={seo.author} />}
      {seo.copyright && <meta name="copyright" content={seo.copyright} />}
      {seo.email && <meta name="reply-to" content={seo.email} />}        
      {seo.language && <meta name="language" content={seo.language} />}
      {seo.robots && <meta name="robots" content={seo.robots} />}
      {seo.google_site_verification && <meta name="google-site-verification" content={seo.google_site_verification} />}
      {seo.viewport && <meta name="viewport" content={seo.viewport} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && <meta name="description" content={seo.description} />}
      {seo.description && <meta property="og:description" content={seo.description} />}
      {seo.locale && <meta property="og:locale" content={seo.locale} />}
      {seo.type && <meta property="og:type" content={seo.type} />}
      {seo.image && <meta property="og:image" content={seo.image} />}
      {seo.video && <meta property="og:video" content={seo.video} />}
      {seo.audio && <meta property="og:audio" content={seo.audio} />}
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.twitter_card && <meta name="twitter:card" content={seo.twitter_card} />}
      {seo.twitter_site && <meta name="twitter:site" content={seo.twitter_site} />}
      {seo.twitter_creator && <meta name="twitter:creator" content={seo.twitter_creator} />}
      {seo.url && <link rel="canonical" href={seo.url} />}
    </head>
  )
};

export default Seo;
