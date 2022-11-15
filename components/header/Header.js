import Link from 'next/link'
import React from 'react'
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="light">
        <Container>
          <Navbar.Brand>    
          <Link href="/">Simple Blog</Link> 
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link href="/" className="px-3">Home</Link>  
            <Link href="/post"  className="px-3">Posts</Link>  
            <Link href="https://github.com/pustian-rafiq/simple-blog">Github Link</Link>  
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header