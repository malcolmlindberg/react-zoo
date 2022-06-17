import styled from "styled-components";

interface IAnimalImage {
  imageUrl: string;
}

export const ImageStyle = styled.img`
  float: left;
  width: 300px;
  height: 300px;
  object-fit: cover;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;
export const SingleImage = styled.img`
  width: 500px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  min-height: auto;
  border-radius: 10px;
`;
