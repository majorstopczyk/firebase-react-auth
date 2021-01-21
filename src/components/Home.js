import React from 'react'
import { Button, Navbar } from 'react-bootstrap'

const Home = ({ handleLogout }) => {
    return (
        <Navbar>
            <Navbar.Brand>Home</Navbar.Brand>
            <Button className="mr-auto" onClick={handleLogout}>Logout</Button>
        </Navbar>
    )
}

export default Home;