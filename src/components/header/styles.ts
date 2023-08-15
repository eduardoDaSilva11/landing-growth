import styled from "styled-components";

export const StyledHeader = styled.header`
  background: #000000;
  align-items: center;
  justify-content: space-between;
  display: flex;
`;

export const StyledDrawerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 15px;
`;

export const StyledLogo = styled.h2``;

export const StyledLogoSpan = styled.div`
  margin-left: 70px;
  margin-top: -8px;
  color: #7C669D;
`;

export const StyledNavMenu = styled.div`
  display: flex;
  gap: 15px;
  color: #7C669D;
  font-size: large;
  text-transform: uppercase;
  text-decoration: none;
  margin-right: 15px;
  :hover {
    color: #ffff;
  }
`
export const StyledNavDrawer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  color: #7C669D;
  font-size: large;
  text-transform: uppercase;
  text-decoration: none;
  margin-top: 40px;
  :hover {
    color: #ffff;
  }
`

export const StyledDrawerSocialMedia = styled.div`
display: flex;
flex-direction: row;
gap: 40px;
margin-right: 5px;
`