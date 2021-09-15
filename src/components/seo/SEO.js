import React from "react";
import Helmet from "react-helmet";
import {seoMetadata} from "../../portfolio";

const SEO = () => (
  <div>
    <Helmet
      meta={[
        {name: "description", content: seoMetadata.pageDescription},
        {name: "og:title", content: seoMetadata.ogTitle},
        {name: "og:description", content: seoMetadata.ogDescription},
        {name: "og:url", content: seoMetadata.ogUrl},
        {name: "og:type", content: seoMetadata.ogType},
        {name: "og:image", content: seoMetadata.ogImage}
      ]}
    >
      <title>{seoMetadata.pageTitle}</title>
    </Helmet>
  </div>
);

export default SEO;
