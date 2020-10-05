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
  width: 100%;
  flex-wrap: wrap;
  margin: 0 -15px;
  position: relative;
`

export const BootsColumn = styled.div`
  width: 100%;
  padding: 0 15px;
  ${({ xs }) =>
    xs &&
    `
    ${({ theme }) => theme.xsAbove} {
        max-width: ${(xs / 12) * 100}%;
        flex: 0 0 ${(xs / 12) * 100}%;
      }
    `}

  ${({ sm }) =>
    sm &&
    `
    ${({ theme }) => theme.smAbove} {
        max-width: ${(sm / 12) * 100}%;
        flex: 0 0 ${(sm / 12) * 100}%;
      }
    `}

${({ md }) =>
  md &&
  `
    ${({ theme }) => theme.mdAbove} {
        max-width: ${(md / 12) * 100}%;
        flex: 0 0 ${(md / 12) * 100}%;
      }
    `}

${({ lg }) =>
  lg &&
  `
    ${({ theme }) => theme.lgAbove} {
        max-width: ${(lg / 12) * 100}%;
        flex: 0 0 ${(lg / 12) * 100}%;
      }
    `}

${({ xl }) =>
  xl &&
  `
    ${({ theme }) => theme.xlAbove} {
        max-width: ${(xl / 12) * 100}%;
        flex: 0 0 ${(xl / 12) * 100}%;
      }
    `}
`
