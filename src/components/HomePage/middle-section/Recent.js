import React from 'react'
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import './Recent.css';
import 'react-multi-carousel/lib/styles.css';
import AOT from '../../../asset/AOT.png'
import MHA from '../../../asset/MHA.png'
import Given from '../../../asset/Given.png'
import JJK from '../../../asset/JJK.png'



const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

//card style


function Recent() {
    return (
        <div className='recent'>
            <h4 className='recent-header'>Recent Reviews</h4>
            

            <Carousel responsive={responsive} infinite className='slider'>
            <Card className='slider-item' style={{ backgroundColor: '#272727', border:'none' }} >
                <Card.Img variant="top" src={AOT} />
                    <Button variant="primary">Go somewhere</Button>
                
            </Card>
            <Card className='slider-item' style={{ backgroundColor: '#272727', border:'none' }} >
                <Card.Img variant="top" src={MHA} />
                    <Button variant="primary">Go somewhere</Button>
                
            </Card>
            <Card className='slider-item' style={{ backgroundColor: '#272727', border:'none' }} >
                <Card.Img variant="top" src={Given} />
                    <Button variant="primary">Go somewhere</Button>
                
            </Card>
            <Card className='slider-item' style={{ backgroundColor: '#272727', border:'none' }} >
                <Card.Img variant="top" src={JJK} />
                    <Button variant="primary">Go somewhere</Button>
                
            </Card>
            </Carousel>
        </div>
    )
}

export default Recent
