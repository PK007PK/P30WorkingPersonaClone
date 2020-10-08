import styled from "styled-components"

export const BootsContainer = styled.div`
  margin: 0px auto;

  ${({ theme }) => theme.media.xsAbove} {
    max-width: ${({ theme }) => theme.breakpoint.xs};
  }

  ${({ theme }) => theme.media.smAbove} {
    max-width: ${({ theme }) => theme.breakpoint.sm};
  }

  ${({ theme }) => theme.media.mdAbove} {
    max-width: ${({ theme }) => theme.breakpoint.md};
  }

  ${({ theme }) => theme.media.lgAbove} {
    max-width: ${({ theme }) => theme.breakpoint.lg};

  ${({ theme }) => theme.media.xlAbove} {
    max-width: ${({ theme }) => theme.breakpoint.xl};
  }
`

export const BootsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
  position: relative;
`

export const BootsColumn = styled.div`
  width: 100%;
  padding: 0 15px;
  position: relative;

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
`
