import React, { useEffect, useState } from 'react'

import Cards from '../Components/Cards'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'


export default function Home() {
    const [search, setsearch] = useState('');
    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const loaddata = async () => {
        let response = await fetch("http://localhost:5000/api/foodData", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }


        });

        response = await response.json();

        setFoodItem(response[0])
        setFoodCat(response[1])
        //console.log(response[0],response[1]);

    }


    useEffect(() => {

        loaddata()
    }, [])








    return (
        <div>
            <div><Navbar /></div>
            <div> <div>


<div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
<div className="carousel-inner" id='carousal'>
       
        <div className="carousel-item active">
            <img src="http://source.unsplash.com/random/900x700/?burger" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt='...' />
        </div>
        <div className="carousel-item">
            <img src="http://source.unsplash.com/random/900x700/?FriedRice" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
        </div>
        <div className="carousel-item">
            <img src="http://source.unsplash.com/random/900x700/?IceCream" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
        </div>

<hr/>
    </div>
    <br></br>
   
    <div style={{ zIndex: "10" }}>
            <div className="d-flex justify-content-center">
                <input className="div-control me-2" type="search" placeholder="Search" aria-label="Search"  value={search} onChange={(e) =>{setsearch(e.target.value)}}/>
                
            </div>
        </div>
        
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>


</div></div>

            <div className='container'>

                {
                    foodCat !== []
                        ? foodCat.map((data) => {
                            return (<div className='row mb-3'>
                                <div key={data._id} className='fs-3 m-3'>
                                    {data.CategoryName}
                                </div>
                               

                                {foodItem !== []
                                 ?
                                  foodItem.filter((item) => (item.CategoryName ===data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                                    .map(filterItems => {

                                        return (
                                            <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                                                <Cards foodItem={filterItems}

                                                    options={filterItems.options[0]}
                                                  >

                                                </Cards>

                                            </div>
                                        )
                                    }
                                    )

                                    : <div>no such data found</div>}
                            </div>
                            )
                        })
                        : ""
                }

            </div>


            <div><Footer /></div>



</div>
        </div>
        
    )
    
}
