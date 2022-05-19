import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'


const NavBar = () => {

  const navigate = useNavigate()
  const [ searchInput, setSearchInput ] = useState('')
  
  const handleSearch = (e) => {
    setSearchInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${searchInput}`)
  }

  return (
    <Navbar>
      <Container className='nav-container'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className='nav_left'>
        <Navbar.Brand as={Link} to='/'>🌱</Navbar.Brand>
            <Nav.Link className='text-dark' as={Link} to='/plants'>About Us</Nav.Link>
            <Nav.Link className='text-dark' as={Link} to='/plants'>Glossary</Nav.Link>
          </div>
          <div className='nav_middle'>
            <h2>Seeded</h2>
          </div>
          <div className='nav_right'>
          <form  onSubmit={handleSubmit}>
            <input type='text' placeholder='Search...' value={searchInput} onChange={handleSearch} />
          </form>
            <Nav.Link className='text-dark' as={Link} to='/plants'>Plants</Nav.Link>
            <Nav.Link className='text-dark' as={Link} to='/profile/:id'>Profile</Nav.Link>
            <Nav.Link className='text-dark' as={Link} to='/register'>Register</Nav.Link>
            <Nav.Link className='text-dark' as={Link} to='/login'>Log in</Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar