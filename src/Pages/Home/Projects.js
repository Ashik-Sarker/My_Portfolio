import React from 'react';
import img from '../../images/agyle-intelligence@2x.webp'
import Border from '../Common/Border';

const Projects = () => {
    return (
        <div className='mt-36'>
            <h1 className='text-6xl text-center mb-28'>Projects</h1>
            {/* <Border></Border> */}
            <div class="w-3/5 mx-auto card lg:card-side bg-base-100 my-20">
                <figure><img src={img} alt="Album"/></figure>
                <div class="card-body">
                    <h2 class="card-title font-bold text-3xl">Tools Manufacturer Website</h2>
                    <p>Authentication, Authorization and create unique UI and simple UX
                    Users can purchase Tools and complete payment
                    Admin can create and manage Products also handle orders and shipment</p>
                    <div class="card-actions">
                    <button class="btn btn-primary">Project Details</button>
                    </div>
                </div>
            </div>
            {/* <Border></Border> */}
            <div class="w-3/5 mx-auto card lg:card-side bg-base-100 my-20">
                <figure><img src={img} alt="Album"/></figure>
                <div class="card-body">
                    <h2 class="card-title font-bold text-3xl">Warehouse Management System</h2>
                    <p>Authentication and create unique UI and simple UX
                    After login user can Add, Delete , Update and Restock Quantity
                    Every users can see their own products</p>
                    <div class="card-actions">
                    <button class="btn btn-primary">Project Details</button>
                    </div>
                </div>
            </div>
            {/* <Border></Border> */}
            <div class="w-3/5 mx-auto card lg:card-side bg-base-100">
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
                </div>
            </div>
        </div>
    );
};

export default Projects;