import { Link } from "react-router-dom";
import styled from "styled-components";

export const BackButton = styled(Link)`
  padding: 5px;
  border-radius: 10px;
  background-color: dodgerblue;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  font-family: "Staatliches", cursive;

  &:hover {
    transform: scale(1.05);
    transition: 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

export const FeedBtn = styled.button`
  padding: 5px;
  border-radius: 10px;
  background-color: dodgerblue;
  font-family: "Fredoka One", cursive;

  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
    transition: 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;
