import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { faArrowLeft, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


function Wishlist() {
  return (
    <>
    <Row className='w-100 p-5 my-5'>
      <Col sm={12} md={4} lg={3} className='mt-3 d-flex justify-content-center' >
      <Card style={{ width: '100%' }} className='border shadow rounded'>
      <Card.Img variant="top" className='w-100' style={{height:'300px'}} src="https://images.unsplash.com/photo-1517012068311-53ed5975e234?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhcnQlMjBob3Jpem9udGFsfGVufDB8fDB8fHww" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Button className='border rounded-5' variant="danger"><FontAwesomeIcon icon={faHeart} /></Button>
          <Button className='border rounded-5' variant="success"><FontAwesomeIcon icon={faCartShopping} /></Button>
        </div>
      </Card.Body>
    </Card>
      </Col>
      <Col sm={12} md={4} lg={3} className='mt-3 d-flex justify-content-center' >
      <Card style={{ width: '100%' }} className='border shadow rounded'>
      <Card.Img variant="top" className='w-100' style={{height:'300px'}} src="https://images.unsplash.com/photo-1517012068311-53ed5975e234?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhcnQlMjBob3Jpem9udGFsfGVufDB8fDB8fHww" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Button className='border rounded-5' variant="danger"><FontAwesomeIcon icon={faHeart} /></Button>
          <Button className='border rounded-5' variant="success"><FontAwesomeIcon icon={faCartShopping} /></Button>
        </div>
      </Card.Body>
    </Card>
      </Col>
    </Row>

    <div style={{width:'100%',height:'80vh',flexDirection:'column'}} className='d-flex justify-content-center align-items-center'>
        <img src="https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png" alt="" />

        <Link to="/">
        <Button className='btn rounded bg-danger mt-4'><FontAwesomeIcon icon={faArrowLeft} className='me-2' style={{flexDirection:'column'}} shake size='lg' />Back to Home </Button>
        </Link>
      </div>
    
    </>
  )
}

export default Wishlist