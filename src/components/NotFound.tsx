import { Link } from "react-router-dom";
import { NameHeading } from "../styles/Headings";
import { NotFoundBtn } from "../styles/LinkTag";
import { ProductPageWrap } from "../styles/Wrappers";

export const NotFound = () => {
  return (
    <ProductPageWrap>
      <NameHeading>Hoppsan, sidan hittades inte!</NameHeading>

      <NotFoundBtn to={"/"}>Tillbaka til startsidan</NotFoundBtn>
    </ProductPageWrap>
  );
};
