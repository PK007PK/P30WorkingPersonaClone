import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Image from 'gatsby-image';

import { BootsContainer } from '../../utils/BootsElements/BootsElements';
import SectionLayout from '../../utils/SectionLayout/SectionLayout';
import ArticleStyling from '../../components/ArticleStyling/ArticleStyling';

const PlainTextSection = data => (
  <SectionLayout padding="0 0 100px 0">
    <ArticleStyling>
      {data.data.map(item => {
        const itemKey = Object.keys(item)[1];
        switch (itemKey) {
          case 'paragraphContentNode':
            return (
              <div key={item.id}>
                <MDXRenderer>
                  {item.paragraphContentNode.childMdx.body}
                </MDXRenderer>
              </div>
            );
          case 'headingContent':
            return <h2 key={item.id}>{item.headingContent}</h2>;
          case 'imageData':
            return (
              <Image
                className="articleImg"
                key={item.id}
                fluid={item[itemKey].fluid}
              />
            );
          default:
            return null;
        }
      })}
    </ArticleStyling>
  </SectionLayout>
);

export default PlainTextSection;
