import { Container, Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => {

  return (
    <Navbar bg="light" expand="lg">
        <Container>
        <Navbar.Brand href="convex-hull/#/aide">Convex Hull</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="convex-hull/#/home">Home</Nav.Link>
            <Nav.Link href="convex-hull/#/aide">Application</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  )

}

export default NavigationBar;