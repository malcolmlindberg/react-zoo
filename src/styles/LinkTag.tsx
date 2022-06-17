import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkTag = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  margin-right: 20px;
  transition: 0.2s ease;
  font-family: "Staatliches", cursive;

  &:hover {
    color: black;
  }
`;

export const NameLinkH3 = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: scale(1.03);
    transition: 0.3s ease;
    color: dodgerblue;
  }
`;
