import React from 'react'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
const UserDeatils = ({photo,userDeatils}) => {
  return (
    <>
         <Card >
            <Card.Body >
                <div className="card-top">
                    <img className="card-image" src={photo} />
                    <span>{userDeatils?.username}</span>
                </div>  
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Name: {userDeatils?.name}</ListGroup.Item>
                <ListGroup.Item>Email: {userDeatils?.email}</ListGroup.Item>
                <ListGroup.Item>Address: {userDeatils?.address.city}</ListGroup.Item>
                <ListGroup.Item>Phone: {userDeatils?.phone}</ListGroup.Item>
                <ListGroup.Item>Website: {userDeatils?.website}</ListGroup.Item>
            </ListGroup>
        </Card>
    </>
  )
}

export default UserDeatils