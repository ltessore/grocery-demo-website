import React, { Component } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
export default class Category extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 7,
            slidesToScroll: 2,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                }
            ]
        };
        return (
            <div style={{ background: '#fff' }}>
                <div className="container" id="header-category-bk">
                    <Slider {...settings}>
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/dish`,
                                }}>
                                    <img className="img-fluid" src="img/category/grocerystample.jpg" alt="grocery-stamples" />
                                    <h6>Grocery &amp; Staples</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/drink`,
                                }}>
                                    <img className="img-fluid" src="https://saboryestilo.com.mx/wp-content/uploads/2020/01/tips-para-hacer-la-mejor-carne-asada-1200x675.jpg" alt="personalcare" />
                                    <h6>Parrilla</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/dessert`,
                                }}>
                                    <img className="img-fluid" src="img/category/household.png" alt="household-imtes" />
                                    <h6>Household Needs</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/extra`,
                                }}>
                                    <img className="img-fluid" src="img/category/kitchen.png" alt="kitchen" />
                                    <h6>Home &amp; Kitchen</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/beverages`,
                                }}>
                                    <img className="img-fluid" src="img/category/beverage.png" alt="beverages" />
                                    <h6>Beverages</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                            <Link to={{
                                    pathname: `/shop/breakfast-dairy`,
                                }}>
                                    <img className="img-fluid" src="img/category/breakfastdairy.png" alt="breakfastdairy" />
                                    <h6>Breakfast &amp; Dairy</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                            <Link to={{
                                    pathname: `/shop/biscuits-snacks-chocolates`,
                                }}>
                                    <img className="img-fluid" src="img/category/Biscuits.png" alt="biscuits-snacks-chocklates" />
                                    <h6>Biscuits, Snacks &amp; Chocolates</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                            <Link to={{
                                    pathname: `/shop/noodles-sauces-instant-food`,
                                }}>
                                     <img className="img-fluid" src="img/category/noodles.png" alt="noodles" />
                                    <h6>Noodles, Sauces &amp; Instant Food</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                            <Link to={{
                                    pathname: `/shop/pet-care`,
                                }}>
                                     <img className="img-fluid" src="img/category/petcare.png" alt="pet-care" />
                                    <h6>Pet Care</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                            <Link to={{
                                    pathname: `/shop/baby-care`,
                                }}>
                                     <img className="img-fluid" src="img/category/babycare.png" alt="baby-care" />
                                    <h6>Baby Care</h6>
                                </Link>
                            </div>
                        </div>
                    </Slider >
                </div>
            </div >
        )
    }
}
