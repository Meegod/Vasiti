import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './my-navbar.styles.css';
import Logo from "../images/Logo.png";

function MyNavbar() {
 
      return (
    <div className="">
      <Navbar
      bg="none"
        fixed="top"
        variant="dark"
        expand="md"
        className=" container animate-navbar nav-theme justify-content-between bg-color"
      >
        <div>
          <Navbar.Brand href="#home">
          <img className="logo" src={Logo} alt="" />
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <Nav.Link href="#home" className="nav-custom">ABOUT US</Nav.Link>
              <Nav.Link href="#about" className="nav-custom">STORIES</Nav.Link>
              <Nav.Link href="#skills" className="nav-custom">CONTACT</Nav.Link>
              <Nav.Link href="#experience" className="nav-custom">LOGIN</Nav.Link>
              <Nav.Link href="#projects" className=" button button1 ">SIGN UP</Nav.Link>
             
            </Nav>
       

          </Navbar.Collapse>

        </div>
      </Navbar>
      <Nav className="d-flex justify-content-center mb-4 p-2 border-top-bottom navbar-below">
              <Nav.Link href="#home" className="nav-custom-2 ">MARKET PLACE</Nav.Link>
              <Nav.Link href="#about" className="nav-custom-2">WHOLESALE CENTER</Nav.Link>
              <Nav.Link href="#skills" className="nav-custom-2">SELLER CENTER</Nav.Link>
              <Nav.Link href="#experience" className="nav-custom-2">SERVICES</Nav.Link>
              <Nav.Link href="#projects" className="nav-custom-2">INTERNSHIP</Nav.Link>
              <Nav.Link href="#contact" className="nav-custom-2">EVENTS</Nav.Link>
            </Nav>
    </div>
  );
}

export default  MyNavbar;
