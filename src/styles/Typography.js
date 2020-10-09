import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
body {
    /* font-size ---------------*/
    ${({ theme }) =>
      theme.body.fontSize.base && `font-size: ${theme.body.fontSize.base};`}
    ${({ theme }) =>
      theme.body.fontSize.xs &&
      `${theme.media.xsAbove} {font-size: ${theme.body.fontSize.xs}};`}
    ${({ theme }) =>
      theme.body.fontSize.sm &&
      `${theme.media.smAbove} {font-size: ${theme.body.fontSize.sm}};`}
    ${({ theme }) =>
      theme.body.fontSize.md &&
      `${theme.media.mdAbove} {font-size: ${theme.body.fontSize.md}};`}
    ${({ theme }) =>
      theme.body.fontSize.lg &&
      `${theme.media.lgAbove} {font-size: ${theme.body.fontSize.lg}};`}
    ${({ theme }) =>
      theme.body.fontSize.xxl &&
      `${theme.media.xxlAbove} {font-size: ${theme.body.fontSize.xxl}};`}

    /* line-height ---------------*/
    ${({ theme }) =>
      theme.body.lineHeight.base &&
      `line-height: ${theme.body.lineHeight.base};`}
    ${({ theme }) =>
      theme.body.lineHeight.xs &&
      `${theme.media.xsAbove} {line-height: ${theme.body.lineHeight.xs}};`}
    ${({ theme }) =>
      theme.body.lineHeight.sm &&
      `${theme.media.smAbove} {line-height: ${theme.body.lineHeight.sm}};`}
    ${({ theme }) =>
      theme.body.lineHeight.md &&
      `${theme.media.mdAbove} {line-height: ${theme.body.lineHeight.md}};`}
    ${({ theme }) =>
      theme.body.lineHeight.lg &&
      `${theme.media.lgAbove} {line-height: ${theme.body.lineHeight.lg}};`}
    ${({ theme }) =>
      theme.body.lineHeight.xxl &&
      `${theme.media.xxlAbove} {line-height: ${theme.body.lineHeight.xxl}};`}

    /* font-weight ---------------*/
    ${({ theme }) =>
      theme.body.fontWeight && `font-weight: ${theme.body.fontWeight};`}

    /* letter-spacing ---------------*/
    ${({ theme }) =>
      theme.body.letterSpacing &&
      `letter-spacing: ${theme.body.letterSpacing};`}
  }

  p, li {
    word-break: break-word;
    /* font-size ---------------*/
    ${({ theme }) =>
      theme.paragraph.fontSize.base &&
      `font-size: ${theme.paragraph.fontSize.base};`}
    ${({ theme }) =>
      theme.paragraph.fontSize.xs &&
      `${theme.media.xsAbove} {font-size: ${theme.paragraph.fontSize.xs}};`}
    ${({ theme }) =>
      theme.paragraph.fontSize.sm &&
      `${theme.media.smAbove} {font-size: ${theme.paragraph.fontSize.sm}};`}
    ${({ theme }) =>
      theme.paragraph.fontSize.md &&
      `${theme.media.mdAbove} {font-size: ${theme.paragraph.fontSize.md}};`}
    ${({ theme }) =>
      theme.paragraph.fontSize.lg &&
      `${theme.media.lgAbove} {font-size: ${theme.paragraph.fontSize.lg}};`}
    ${({ theme }) =>
      theme.paragraph.fontSize.xxl &&
      `${theme.media.xxlAbove} {font-size: ${theme.paragraph.fontSize.xxl}};`}

    /* line-height ---------------*/
    ${({ theme }) =>
      theme.paragraph.lineHeight.base &&
      `line-height: ${theme.paragraph.lineHeight.base};`}
    ${({ theme }) =>
      theme.paragraph.lineHeight.xs &&
      `${theme.media.xsAbove} {line-height: ${theme.paragraph.lineHeight.xs}};`}
    ${({ theme }) =>
      theme.paragraph.lineHeight.sm &&
      `${theme.media.smAbove} {line-height: ${theme.paragraph.lineHeight.sm}};`}
    ${({ theme }) =>
      theme.paragraph.lineHeight.md &&
      `${theme.media.mdAbove} {line-height: ${theme.paragraph.lineHeight.md}};`}
    ${({ theme }) =>
      theme.paragraph.lineHeight.lg &&
      `${theme.media.lgAbove} {line-height: ${theme.paragraph.lineHeight.lg}};`}
    ${({ theme }) =>
      theme.paragraph.lineHeight.xxl &&
      `${theme.media.xxlAbove} {line-height: ${theme.paragraph.lineHeight.xxl}};`}

    /* font-weight ---------------*/
    ${({ theme }) =>
      theme.paragraph.fontWeight &&
      `font-weight: ${theme.paragraph.fontWeight};`}

    /* letter-spacing ---------------*/
    ${({ theme }) =>
      theme.paragraph.letterSpacing &&
      `letter-spacing: ${theme.paragraph.letterSpacing};`}

  }

  h1, .title {
    /* font-size ---------------*/
    ${({ theme }) =>
      theme.h1.fontSize.base && `font-size: ${theme.h1.fontSize.base};`}
    ${({ theme }) =>
      theme.h1.fontSize.xs &&
      `${theme.media.xsAbove} {font-size: ${theme.h1.fontSize.xs}};`}
    ${({ theme }) =>
      theme.h1.fontSize.sm &&
      `${theme.media.smAbove} {font-size: ${theme.h1.fontSize.sm}};`}
    ${({ theme }) =>
      theme.h1.fontSize.md &&
      `${theme.media.mdAbove} {font-size: ${theme.h1.fontSize.md}};`}
    ${({ theme }) =>
      theme.h1.fontSize.lg &&
      `${theme.media.lgAbove} {font-size: ${theme.h1.fontSize.lg}};`}
    ${({ theme }) =>
      theme.h1.fontSize.xxl &&
      `${theme.media.xxlAbove} {font-size: ${theme.h1.fontSize.xxl}};`}

    /* line-height ---------------*/
    ${({ theme }) =>
      theme.h1.lineHeight.base && `line-height: ${theme.h1.lineHeight.base};`}
    ${({ theme }) =>
      theme.h1.lineHeight.xs &&
      `${theme.media.xsAbove} {line-height: ${theme.h1.lineHeight.xs}};`}
    ${({ theme }) =>
      theme.h1.lineHeight.sm &&
      `${theme.media.smAbove} {line-height: ${theme.h1.lineHeight.sm}};`}
    ${({ theme }) =>
      theme.h1.lineHeight.md &&
      `${theme.media.mdAbove} {line-height: ${theme.h1.lineHeight.md}};`}
    ${({ theme }) =>
      theme.h1.lineHeight.lg &&
      `${theme.media.lgAbove} {line-height: ${theme.h1.lineHeight.lg}};`}
    ${({ theme }) =>
      theme.h1.lineHeight.xxl &&
      `${theme.media.xxlAbove} {line-height: ${theme.h1.lineHeight.xxl}};`}

    /* font-weight ---------------*/
    ${({ theme }) =>
      theme.h1.fontWeight && `font-weight: ${theme.h1.fontWeight};`}

    /* letter-spacing ---------------*/
    ${({ theme }) =>
      theme.h1.letterSpacing && `letter-spacing: ${theme.h1.letterSpacing};`}
  }

  h2, .h2style {
    /* font-size ---------------*/
    ${({ theme }) =>
      theme.h2.fontSize.base && `font-size: ${theme.h2.fontSize.base};`}
    ${({ theme }) =>
      theme.h2.fontSize.xs &&
      `${theme.media.xsAbove} {font-size: ${theme.h2.fontSize.xs}};`}
    ${({ theme }) =>
      theme.h2.fontSize.sm &&
      `${theme.media.smAbove} {font-size: ${theme.h2.fontSize.sm}};`}
    ${({ theme }) =>
      theme.h2.fontSize.md &&
      `${theme.media.mdAbove} {font-size: ${theme.h2.fontSize.md}};`}
    ${({ theme }) =>
      theme.h2.fontSize.lg &&
      `${theme.media.lgAbove} {font-size: ${theme.h2.fontSize.lg}};`}
    ${({ theme }) =>
      theme.h2.fontSize.xxl &&
      `${theme.media.xxlAbove} {font-size: ${theme.h2.fontSize.xxl}};`}

    /* line-height ---------------*/
    ${({ theme }) =>
      theme.h2.lineHeight.base && `line-height: ${theme.h2.lineHeight.base};`}

    ${({ theme }) =>
      theme.h2.lineHeight.xs &&
      `${theme.media.xsAbove} {line-height: ${theme.h2.lineHeight.xs}};`}
    ${({ theme }) =>
      theme.h2.lineHeight.sm &&
      `${theme.media.smAbove} {line-height: ${theme.h2.lineHeight.sm}};`}
    ${({ theme }) =>
      theme.h2.lineHeight.md &&
      `${theme.media.mdAbove} {line-height: ${theme.h2.lineHeight.md}};`}
    ${({ theme }) =>
      theme.h2.lineHeight.lg &&
      `${theme.media.lgAbove} {line-height: ${theme.h2.lineHeight.lg}};`}
    ${({ theme }) =>
      theme.h2.lineHeight.xxl &&
      `${theme.media.xxlAbove} {line-height: ${theme.h2.lineHeight.xxl}};`}

    /* font-weight ---------------*/
    ${({ theme }) =>
      theme.h2.fontWeight && `font-weight: ${theme.h2.fontWeight};`}

    /* letter-spacing ---------------*/
    ${({ theme }) =>
      theme.h2.letterSpacing && `letter-spacing: ${theme.h2.letterSpacing};`}
  }

  h3, .h3style {
    /* font-size ---------------*/
    ${({ theme }) =>
      theme.h3.fontSize.base && `font-size: ${theme.h3.fontSize.base};`}
    ${({ theme }) =>
      theme.h3.fontSize.xs &&
      `${theme.media.xsAbove} {font-size: ${theme.h3.fontSize.xs}};`}
    ${({ theme }) =>
      theme.h3.fontSize.sm &&
      `${theme.media.smAbove} {font-size: ${theme.h3.fontSize.sm}};`}
    ${({ theme }) =>
      theme.h3.fontSize.md &&
      `${theme.media.mdAbove} {font-size: ${theme.h3.fontSize.md}};`}
    ${({ theme }) =>
      theme.h3.fontSize.lg &&
      `${theme.media.lgAbove} {font-size: ${theme.h3.fontSize.lg}};`}
    ${({ theme }) =>
      theme.h3.fontSize.xxl &&
      `${theme.media.xxlAbove} {font-size: ${theme.h3.fontSize.xxl}};`}

    /* line-height ---------------*/
    ${({ theme }) =>
      theme.h3.lineHeight.base && `line-height: ${theme.h3.lineHeight.base};`}
    ${({ theme }) =>
      theme.h3.lineHeight.xs &&
      `${theme.media.xsAbove} {line-height: ${theme.h3.lineHeight.xs}};`}
    ${({ theme }) =>
      theme.h3.lineHeight.sm &&
      `${theme.media.smAbove} {line-height: ${theme.h3.lineHeight.sm}};`}
    ${({ theme }) =>
      theme.h3.lineHeight.md &&
      `${theme.media.mdAbove} {line-height: ${theme.h3.lineHeight.md}};`}
    ${({ theme }) =>
      theme.h3.lineHeight.lg &&
      `${theme.media.lgAbove} {line-height: ${theme.h3.lineHeight.lg}};`}
    ${({ theme }) =>
      theme.h3.lineHeight.xxl &&
      `${theme.media.xxlAbove} {line-height: ${theme.h3.lineHeight.xxl}};`}

    /* font-weight ---------------*/
    ${({ theme }) =>
      theme.h3.fontWeight && `font-weight: ${theme.h3.fontWeight};`}}

    /* letter-spacing ---------------*/
    ${({ theme }) =>
      theme.h3.letterSpacing && `letter-spacing: ${theme.h3.letterSpacing};`}
  }

