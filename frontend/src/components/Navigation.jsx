import Container from "react-bootstrap/Container";
import "./Navigation.css";
import { Navbar, Button, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/userSlice";

function Navigation() {
  const user = useSelector((state) => state.user);
const dispatch = useDispatch()

  function handleLogout() {
    dispatch(logout());
  }


  return (
    <Navbar expand="lg" bg="light">
      <Container>
        <LinkContainer to="/" style={{ fontSize: "24px", fontWeight: "700" }}>
          <Navbar.Brand>Clutch Mart 2.0</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 active-border-0" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* if no user */}
            {!user && (
              <LinkContainer to="/login" style={{ textDecoration: "underline" }}>
                <Nav.Link>Login | Sign up</Nav.Link>
              </LinkContainer>
            )}
            {/* if user */}

            {user && (
              <NavDropdown title={`${user.email}`} id="basic-nav-dropdown">
                {user.isAdmin && (
                  <>
                    <LinkContainer to="/dashboard">
                      <NavDropdown.Item>Dashboard</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/new-product">
                      <NavDropdown.Item>Create Product</NavDropdown.Item>
                    </LinkContainer>
                  </>
                )}
                {!user.isAdmin && (
                  <>
                    <LinkContainer to="/cart">
                      <NavDropdown.Item>Cart</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/orders">
                      <NavDropdown.Item>My orders</NavDropdown.Item>
                    </LinkContainer>
                  </>
                )}
                <NavDropdown.Divider />
               <Button variant="danger" onClick={handleLogout}className="logout-btn">Logout</Button>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
