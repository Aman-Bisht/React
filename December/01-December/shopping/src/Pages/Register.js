import React,{ useState} from 'react';
import { Container, Row, Col, Button, Form, Spinner, InputGroup} from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/high-res.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/registerSlice';

function Register(){
    const [loading, setLoading] = useState(false);
    // const [number, setNumber] = useState(null);
    const [theme] = useThemeHook();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [username,setUserName] = useState("")
    const [mobileNumber, setMobileNumber] = useState(null);
    const [password,setPassword] = useState("")
    
    const handleRegister = ()=>{
        setLoading(true);
        const user = {firstName,lastName,email,username,mobileNumber,password};
        console.log(user)
        dispatch(registerUser(user));
        navigate("/sign-in")
    }

    // const handleSubmit = (event)=>{
    //     const form = event.currentTarget;
    //     event.preventDefault();
    //     const username = form.username.value;
    //     const password = form.password.value;
    //     const firstname = form.firstName.value;
    //     const lastname = form.lastName.value;
    //     const email = form.email.value;
        
    //     if(username && password && firstname && lastname && email && number){
    //         setLoading(true);
    //         const userData = {
    //             username,
    //             password,
    //             firstname,
    //             lastname,
    //             email,
    //             number,
    //         };
    //         localStorage.setItem('userData', JSON.stringify(userData));


    //         console.log('call api here');
    //         console.log(username, password, firstname, lastname, email, number);
    //         navigate("/sign-in")
    //     }
    // }
    return (
       <Container className="py-5 mt-5">
            <Row className="justify-content-center mt-5">
                <Col xs={11} sm={10} md={8} lg={4} className={`p-4 rounded ${theme? 'text-light bg-dark' : 'text-black bg-light'}`}>
                    <h1 className={`text-center border-bottom pb-3 ${theme? 'text-dark-primary' : 'text-light-primary'}`}>
                        Create Account
                    </h1>
                    <Form onSubmit={handleRegister}>
                        <Row>
                            <Form.Group className="mb-3 col-lg-6">
                                <Form.Label>First name</Form.Label>
                                <Form.Control name="firstName" type="text" placeholder="First name"  value={firstName} onChange={(e)=>setFirstName(e.target.value)} required />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control name="lastName" type="text" placeholder="Last name" value={lastName} onChange={(e)=>setLastName(e.target.value)} required />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control name="username" type="text" placeholder="Username" minLength={3} value={username} onChange={(e)=>setUserName(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Mobile number</Form.Label>
                            <PhoneInput
                                country={'in'}
                                value={mobileNumber}
                                onChange={phone=> setMobileNumber(phone)}
                                className="text-dark"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" minLength={2} value={password} onChange={(e)=>setPassword(e.target.value)} required />
                        </Form.Group>
                        <Button
                            type="submit"
                            className={`${theme? 'bg-dark-primary text-black' : 'bg-light-primary'} m-auto d-block`}
                            disabled={loading}
                            style={{border: 0}}
                        >
                        {loading? 
                            <>
                                <Spinner
                                    as="span"
                                    animation="grow"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                                &nbsp;Loading...
                            </> : 'Continue'
                        }
                        </Button>
                    </Form>
                </Col>
            </Row>
       </Container>
    );
};

export default Register;
