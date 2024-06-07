import React from 'react';
import './Menu.css';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import BreakfastImg from '../utils/img/breakfast.jpg';
import LunchImg from '../utils/img/lunch.jpg';
import DinnerImg from '../utils/img/dinner.jpg';
import DessertImg from '../utils/img/dessert.jpg';

const breakfast = [
    {
        id: 1,
        name: "English Breakfast",
        description: 'smoked bacon, sausage, tomato, mushrooms, black pudding, baked beans, eggs',
        price: "£12"
    },
    {
        id: 2,
        name: "Avocado Toast",
        description: 'poached egg, avocado, onion, bread',
        price: "£8"
    }
    ,
    {
        id: 3,
        name: "Burrito",
        description: 'tortilla, egg, cheese, potatoes, pork meat',
        price: "£11"
    }
]

const lunch = [
    {
        id: 1,
        name: "Caesar Salad",
        description: 'chicken breast, romaine lettuce, crowtons, permesan',
        price: "£15"
    },
    {
        id: 2,
        name: "Sphagetti Carbonara",
        description: 'sphagetti, pancetta, garlic, eggs, parmesan, pepper',
        price: "£14"
    }
    ,
    {
        id: 3,
        name: "Pizza",
        description: 'chorizo, italian salaimi tomatoes, mushrooms, olives',
        price: "£12"
    }
]

const dinner = [
    {
        id: 1,
        name: "Spicy Beef",
        description: 'spicy beef, potatoes, carrots, cheese sauce, spices',
        price: "£17"
    },
    {
        id: 3,
        name: "Spaghetti Bolognese",
        description: 'onion, carrot, celery, minced meat, spaghetti, parmosa',
        price: "£15"
    }
    ,
    {
        id: 3,
        name: "Chicken Curry",
        description: 'onion, chickpea, garlic, mushrooms, tomatoes, spices',
        price: "£12"
    }
]

const dessert = [
    {
        id: 1,
        name: "Lemon Cake",
        description: 'flour, sugar, baking powder, lemon',
        price: "£9"
    },
    {
        id: 2,
        name: "Cinnamon Rolls",
        description: 'flour, salt, sugar, cinnamon, yeast, sour cream, milk',
        price: "£11"
    }
    ,
    {
        id: 3,
        name: "Vegan Pancakes",
        description: 'flour, salt, sugar, baking powder, soya milk, blueberries',
        price: "£8"
    }
]

const Menu = () => {

    return (
        <div className='menu-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex 
                align-items-center justify-content-center'>
                    <h1 className='text-light'>Menu</h1>
                </div>
            </header>

            <div className='breakfast my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-0
                    text-uppercase fw-bold text-success'>Breakfast</h2>
                    <div className='row flex-column-reverse flex-lg-row py-3'> 
                        <div className='col-lg-6 d-flex
                        justify-content-center'>
                            <img src={BreakfastImg} className='img-fluid
                            w-75 mt-5 mt-lg-0' alt='' />
                        </div>
                        <div className='col-lg-6 d-flex flex-column
                        justify-content-around'>
                            {
                                breakfast && breakfast.length > 0 ?
                                    breakfast.map((breakfastItem) =>
                                        <div key={breakfastItem.id}>
                                            <Card className='border-0'> 
                                                <CardBody>
                                                    <CardTitle className='text-center fs-3'>
                                                        {breakfastItem.name}
                                                    </CardTitle>
                                                    <CardText className='text-center fs-5'>
                                                        {breakfastItem.description}
                                                    </CardText>
                                                    <CardText className='text-center fs-3 fw-bold text-success'>
                                                        {breakfastItem.price}
                                                    </CardText>
                                                </CardBody>
                                            </Card>
                                        </div>)
                                    : null
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className='lunch bg-dark py-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-0
                    text-uppercase fw-bold text-success'>Lunch</h2>
                    <div className='row py-3'>
                        <div className='col-lg-6 d-flex flex-column
                        justify-content-around'>
                            {
                                lunch && lunch.length > 0 ?
                                    lunch.map((lunchItem) =>
                                        <div key={lunchItem.id}>
                                            <Card className='border-0  bg-dark text-light'>
                                                <CardBody>
                                                    <CardTitle className='text-center fs-3'>
                                                        {lunchItem.name}
                                                    </CardTitle>
                                                    <CardText className='text-center fs-5'>
                                                        {lunchItem.description}
                                                    </CardText>
                                                    <CardText className='text-center fs-3 fw-bold text-success'>
                                                        {lunchItem.price}
                                                    </CardText>
                                                </CardBody>
                                            </Card>
                                        </div>)
                                    : null
                            }
                        </div>
                        <div className='col-lg-6 d-flex
                        justify-content-center'>
                            <img src={LunchImg} className='img-fluid
                            w-75 mt-4 mt-lg-0' alt='' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='dinner my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-0
                    text-uppercase fw-bold text-success'>Dinner</h2>
                    <div className='row flex-column-reverse flex-lg-row py-3'> 
                        <div className='col-lg-6 d-flex
                        justify-content-center'>
                            <img src={DinnerImg} className='img-fluid
                            w-75 mt-4 mt-lg-0' alt='' />
                        </div>
                        <div className='col-lg-6 d-flex flex-column
                        justify-content-around'>
                            {
                                dinner && dinner.length > 0 ?
                                    dinner.map((dinnerItem) =>
                                        <div key={dinnerItem.id}>
                                            <Card className='border-0'>
                                                <CardBody>
                                                    <CardTitle className='text-center fs-3'>
                                                        {dinnerItem.name}
                                                    </CardTitle>
                                                    <CardText className='text-center fs-5'>
                                                        {dinnerItem.description}
                                                    </CardText>
                                                    <CardText className='text-center fs-3 fw-bold text-success'>
                                                        {dinnerItem.price}
                                                    </CardText>
                                                </CardBody>
                                            </Card>
                                        </div>)
                                    : null
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className='dessert bg-dark py-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-0
                    text-uppercase fw-bold text-success'>Dessert</h2>
                    <div className='row py-3 '> 
                        <div className='col-lg-6 d-flex flex-column
                        justify-content-around'>
                            {
                                dessert && dessert.length > 0 ?
                                    dessert.map((dessertItem) =>
                                        <div key={dessertItem.id}>
                                            <Card className='border-0  bg-dark text-light'>
                                                <CardBody>
                                                    <CardTitle className='text-center fs-3'>
                                                        {dessertItem.name}
                                                    </CardTitle>
                                                    <CardText className='text-center fs-5'>
                                                        {dessertItem.description}
                                                    </CardText>
                                                    <CardText className='text-center fs-3 fw-bold text-success'>
                                                        {dessertItem.price}
                                                    </CardText>
                                                </CardBody>
                                            </Card>
                                        </div>)
                                    : null
                            }
                        </div>
                        <div className='col-lg-6 d-flex
                        justify-content-center'>
                            <img src={DessertImg} className='img-fluid
                            w-75 mt-4 mt-lg-0' alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu