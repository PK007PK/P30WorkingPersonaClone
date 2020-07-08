import styled from "styled-components"

export const StyledSection = styled.section`
  height: calc(100vh - 98px);
  background-image: url(${({ background }) =>
    background ? background : null});
  background-size: cover;
  background-repeat: no-repeat;

  ${({ theme }) => theme.media.xsAbove} {
    max-height: 800px;
  }

  ${({ theme }) => theme.media.smAbove} {
    max-height: 540px;
    background-image: none;
    display: flex;
    position: relative;

    @media (orientation: landscape) {
      max-height: calc(100vh - 98px);
    }
  }
`

export const StyledTxtWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px;

  ${({ theme }) => theme.media.smAbove} {
    width: 65%;
    padding-right: 40px;
  }

  ${({ theme }) => theme.media.mdAbove} {
    width: 60%;
  }

  ${({ theme }) => theme.media.lgAbove} {
    padding-right: 60px;
  }

  ${({ theme }) => theme.media.lgAbove} {
    padding-right: 80px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }

  h1 {
    text-align: right;
    margin-bottom: 20px;
    font-size: 36px;
    line-height: 36px;
    font-weight: 200;

    span {
      font-weight: 700;
      font-size: 150px;
      line-height: 150px;
      letter-spacing: -0.1em;
      display: block;

      ${({ theme }) => theme.media.xlAbove} {
        font-size: 200px;
      }
    }
  }

  p {
    font-size: 24px;
    font-weight: 200;
    margin-top: 10px;
  }

  button {
    background-color: black;
    color: white;
    padding: 10px 30px;
    border: none;
    font-weight: 200;
  }
`
