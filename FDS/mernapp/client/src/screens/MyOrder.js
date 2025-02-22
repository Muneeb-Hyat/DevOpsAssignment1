import React , { useEffect, useState }from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import "../Components/CardSection.css";
import { loadStripe } from '@stripe/stripe-js';


const stripePromise=loadStripe("pk_test_51NDsGpBRrAJT9bhBIJKiLdYE6XyscsstF7GeFwZa8hZSP4Jk4KvAtKTF04IaJU1hcjCv95c5kdi8anZsksaBQXio00CazVwrG7");
export default function MyOrder() {
console.log(stripePromise);
    const [orderData, setorderData] = useState({})


    const fetchMyOrder = async () => {
        console.log(localStorage.getItem('userEmail'))
        await fetch("http://localhost:5000/api/myOrderData", {
            // credentials: 'include',
            // Origin:"http://localhost:3000/login",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email:localStorage.getItem('userEmail')
            })
        }).then(async (res) => {
            let response = await res.json()
            await setorderData(response)
        })



        // await res.map((data)=>{
        //    console.log(data)
        // })


    }

    useEffect(() => {
        fetchMyOrder()
    }, [])
    return (

        <div>
            <div>


                <Navbar />

            </div>

            <div className='container'>
                <div className='row'>

                    {orderData !== {} ? Array(orderData).map(data => {
                        return (
                            data.orderData ?
                                data.orderData.order_data.slice(0).reverse().map((item) => {
                                    return (
                                        item.map((arrayData) => {
                                            return (
                                                <div  >
                                                   
                                                    {arrayData.Order_date ? <div className='m-auto mt-5'>

                                                        {data = arrayData.Order_date}
                                                        <hr />
                                                       
                                                       
                                                    </div> :

                                                        <div className='col-12 col-md-6 col-lg-3' >
                                                            <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                                                
                                                                <div className="card-body">
                                                                    <h5 className="card-title">{arrayData.name}</h5>
                                                                    <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                                        <span className='m-1'>{arrayData.qty}</span>
                                                                        <span className='m-1'>{arrayData.size}</span>
                                                                        <span className='m-1'>{data}</span>
                                                                        <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                                                                            {arrayData.price}/Rs-
                                                                           
                                                                        </div>

                                                                      
                                                        <br></br>
                                                                       
                                                     
                                                                        <div className='product'>
                                                                            <br></br>
                                                     

                                                                        </div>
                                                                        <br></br>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>



                                                    }

                                                </div>
                                            )
                                        })

                                    )
                                }) : ""
                        )
                    }) : ""}
                </div>




                


                    <Footer />

                
            <div/>
            </div>
            </div>
            )
}
