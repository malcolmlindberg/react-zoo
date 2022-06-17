import axios from "axios";
import "../styles/animal.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IAnimalDetail } from "../models/IAnimals";
import { GetList, LOCALSTORAGE_KEY, save } from "../services/StorageService";
import { BackButton, FeedBtn } from "../styles/Buttons";
import { NameHeading } from "../styles/Headings";
import { SingleImage } from "../styles/Image";
import { BtnWrapper, ParagraphWrap, ProductPageWrap } from "../styles/Wrappers";

export const Animal = () => {
  const [show, setShow] = useState(false);
  const [animal, setAnimal] = useState<IAnimalDetail>({
    id: 0,
    name: "",
    imageUrl: "",
    longDescription: "",
    medicine: "",
    isFed: false,
  });

  let params = useParams() as { id: string };
  let animalsList: IAnimalDetail[] = GetList<IAnimalDetail>();

  useEffect(() => {
    for (let i = 0; i < animalsList.length; i++) {
      if (+params.id === animalsList[i].id) {
        setAnimal(animalsList[i]);
      }
    }
  }, []);

  const handleFeed = () => {
    setShow(show);
    let tempAnimal = {
      ...animal,
      isFed: true,
      lastFed: new Date(Date.now()).toLocaleString(),
    };
    setAnimal(tempAnimal);
    for (let i = 0; i < animalsList.length; i++) {
      if (animalsList[i].id === tempAnimal.id) {
        animalsList[i] = tempAnimal;
        save(animalsList);
      }
    }
  };

  return (
    <ProductPageWrap>
      <BtnWrapper>
        <BackButton to={"/"}>Tillbaka</BackButton>
      </BtnWrapper>
      <NameHeading>{animal.name}</NameHeading>
      <SingleImage src={animal.imageUrl} alt="" />
      <ParagraphWrap>{animal.longDescription}</ParagraphWrap>

      {animal.isFed ? (
        <FeedBtn disabled>{animal.name} är redan matad</FeedBtn>
      ) : (
        <FeedBtn onClick={handleFeed}>Mata {animal.name}</FeedBtn>
      )}
      <p>Medeciner: {animal.medicine}</p>
      <p> Sist matad: {animal.lastFed} </p>
    </ProductPageWrap>
  );
};
