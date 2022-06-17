import { Interface } from "readline";

export interface IAnimals {
  id: number;
  name: string;
  yearOfBirth: number;
  imageUrl: string;
  shortDescription: string;
}

export interface IAnimalDetail {
  id: number;
  name: string;
  imageUrl: string;
  longDescription: string;
  medicine: string;
  isFed?: boolean;
  lastFed?: string;
  shortDescription?: string;
}
