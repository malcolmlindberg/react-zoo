import { Link } from "react-router-dom";
import { LinkTag } from "../styles/LinkTag";
import { NavStyle } from "../styles/NavStyle";

export const Nav = () => {
  return (
    <NavStyle>
      <LinkTag to={"/"}>Hem</LinkTag>
      <LinkTag to={"/"}>Om</LinkTag>
      <LinkTag to={"/"}>Kontakt</LinkTag>
    </NavStyle>
  );
};
