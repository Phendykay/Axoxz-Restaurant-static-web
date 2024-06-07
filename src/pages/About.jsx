import React from 'react';
import './About.css';
import AboutChef1 from '../utils/img/about-chef1.jpg';
import AboutChef2 from '../utils/img/about-chef2.jpg';
import ImageGallery from '../components/ImageGallery';
import Reviews from '../components/Reviews';


const About = () => {
    return (
        <div className='about-page'>
            <header className='mt-5'>
                <div className='contianer h-100 d-flex
                align-items-center justify-content-center'>
                    <h1 className='text-light'>About</h1>
                </div>
            </header>
            <div className='container my-5'>
                <p >At Axoxz Restaurant, we are excited to share our latest article exploring the artistry and innovation behind our culinary creations.
                    From farm-fresh ingredients to exquisite plating techniques, we delve into the meticulous process that goes into crafting each dish on our menu.
                    Discover the inspiration behind our signature dishes and the culinary philosophy that drives our team to push the boundaries of flavor and presentation.
                </p>

                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={AboutChef1} className='img-fluid my-4' alt='' />
                    </div>
                    <div className='col-lg-6'>
                        <img src={AboutChef2} className='img-fluid my-4' alt='' />
                    </div>
                </div>

                <p >In this article, we invite you to embark on a culinary journey through the diverse flavors and textures that define the Axoxz experience.
                    From our Chef's Table series highlighting seasonal specialties to behind-the-scenes glimpses into our kitchen,
                    we offer a glimpse into the passion and dedication that fuels our commitment to culinary excellence.
                    Join us as we celebrate the art of dining and invite you to indulge in an unforgettable culinary adventure at Axoxz Restaurant.
                </p>
            </div>

            <div className='bg-dark text-light'>
                <ImageGallery/>
            </div>

            <div className='my-5'>
                <Reviews/> 
            </div>
        </div>
    );
}

export default About