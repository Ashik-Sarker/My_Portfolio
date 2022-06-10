import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const { id } = useParams();
    
    const data = [
        {
            _id: 1,
            name: "Tools Manufacturer Website",
            descriptions: {
                d1: "jknskjdkcjdsckckjckj",
                d2: "dfvgdvdvdvdfv",
                d3: "dfvfdvfdv",
                d4: "dfvdfvdfvdfvdvdf",
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
                d1: "jknskjdkcjdsckckjckj",
                d2: "dfvgdvdvdvdfv",
                d3: "dfvfdvfdv",
                d4: "dfvdfvdfvdfvdvdf",
            },
            images: {
                img1: "https://i.ibb.co/VT389dG/best-tools-manufacturer-web-app-1.png",
                img2: "https://i.ibb.co/M9pgC4f/best-tools-manufacturer-web-app-my-Portfolio.png",
                img3: "https://i.ibb.co/mJ8qSgm/best-tools-manufacturer-web-app-my-Portfolio-2.png",
                img4: "https://i.ibb.co/SyTnYs1/best-tools-manufacturer-web-app-my-Portfolio-4.png"
            },
            visitSite:"https://bikers-warehouse.web.app/",
            clientCode:"https://github.com/Ashik-Sarker/Bikers-WareHouse-Client",
            serverCode:"https://github.com/Ashik-Sarker/Bikers-WareHouse-Server"
        },
        {
            _id: 3,
            name: "Twinkle Kitchen",
            descriptions: {
                d1: "jknskjdkcjdsckckjckj",
                d2: "dfvgdvdvdvdfv",
                d3: "dfvfdvfdv",
                d4: "dfvdfvdfvdfvdvdf",
            },
            images: {
                img1: "https://i.ibb.co/VT389dG/best-tools-manufacturer-web-app-1.png",
                img2: "https://i.ibb.co/M9pgC4f/best-tools-manufacturer-web-app-my-Portfolio.png",
                img3: "https://i.ibb.co/mJ8qSgm/best-tools-manufacturer-web-app-my-Portfolio-2.png",
                img4: "https://i.ibb.co/SyTnYs1/best-tools-manufacturer-web-app-my-Portfolio-4.png"
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
                    <button class="btn btn-primary"><a href={p.visitSite}>Visit Site</a></button>
                    <button class="btn btn-primary"><a href={p.clientCode}>Client Code</a></button>
                    <button class="btn btn-primary"><a href={p.serverCode}>Server Code</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;


