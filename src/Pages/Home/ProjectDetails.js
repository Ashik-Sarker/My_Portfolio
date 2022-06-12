import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';

const ProjectDetails = () => {
    const { id } = useParams();
    
    const data = [
        {
            _id: 1,
            name: "Tools Manufacturer Website",
            descriptions: {
                d1: "Authentication",
                d2: "Authorization",
                d3: "Unique UI and Simple UX",
                d4: "users can purchase Tools and Complete Payment",
                d5: "Admin can create and manage Products also handle orders and shipment",
            },
            images: {
                img1: "https://i.ibb.co/VT389dG/best-tools-manufacturer-web-app-1.png",
                img2: "https://i.ibb.co/M9pgC4f/best-tools-manufacturer-web-app-my-Portfolio.png",
                img3: "https://i.ibb.co/mJ8qSgm/best-tools-manufacturer-web-app-my-Portfolio-2.png",
                img4: "https://i.ibb.co/SyTnYs1/best-tools-manufacturer-web-app-my-Portfolio-4.png"
            },
            visitSite:"https://best-tools-manufacturer.web.app/",
            clientCode:"https://github.com/Ashik-Sarker/Tools-Manufacturer-Client/",
            serverCode:"https://github.com/Ashik-Sarker/Tools-Manufacturer-Server"
        },
        {
            _id: 2,
            name: "Warehouse Management System",
            descriptions: {
                d1: "Implement secured Authentication",
                d2: "Unique UI and Simple UX",
                d3: "After Login User can add Product, update product Quantity and also delete items",
                d4: "Every user can see their own Products",
                d5: "...",
            },
            images: {
                img1: "https://i.ibb.co/gV9YmZv/bikers-warehouse-web-app.png",
                img2: "https://i.ibb.co/gmv1s16/bikers-warehouse-web-app-1.png",
                img3: "https://i.ibb.co/6Y9yDfr/bikers-warehouse-web-app-2.png",
                img4: "https://i.ibb.co/h1cjw9D/bikers-warehouse-web-app-2.png",
                img5: "https://i.ibb.co/vQz1ThZ/bikers-warehouse-web-app-22.png"
            },
            visitSite:"https://bikers-warehouse.web.app/",
            clientCode:"https://github.com/Ashik-Sarker/Bikers-WareHouse-Client",
            serverCode:"https://github.com/Ashik-Sarker/Bikers-WareHouse-Server"
        },
        {
            _id: 3,
            name: "Twinkle Kitchen",
            descriptions: {
                d1: "Using Reactjs create simple UI",
                d2: "Using Firebase implement Login system",
                d3: "Manage Errors of Login system",
                d4: "Protecting Route from non-users",
                d5: "Create user friendly UX",
            },
            images: {
                img1: "https://i.ibb.co/HGGr3bG/pro-developer-357f4-web-app.png",
                img2: "https://i.ibb.co/KwCyLMV/pro-developer-357f4-web-app-2.png",
                img3: "https://i.ibb.co/J77WCh0/pro-developer-357f4-web-app-3.png",
                img4: "https://i.ibb.co/drTpnSs/pro-developer-357f4-web-app-4.png"
            },
            visitSite:"https://pro-developer-357f4.web.app/",
            clientCode:"https://github.com/Ashik-Sarker/Twinkle-kitchen",
            serverCode:"https://github.com/Ashik-Sarker/Twinkle-kitchen"
        }
    ]

    const p = data.find(d => d._id == id)
    
    return (
        <div>
            {/* <h1>project details: {id}</h1> */}
            <NavBar></NavBar>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    {/* //carousel */}
                    <div class="carousel w-full">
                        <div id="slide1" class="carousel-item relative w-full">
                            <img style={{height:"100vh"}} src={p?.images?.img1} class="w-full" />
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" class="btn btn-circle">❮</a> 
                            <a href="#slide2" class="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide2" class="carousel-item relative w-full">
                            <img style={{height:"100vh"}} src={p?.images?.img2} class="w-full" />
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" class="btn btn-circle">❮</a> 
                            <a href="#slide3" class="btn btn-circle">❯</a>
                            </div>
                        </div> 

                        <div id="slide3" class="carousel-item relative w-full">
                            <img style={{height:"100vh"}} src={p?.images?.img3} class="w-full" />
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" class="btn btn-circle">❮</a> 
                            <a href="#slide4" class="btn btn-circle">❯</a>
                            </div>
                        </div> 

                        <div id="slide4" class="carousel-item relative w-full">
                            <img style={{height:"100vh"}} src={p?.images?.img4} class="w-full" />
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" class="btn btn-circle">❮</a> 
                            <a href="#slide1" class="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>

                    <div>
                    <h1 class="text-5xl font-bold">{p.name}</h1>
                    <p class="py-6">Details About My Projects: <br />
                    <li>{p?.descriptions?.d1}</li>
                    <li>{p?.descriptions?.d2}</li>
                    <li>{p?.descriptions?.d3}</li>
                    <li>{p?.descriptions?.d4}</li>
                    </p>
                    <button class="btn btn-sm btn-primary mr-2"><a target="_blank" href={p.visitSite}>Visit Site</a></button>
                    <button class="btn btn-sm btn-primary mr-2"><a target="_blank" href={p.clientCode}>Client Code</a></button>
                    <button class="btn btn-sm btn-primary mr-2"><a target="_blank" href={p.serverCode}>Server Code</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;


