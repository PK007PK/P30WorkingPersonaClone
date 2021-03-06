import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledWrapper = styled.div`
  ${({ margin }) => margin && `margin-top: 15px; margin-bottom: 15px;`}
  .inner {
    background-color: ${({ theme }) => theme.color.mainButton};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: ${({ theme }) => theme.color.white};
    transition: ${({ theme }) => theme.transition.custom};
    box-shadow: 5px 5px 0px ${({ theme }) => theme.color.white};
    padding: 0 30px;
    height: 45px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    :hover {
      background-color: ${({ theme }) => theme.color.secondaryButton};
      box-shadow: 5px 5px 0px ${({ theme }) => theme.color.mainButton};
    }

    :focus {
      outline: none;
      border: none;
      background-color: ${({ theme }) => theme.color.secondaryButton};
      box-shadow: 5px 5px 0px ${({ theme }) => theme.color.mainButton};
    }

    i {
      margin-left: 10px;
    }
  }
`;

export const StyledLink = styled(Link)``;
export const StyledA = styled.a``;
