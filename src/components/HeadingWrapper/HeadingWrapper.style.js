import styled from 'styled-components';

export const StyledDiv = styled.div`
  color: ${props => props.txtColor || null};
  background-color: ${props => props.backgroundColor || null};
  display: flex;
  align-items: flex-end;
  position: absolute;
  top: -40px;
  height: 65px;
  width: 96vw;
  border-radius: 0 50px 0 0;

  ${({ theme }) => theme.media.xsAbove} {
    width: 60vw;
  }

  ${({ theme }) => theme.media.smAbove} {
    width: 45vw;
  }

  ${({ theme }) => theme.media.mdAbove} {
    width: 40vw;
  }

  ${({ theme }) => theme.media.lgAbove} {
    width: 30vw;
  }

  ${({ theme }) => theme.media.xlAbove} {
    width: 20vw;
  }

  ::before {
    content: '';
    background-color: ${props => props.backgroundColor || null};
    width: 2000px;
    height: 65px;
    left: -2000px;
    position: absolute;
  }
`;