h1 + p:first-child, h2 + p, h3 + p:first-child {
  margin-top: 24px;
}

  .lead {
       /* font-size ---------------*/
    ${({ theme }) =>
      theme.lead.fontSize.base && `font-size: ${theme.lead.fontSize.base};`}
    ${({ theme }) =>
      theme.lead.fontSize.xs &&
      `${theme.media.xsAbove} {font-size: ${theme.lead.fontSize.xs}};`}
    ${({ theme }) =>
      theme.lead.fontSize.sm &&
      `${theme.media.smAbove} {font-size: ${theme.lead.fontSize.sm}};`}
    ${({ theme }) =>
      theme.lead.fontSize.md &&
      `${theme.media.mdAbove} {font-size: ${theme.lead.fontSize.md}};`}
    ${({ theme }) =>
      theme.lead.fontSize.lg &&
      `${theme.media.lgAbove} {font-size: ${theme.lead.fontSize.lg}};`}
    ${({ theme }) =>
      theme.lead.fontSize.xxl &&
      `${theme.media.xxlAbove} {font-size: ${theme.lead.fontSize.xxl}};`}

    /* line-height ---------------*/
    ${({ theme }) =>
      theme.lead.lineHeight.base &&
      `line-height: ${theme.lead.lineHeight.base};`}
    ${({ theme }) =>
      theme.lead.lineHeight.xs &&
      `${theme.media.xsAbove} {line-height: ${theme.lead.lineHeight.xs}};`}
    ${({ theme }) =>
      theme.lead.lineHeight.sm &&
      `${theme.media.smAbove} {line-height: ${theme.lead.lineHeight.sm}};`}
    ${({ theme }) =>
      theme.lead.lineHeight.md &&
      `${theme.media.mdAbove} {line-height: ${theme.lead.lineHeight.md}};`}
    ${({ theme }) =>
      theme.lead.lineHeight.lg &&
      `${theme.media.lgAbove} {line-height: ${theme.lead.lineHeight.lg}};`}
    ${({ theme }) =>
      theme.lead.lineHeight.xxl &&
      `${theme.media.xxlAbove} {line-height: ${theme.lead.lineHeight.xxl}};`}
   
    /* font-weight ---------------*/
    ${({ theme }) =>
      theme.lead.fontWeight && `font-weight: ${theme.lead.fontWeight};`}

    /* letter-spacing ---------------*/
    ${({ theme }) =>
      theme.lead.letterSpacing &&
      `letter-spacing: ${theme.lead.letterSpacing};`}
  }

  button, .buttonStyleTypo {
       /* font-size ---------------*/
    ${({ theme }) =>
      theme.button.fontSize.base && `font-size: ${theme.button.fontSize.base};`}
    ${({ theme }) =>
      theme.button.fontSize.xs &&
      `${theme.media.xsAbove} {font-size: ${theme.button.fontSize.xs}};`}

    ${({ theme }) =>
      theme.button.fontSize.sm &&
      `${theme.media.smAbove} {font-size: ${theme.button.fontSize.sm}};`}
    ${({ theme }) =>
      theme.button.fontSize.md &&
      `${theme.media.mdAbove} {font-size: ${theme.button.fontSize.md}};`}
    ${({ theme }) =>
      theme.button.fontSize.lg &&
      `${theme.media.lgAbove} {font-size: ${theme.button.fontSize.lg}};`}
    ${({ theme }) =>
      theme.button.fontSize.xxl &&
      `${theme.media.xxlAbove} {font-size: ${theme.button.fontSize.xxl}};`}

    /* line-height ---------------*/
    ${({ theme }) =>
      theme.button.lineHeight.base &&
      `line-height: ${theme.button.lineHeight.base};`}
    ${({ theme }) =>
      theme.button.lineHeight.xs &&
      `${theme.media.xsAbove} {line-height: ${theme.button.lineHeight.xs}};`}
    ${({ theme }) =>
      theme.button.lineHeight.sm &&
      `${theme.media.smAbove} {line-height: ${theme.button.lineHeight.sm}};`}
    ${({ theme }) =>
      theme.button.lineHeight.md &&
      `${theme.media.mdAbove} {line-height: ${theme.button.lineHeight.md}};`}
    ${({ theme }) =>
      theme.button.lineHeight.lg &&
      `${theme.media.lgAbove} {line-height: ${theme.button.lineHeight.lg}};`}
    ${({ theme }) =>
      theme.button.lineHeight.xxl &&
      `${theme.media.xxlAbove} {line-height: ${theme.button.lineHeight.xxl}};`}

    /* font-weight ---------------*/
    ${({ theme }) =>
      theme.button.fontWeight && `font-weight: ${theme.button.fontWeight};`}

    /* letter-spacing ---------------*/
    ${({ theme }) =>
      theme.button.letterSpacing &&
      `letter-spacing: ${theme.button.letterSpacing};`}
  }

  .navi {
       /* font-size ---------------*/
    ${({ theme }) =>
      theme.navi.fontSize.base && `font-size: ${theme.navi.fontSize.base};`}
    ${({ theme }) =>
      theme.navi.fontSize.xs &&
      `${theme.media.xsAbove} {font-size: ${theme.navi.fontSize.xs}};`}
    ${({ theme }) =>
      theme.navi.fontSize.sm &&
      `${theme.media.smAbove} {font-size: ${theme.navi.fontSize.sm}};`}
    ${({ theme }) =>
      theme.navi.fontSize.md &&
      `${theme.media.mdAbove} {font-size: ${theme.navi.fontSize.md}};`}
    ${({ theme }) =>
      theme.navi.fontSize.lg &&
      `${theme.media.lgAbove} {font-size: ${theme.navi.fontSize.lg}};`}
    ${({ theme }) =>
      theme.navi.fontSize.xxl &&
      `${theme.media.xxlAbove} {font-size: ${theme.navi.fontSize.xxl}};`}

    /* line-height ---------------*/
    ${({ theme }) =>
      theme.navi.lineHeight.base &&
      `line-height: ${theme.navi.lineHeight.base};`}
    ${({ theme }) =>
      theme.navi.lineHeight.xs &&
      `${theme.media.xsAbove} {line-height: ${theme.navi.lineHeight.xs}};`}
    ${({ theme }) =>
      theme.navi.lineHeight.sm &&
      `${theme.media.smAbove} {line-height: ${theme.navi.lineHeight.sm}};`}
    ${({ theme }) =>
      theme.navi.lineHeight.md &&
      `${theme.media.mdAbove} {line-height: ${theme.navi.lineHeight.md}};`}
    ${({ theme }) =>
      theme.navi.lineHeight.lg &&
      `${theme.media.lgAbove} {line-height: ${theme.navi.lineHeight.lg}};`}
    ${({ theme }) =>
      theme.navi.lineHeight.xxl &&
      `${theme.media.xxlAbove} {line-height: ${theme.navi.lineHeight.xxl}};`}

    /* font-weight ---------------*/
    ${({ theme }) =>
      theme.navi.fontWeight && `font-weight: ${theme.navi.fontWeight};`}

    /* letter-spacing ---------------*/
    ${({ theme }) =>
      theme.navi.letterSpacing &&
      `letter-spacing: ${theme.navi.letterSpacing};`}

    /* letter-spacing ---------------*/
    ${({ theme }) =>
      theme.color.naviColor && `color: ${theme.color.naviColor};`}
  }

`;

export default Typography;
