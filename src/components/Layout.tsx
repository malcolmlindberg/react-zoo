import { Link, Outlet } from "react-router-dom";
import { CompleteWrapper, WrapContainer } from "../styles/Wrappers";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

export const Layout = () => (
  <CompleteWrapper>
    <Nav />
    <WrapContainer>
      <Outlet></Outlet>
    </WrapContainer>
    <Footer />
  </CompleteWrapper>
);
