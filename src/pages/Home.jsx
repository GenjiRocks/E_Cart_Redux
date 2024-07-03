import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slice/wishlistSlice';
import { addtoCartList } from '../redux/slice/cartSlice';


function Home() {
  // Call the useFetch.jsx to get the data
  const data = useFetch('https://dummyjson.com/products')
  console.log(data);
  const dispatch = useDispatch()

  
  return (
    
    <>

    <Row className='w-100 p-5 my-5'>
      {
        data?.length>0?
        data.map((item) => (
          <Col sm={12} md={4} lg={3} className='mt-3 d-flex justify-content-center' >
          <Card style={{ width: '100%' }} className='border shadow rounded'>
          <Card.Img variant="top" className='w-100' style={{height:'300px'}} src={item.thumbnail} />
          <Card.Body>
            <Card.Title className='text-center'>{item.title}</Card.Title>
            <Card.Text className='text-center fw-bolder fs-3'>
              {item.price}$
            </Card.Text>
            <div className="d-flex justify-content-between">
              <Button  onClick={()=>dispatch(addToWishlist(item))} className='border rounded-5' variant="danger"><FontAwesomeIcon icon={faHeart} /></Button>
              <Button onClick={()=>dispatch(addtoCartList(item))} className='border rounded-5' variant="success"><FontAwesomeIcon icon={faCartShopping} /></Button>
            </div>
          </Card.Body>
        </Card>
        </Col>

  ))
      
    :
    <h1>Nothing to display</h1>

}
      
    </Row>
    
    </>
  )
}

export default Home