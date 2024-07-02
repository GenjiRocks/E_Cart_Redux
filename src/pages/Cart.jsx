import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <>
    <Row className='my-5 w-100'>
      <Col md={1}>
        
      </Col >
      <Col md={6}>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th>Image</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td><img style={{width:'150px',height:'150px'}} src="https://images.unsplash.com/photo-1517012068311-53ed5975e234?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhcnQlMjBob3Jpem9udGFsfGVufDB8fDB8fHww" alt="" /></td>
          <td>$80</td>
          <td><Button variant="outline-danger" className='rounded-4'><FontAwesomeIcon icon={faTrash} style={{color: "#ff0000",}} /></Button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td><img style={{width:'150px',height:'150px'}} src="https://images.unsplash.com/photo-1517012068311-53ed5975e234?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhcnQlMjBob3Jpem9udGFsfGVufDB8fDB8fHww" alt="" /></td>
          <td>@fat</td>
          <td><Button variant="outline-danger" className='rounded-4'><FontAwesomeIcon icon={faTrash} style={{color: "#ff0000",}} /></Button></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td><img style={{width:'150px',height:'150px'}} src="https://images.unsplash.com/photo-1517012068311-53ed5975e234?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhcnQlMjBob3Jpem9udGFsfGVufDB8fDB8fHww" alt="" /></td>
          <td>@twitter</td>
          <td><Button variant="outline-danger" className='rounded-4'><FontAwesomeIcon icon={faTrash} style={{color: "#ff0000",}} /></Button></td>
        </tr>
      </tbody>
    </Table>
      </Col>
      <Col md={4} className='d-flex justify-content-center'>
      <Card style={{ width: '450px' ,height:'200px'}} className='border shadow p-3 my-5'>
      <Card.Body>
        <Card.Title><h3>Cart Summary</h3> </Card.Title>
        <Card.Text>
          <h5>Total Number of Products: <span className='text-warning'>5</span></h5>
          <h5>Total Price: $<span className='text-warning'>5</span></h5>
          
        </Card.Text>
        <Button className='border rounded d-fle' variant="success">CheckOut</Button>
      </Card.Body>
    </Card>
      </Col>
      <Col Col md={1}>
        
      </Col>
    </Row>

    <div style={{width:'100%',height:'80vh',flexDirection:'column'}} className='d-flex justify-content-center align-items-center'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzibBVD9w_go7Ofo5BK44_ufJf_y7qQAoPKg&usqp=CAU" alt="" />

        <Link to="/">
        <Button className='btn rounded bg-danger mt-4'><FontAwesomeIcon icon={faArrowLeft} className='me-2' style={{flexDirection:'column'}} shake size='lg' />Back to Home </Button>
        </Link>
      </div>
    
    </>
  )
}

export default Cart