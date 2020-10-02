import styled from "styled-components"

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  .formItem {
    width: 100%;
    margin: 24px 0;
    position: relative;
    flex-shrink: 0;
  }

  .formItemBar {
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.color.color1};
    transition: 0.1s all;
  }

  .label {
    position: absolute;
    top: 3px;
    left: 0;
    transition: 0.2s ease-out all;
  }

  .input,
  .textarea {
    border: none;
    line-height: 22px;
    width: 100%;
    background: none;
  }

  .textarea {
    resize: none;
    min-height: 150px;
  }

  .input:focus,
  .textarea:focus {
    outline: none;
  }

  .input:focus + .label,
  .textarea:focus + .label {
    top: -22px;
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  .input:not(:placeholder-shown) + .label,
  .textarea:not(:placeholder-shown) + .label {
    top: -22px;
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  .input:focus ~ .formItemBar,
  .textarea:focus ~ .formItemBar {
    background: #1e58ff;
  }
`
