import React from 'react';
import classes from './PizzaImage.css';
import PizzaImage from '../../assets/imgs/pizza.jpg';
const PizzaImage = (props) => (
    <div className={classes.PizzaImage}>
        <img src={PizzaImage} class={classes.image} alt="Pizza"/>
    </div>
);

export default PizzaImage;
