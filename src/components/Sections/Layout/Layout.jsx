import { Outlet, Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import Container from "../../Bits/Container/Container";
import NavItem from "../../Bits/NavItem/NavItem";
import "./Layout.css";

const Layout = () => {
  return (
    <Container lay={{ x: "center", y: "center", p: "0" }}>
      <Banner />
      <nav className="top-nav">
        <Container
          lay={{ x: "center", y: "center", p: "0" }}
          className="top-nav-inner"
          inline
        >
          <NavItem to="/">Home</NavItem>
          <NavItem to="/receipts">Receipts</NavItem>
          <NavItem to="/fibonacci">Fibonacci</NavItem>
          <NavItem to="/quoz">Quotes</NavItem>
          <NavItem to="/podapp">PodApp</NavItem>
          <NavItem to="/flashcards">FlashCards</NavItem>
        </Container>
      </nav>
      <Outlet />
    </Container>
  );
};

export default Layout;
