import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"

const NavbarComponent = () => {
    return (
      <>
      <Navbar bg="dark" variant="dark">  
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              width="30"
              height="30"
              className="d-inline-block align-top "
            />{' '}
          Movie Web
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
    )
}

export default NavbarComponent
