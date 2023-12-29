import React from "react";
import {
  Container,
  Row,
  Col,
  Tab,
  Nav,
  Image,
  Form,
  Button,
  Badge,
} from "react-bootstrap";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";
import Heading from "../components/Heading";
import profilePix from "../images/profile-picture.png";
import { FaClipboardList, FaUser } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import "./my-account.css";
import OrderCard from "../components/OrderCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, signOut } from "../features/authSlice";

const MyAccount = () => {
  const dispatch = useDispatch();
  const [theme] = useThemeHook();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  //   const storedUserData = JSON.parse(localStorage.getItem("userData"));
  //   const username = storedUserData ? storedUserData.username : null;

  if (!user) {
    // User is not logged in
    return <div>User not logged in</div>;
  }
  const { firstName, lastName, mobileNumber, email, username, password } = user;
  console.log(firstName);

  // const handleLogout = () => {
  //     sessionStorage.removeItem('token');
  // //  localStorage.removeItem('userData');
  // navigate('/sign-in');
  // };

  const handleSignOut = () => {
    dispatch(signOut());
    navigate("/sign-in");
  };

  return (
    <Container className="py-5 mt-5">
      <Heading heading="My Account" />
      <Tab.Container defaultActiveKey="my-orders">
        <Row className="justify-content-evenly mt-4 p-1">
          <Col
            sm={3}
            className={`${
              theme ? "text-light bg-dark" : "text-black bg-light"
            } p-2 rounded h-100 mb-3 user-menu`}
          >
            <Row className="mb-3 py-2">
              <Col xs={3} className="pe-0">
                <Image
                  src={profilePix}
                  thumbnail
                  fluid
                  roundedCircle
                  className="p-0"
                />
              </Col>
              <Col xs={9} className="pt-1">
                <span>Hello,</span>
                <h4>
                  {firstName} {lastName}
                </h4>
              </Col>
            </Row>
            <Nav variant="pills" className="flex-column">
              <Nav.Item className="mb-3">
                <Nav.Link eventKey="my-orders">
                  My Orders
                  <FaClipboardList size="1.4rem" />
                </Nav.Link>
                <Nav.Link eventKey="account-details">
                  Account Details
                  <FaUser size="1.4rem" />
                </Nav.Link>
                <Nav.Link eventKey="address">
                  Address
                  <IoLocationSharp size="1.4rem" />
                </Nav.Link>
                <Nav.Link eventKey="wallet">
                  Wallet
                  <GiWallet size="1.4rem" />
                </Nav.Link>
                <Button
                  onClick={handleSignOut}
                  className={`${
                    theme ? "bg-dark-primary text-black" : "bg-light-primary"
                  } m-auto d-block`}
                  style={{ border: 0 }}
                >
                  Logout
                </Button>
              </Nav.Item>
            </Nav>
          </Col>
          <Col
            sm={8}
            className={`${
              theme ? "text-light bg-dark" : "text-black bg-light"
            } p-2 rounded`}
          >
            <Tab.Content>
              <Tab.Pane eventKey="my-orders">
                <Heading heading="My Orders" size="h3" />
                <OrderCard
                  orderDate="21 Nov, 2023"
                  orderId="1234"
                  title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
                  img="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                  deliveredDate="25 November, 2023"
                />
                <OrderCard
                  orderDate="21 Nov, 2023"
                  orderId="1334"
                  title="Mens Casual Premium Slim Fit T-Shirts"
                  img="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                  deliveredDate="25 November, 2023"
                />
              </Tab.Pane>
              <Tab.Pane eventKey="account-details">
                <Heading heading="Account details" size="h3" />
                <div className="account-details-grid">
                  <div>
                    <label>First Name:</label>
                    <span>{firstName}</span>
                  </div>
                  <div>
                    <label>Last Name:</label>
                    <span>{lastName}</span>
                  </div>
                  <div>
                    <label>Email:</label>
                    <span>{email}</span>
                  </div>
                  <div>
                    <label>Username:</label>
                    <span>{username}</span>
                  </div>
                  <div>
                    <label>Password:</label>
                    <span>{password}</span>
                  </div>
                  <div>
                    <label>Phone Number:</label>
                    <span>{mobileNumber}</span>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="address">
                <Heading heading="Address" size="h3" />
              </Tab.Pane>
              <Tab.Pane eventKey="wallet">
                <Heading heading="Wallet" size="h3" />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default MyAccount;
