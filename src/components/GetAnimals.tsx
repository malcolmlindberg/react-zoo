import axios from "axios";
import { response } from "express";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IAnimalDetail, IAnimals } from "../models/IAnimals";
import { GetList, save } from "../services/StorageService";
import { NameHeading } from "../styles/Headings";
import { ImageStyle } from "../styles/Image";
import { NameLinkH3 } from "../styles/LinkTag";
import {
  ProductsPageContainer,
  ProductsPageParagraph,
  WrapContainer,
} from "../styles/Wrappers";

export const GetAnimals = () => {
  const [animals, setAnimals] = useState<IAnimalDetail[]>([]);

  useEffect(() => {
    let animalsList: IAnimalDetail[] = GetList<IAnimalDetail>();
    if (animalsList.length <= 0) {
      axios
        .get<IAnimalDetail[]>("https://animals.azurewebsites.net/api/animals")
        .then((response) => {
          setAnimals(response.data);
          save(response.data);
        });
    } else {
      setAnimals(animalsList);
    }
  }, []);

  return (
    <>
      {animals.map((animal, id) => {
        return (
          <WrapContainer key={id}>
            <NameLinkH3 to={"/animal/" + animal.id}>
              <NameHeading>{animal.name}</NameHeading>
              <ImageStyle src={animal.imageUrl} alt={animal.name} />
              <ProductsPageParagraph>
                {animal.shortDescription}
              </ProductsPageParagraph>
            </NameLinkH3>
          </WrapContainer>
        );
      })}
    </>
  );
};
