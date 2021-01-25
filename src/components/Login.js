import React from 'react'
import { Card, Form, Button } from 'react-bootstrap';

const Login = (props) => {
    const { email, setEmail, password, setPassword, handleLogIn, handleSignUp, hasAccount, setHasAccount, handleError } = props;

    return (
        <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <Card className="w-100" style={{ maxWidth: '600px' }}>
                <Card.Body>
                    <Form>
                        <h2 className="text-center mb-4">Sign up</h2>
                            <Form.Group id="email">
                                <Form.Label className="">Email</Form.Label>
                                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                <p className="errorMsg">{handleError}</p>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                <p className="errorMsg">{handleError}</p>
                            </Form.Group>
                            <div>
                                {hasAccount ? (
                                    <>
                                        <Button className="w-100 text-center mt-4" size="lg" onClick={handleLogIn}>Sign in</Button>
                                        <p className="mt-4 text-center">Don't have an account? <Button variant="warning" onClick={() => setHasAccount(!hasAccount)}>Sign up</Button></p>
                                    </>
                                ) : (
                                    <>
                                        <Button className="w-100 text-center mt-4" size="lg" onClick={handleSignUp}>Sign up</Button>
                                        <p className="mt-4 text-center">Have an account? <Button variant="warning" onClick={() => setHasAccount(!hasAccount)}>Sign in</Button></p>
                                    </>
                                )}
                            </div>
                    </Form>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Login;