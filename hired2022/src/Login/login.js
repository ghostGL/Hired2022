import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

        function validarForm(){
            return email.length > 0 && password.length > 0;
        }
        
        function handleSubmit(event){
            event.preventDefault();
        }
    return (
    
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        types="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value) }
                    />
                </Form.Group>
            |       <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        autoFocus
                        types="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value) }
                    />
                    <Button block size="lg" type="submit" disable={!validarForm()}>
                        Ingresar
                    </Button>
                </Form.Group>
            </Form>
        </div>
    )
}
export default Login