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

export const BootsCol = styled.div`
  width: 100%;
  padding: 0 15px;
  background-color: red;
  ${({ xs }) =>
    xs &&
    `
    ${({ theme }) => theme.xsAbove} {
        max-width: ${12 / xs}%;
        flex: 0 0 ${12 / xs}%;
      }
    `}

  ${({ sm }) =>
    sm &&
    `
    ${({ theme }) => theme.smAbove} {
        max-width: ${12 / sm}%;
        flex: 0 0 ${12 / sm}%;
      }
    `}

${({ md }) =>
  md &&
  `
    ${({ theme }) => theme.mdAbove} {
        max-width: ${12 / md}%;
        flex: 0 0 ${12 / md}%;
      }
    `}

${({ lg }) =>
  lg &&
  `
    ${({ theme }) => theme.lgAbove} {
        max-width: ${12 / lg}%;
        flex: 0 0 ${12 / lg}%;
      }
    `}

${({ xl }) =>
  xl &&
  `
    ${({ theme }) => theme.xlAbove} {
        max-width: ${12 / xl}%;
        flex: 0 0 ${12 / xl}%;
      }
    `}
`
