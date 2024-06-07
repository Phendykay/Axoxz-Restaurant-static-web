import React from 'react'
import { Card, CardBody, CardText, CardFooter, CardTitle } from 'react-bootstrap';
import './Reviews.css';
import Person1 from '../utils/img/person1.jpg'
import Person2 from '../utils/img/person2.jpg'
import Person3 from '../utils/img/person3.jpg'
import Person4 from '../utils/img/person4.jpg'

const Reviews = () => {
    return (
        <div className='reviews-section container'>
            <h2 className='text-center mb-5 text-uppercase fw-bold
            fs-1'>Reviews</h2>
            <div className='row g-2'>
                <div className='col-lg-6'>
                    <Card className='h-100 shadow'>
                        <CardBody>
                            <div className='p-4'>
                                <CardText>
                                    <p>
                                        The menu is a delightful fusion of flavors, showcasing the creativity and expertise of the chefs.
                                    </p>
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className='d-flex align-items-center'>
                            <img src={Person1} className='img-fluid 
                            rounded-circle mx-3 shadow' alt='' />
                            <CardTitle className='text-success'>Ayo Jayesimi </CardTitle>
                        </CardFooter>
                    </Card>
                </div>

                <div className='col-lg-6'>
                    <Card className='h-100 shadow'>
                        <CardBody>
                            <div className='p-4'>
                                <CardText>
                                    <p>
                                        Each dish is a work of art, meticulously crafted with the finest ingredients and presented with flair.
                                    </p>
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className='d-flex align-items-center'>
                            <img src={Person2} className='img-fluid 
                            rounded-circle mx-3 shadow' alt='' />
                            <CardTitle className='text-success'>Tosin Oladapo </CardTitle>
                        </CardFooter>
                    </Card>
                </div>

                <div className='col-lg-6'>
                    <Card className='h-100 shadow'> 
                        <CardBody>
                            <div className='p-4'>
                                <CardText>
                                    <p>
                                        The attention to detail and commitment to excellence are evident in every aspect of the dining experience.
                                        From the impeccable service to the stunning presentation of dishes, Axoxz Restaurant exceeds expectations at every turn.
                                    </p>
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className='d-flex align-items-center'>
                            <img src={Person3} className='img-fluid 
                            rounded-circle mx-3 shadow' alt='' />
                            <CardTitle className='text-success'>Shade Okoya </CardTitle>
                        </CardFooter>
                    </Card>
                </div>

                <div className='col-lg-6'>
                    <Card className='h-100 shadow'>
                        <CardBody>
                            <div className='p-4'>
                                <CardText>
                                    <p>
                                        Axoxz Restaurant offers an unforgettable culinary journey that will leave you craving more.
                                        Highly recommended for anyone seeking a truly exceptional dining experience.
                                    </p>
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className='d-flex align-items-center'>
                            <img src={Person4} className='img-fluid 
                            rounded-circle mx-3 shadow' alt='' />
                            <CardTitle className='text-success'>Bayo Adekoya </CardTitle>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Reviews