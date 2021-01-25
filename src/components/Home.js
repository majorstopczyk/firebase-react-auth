import React from 'react'
import { Button, Navbar } from 'react-bootstrap'

const Home = ({ handleLogOut }) => {
    return (
        <Navbar>
            <Navbar.Brand>Home</Navbar.Brand>
            <Button className="mr-auto" onClick={handleLogOut}>Logout</Button>
        </Navbar>
    )
}

export default Home;