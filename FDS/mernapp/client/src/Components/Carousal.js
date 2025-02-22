import React from 'react'

export default function Carousal() {
    return (
        <div>

            <div>


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


                    </div>
                    <br></br>
                   
                    <div style={{ zIndex: "10" }}>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success  text-white bg-success" type="submit">Search</button>
                            </form>
                        </div>
                   
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>


                </div>
            </div>
        </div>
    )
}
