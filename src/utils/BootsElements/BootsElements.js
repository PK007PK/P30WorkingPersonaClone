import styled from 'styled-components';

export const BootsContainer = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;

  ${({ theme }) => theme.media.xsAbove} {
    max-width: ${({ theme }) => theme.breakpoint.xs}px;
  }

  ${({ theme }) => theme.media.smAbove} {
    max-width: ${({ theme }) => theme.breakpoint.sm}px;
  }

  ${({ theme }) => theme.media.mdAbove} {
    max-width: ${({ theme }) => theme.breakpoint.md}px;
  }

  ${({ theme }) => theme.media.lgAbove} {
    max-width: ${({ theme }) => theme.breakpoint.lg}px;

  ${({ theme }) => theme.media.xlAbove} {
    max-width: ${({ theme }) => theme.breakpoint.xl}px;
  }
`;

export const BootsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
  position: relative;
`;

export const BootsColumn = styled.div`
  width: 100%;
  padding: 0 15px;
  position: relative;

  ${({ yPadding }) =>
    yPadding && `padding-top: ${yPadding}; padding-bottom: ${yPadding};`}

  ${({ center }) =>
    center &&
    `
      {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `}


  ${({ theme }) => theme.media.xsAbove} {
    ${({ xs }) =>
      xs &&
      `
      {
        max-width: ${(xs / 12) * 100}%;
        flex: 0 0 ${(xs / 12) * 100}%;
      }
    `}
  }

  ${({ theme }) => theme.media.smAbove} {
    ${({ sm }) =>
      sm &&
      `
      {
        max-width: ${(sm / 12) * 100}%;
        flex: 0 0 ${(sm / 12) * 100}%;
      }
    `}
  }

  ${({ theme }) => theme.media.mdAbove} {
    ${({ md }) =>
      md &&
      `
      {
        max-width: ${(md / 12) * 100}%;
        flex: 0 0 ${(md / 12) * 100}%;
      }
    `}
  }

  ${({ theme }) => theme.media.lgAbove} {
    ${({ lg }) =>
      lg &&
      `
      {
        max-width: ${(lg / 12) * 100}%;
        flex: 0 0 ${(lg / 12) * 100}%;
      }
    `}
  }

  ${({ theme }) => theme.media.xlAbove} {
    ${({ xl }) =>
      xl &&
      `
      {
        max-width: ${(xl / 12) * 100}%;
        flex: 0 0 ${(xl / 12) * 100}%;
      }
    `}
  }
`;
