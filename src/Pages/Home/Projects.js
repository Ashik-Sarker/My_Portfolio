import React from 'react';
import img from '../../images/agyle-intelligence@2x.webp'

const Projects = () => {
    return (
        <div className='mt-36'>
            <h1 style={{letterSpacing:"7px"}} className='text-6xl text-center mb-28'>PROJECTS</h1>
            {/* <Border></Border> */}
            <div class="w-4/5 2xl:w-3/5 mx-auto card lg:card-side bg-base-100 my-20">
                <figure><img src={img} alt="Album"/></figure>
                <div class="card-body">
                    <h2 class="card-title font-bold text-3xl">Tools Manufacturer Website</h2>
                    <p>Authentication, Authorization and create unique UI and simple UX
                    Users can purchase Tools and complete payment
                    Admin can create and manage Products also handle orders and shipment</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Project Details</button>
                    </div>
                    <div>
                        <a className='mr-6 text-orange-500 underline' target="_blank" href="https://best-tools-manufacturer.web.app/">LiveLink</a>
                        <a className='mr-6 text-orange-500 underline' target="_blank" href="https://github.com/Ashik-Sarker/Tools-Manufacturer-Client/">Client Side</a>
                        <a className='mr-6 text-orange-500 underline' target="_blank" href="https://github.com/Ashik-Sarker/Tools-Manufacturer-Server">Server Side</a>
                    </div>
                </div>
            </div>
            {/* <Border></Border> */}
            <div class="w-4/5 mx-auto card lg:card-side bg-base-100 my-20">
                <figure><img src={img} alt="Album"/></figure>
                <div class="card-body">
                    <h2 class="card-title font-bold text-3xl">Warehouse Management System</h2>
                    <p>Authentication and create unique UI and simple UX
                    After login user can Add, Delete , Update and Restock Quantity
                    Every users can see their own products</p>
                    <div class="card-actions">
                    <button class="btn btn-primary">Project Details</button>
                    </div>
                    <div>
                        <a className='mr-6 text-orange-500 underline' target="_blank" href="https://bikers-warehouse.web.app/">LiveLink</a>
                        <a className='mr-6 text-orange-500 underline' target="_blank" href="https://github.com/Ashik-Sarker/Bikers-WareHouse-Client">Client Side</a>
                        <a className='mr-6 text-orange-500 underline' target="_blank" href="https://github.com/Ashik-Sarker/Bikers-WareHouse-Server">Server Side</a>
                    </div>
                </div>
            </div>
            {/* <Border></Border> */}
            <div class="w-4/5 mx-auto card lg:card-side bg-base-100">
                <figure><img src={img} alt="Album"/></figure>
                <div class="card-body">
                    <h2 class="card-title font-bold text-3xl">Twinkle Kitchen</h2>
                    <p>Authentication
                    Protecting Route For non user
                    create unique UI and simple UX.Authentication
                    Protecting Route For non user
                    create unique UI and simple UX</p>
                    <div class="card-actions">
                    <button class="btn btn-primary">Project Details</button>
                    </div>
                    <div>
                        <a className='mr-6 text-orange-500 underline' target="_blank" href="https://pro-developer-357f4.web.app/">LiveLink</a>
                        <a className='mr-6 text-orange-500 underline' target="_blank" href="https://github.com/Ashik-Sarker/Twinkle-kitchen">Source Code</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;