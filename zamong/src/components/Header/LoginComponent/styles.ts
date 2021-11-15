import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { color } from "../../../style/color";
import { font } from "../../../style/font";

export const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 28px;
  font: ${font.body3};
  color: ${color.white};
`;

export const LinksContainer = styled.div`
  display: flex;
  column-gap: 16px;
`;

export const LinkIcon = styled.img`
  @media only screen and (max-width: 1205px) {
    transform: scale(1.5);
  }
`; 

export const LinkComponentContainer = styled(Link)`
  display: flex;
  align-items: center;
  img {
    margin-right: 8px;
  }
  color: ${color.white};
  text-decoration: none;
  font: ${font.body3};
`;

export const NavText = styled.span`
  @media only screen and (max-width: 1205px) {
    display: none;
  }
`;

export const UserProfileImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 6px;
`;

export const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NoDecoLink = styled(Link)`
  text-decoration: none;
  font: ${font.body3};
  color: ${color.white};
`;
