import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../../images/agyle-intelligence@2x.webp'
import img2 from '../../images/hal-con.webp'
import img3 from '../../images/ladyslipper-cottages.webp'

const Projects = () => {
    const navigate = useNavigate();
    return (
        <div id='project' className='mt-36'>
            <h1 style={{letterSpacing:"7px"}} className='text-4xl md:text-6xl text-center mb-28'>PROJECTS</h1>
            {/* <Border></Border> */}
            <div class="w-4/5 2xl:w-3/5 mx-auto card lg:card-side bg-base-100 mt-20 mb-40">
                <figure><img src={img1} alt="Album"/></figure>
                <div class="card-body">
                    <h2 class="card-title font-bold text-3xl">Tools Manufacturer Website</h2>
                    <p>Authentication, Authorization and create unique UI and simple UX
                    Users can purchase Tools and complete payment
                    Admin can create and manage Products.</p>
                    
                    <div class="card-actions">

                        <button onClick={() => navigate('/projectDetails/1')} class="btn btn-primary">Project Details</button>
                        <button class="btn btn-primary"><a target="_blank" href="https://best-tools-manufacturer.web.app/">Visit Site</a></button>
                        <button class="btn btn-primary"><a target="_blank" href="https://github.com/Ashik-Sarker/Tools-Manufacturer-Client/">Client Code</a></button>
                        <button class="btn btn-primary"><a target="_blank" href="https://github.com/Ashik-Sarker/Tools-Manufacturer-Server">Server Code</a></button>
                    </div>
                </div>
            </div>
            <div class="w-4/5 2xl:w-3/5 mx-auto card lg:card-side bg-base-100 mt-20 mb-40">
                <figure><img src={img2} alt="Album"/></figure>
                <div class="card-body">
                    <h2 class="card-title font-bold text-3xl">Warehouse Management System</h2>
                    <p>Authentication and create unique UI and simple UX
                    After login user can Add, Delete , Update and Restock Quantity
                    Every users can see their own products</p>
                    
                    <div class="card-actions">
                        <button onClick={() => navigate('/projectDetails/2')}class="btn btn-primary">Project Details</button>
                        <button class="btn btn-primary"><a target="_blank" href="https://bikers-warehouse.web.app/">LiveLink</a></button>
                        <button class="btn btn-primary"><a target="_blank" href="https://github.com/Ashik-Sarker/Bikers-WareHouse-Client">Client Code</a></button>
                        <button class="btn btn-primary"><a target="_blank" href="https://github.com/Ashik-Sarker/Bikers-WareHouse-Server">Server Code</a></button>
                    </div>
                </div>
            </div>
            {/* <Border></Border> */}
            <div class="w-4/5 2xl:w-3/5 mx-auto card lg:card-side bg-base-100 mt-20 mb-40">
                <figure><img src={img3} alt="Album"/></figure>
                <div class="card-body">
                    <h2 class="card-title font-bold text-3xl">Twinkle Kitchen</h2>
                    <p>Authentication
                    Protecting Route For non user
                    create unique UI and simple UX.Authentication
                    Protecting Route For non user
                    create unique UI and simple UX</p>
                    
                    <div class="card-actions">
                        <button onClick={() => navigate('/projectDetails/3')} class="btn btn-primary">Project Details</button>
                        <button class="btn btn-primary"><a target="_blank" href="https://pro-developer-357f4.web.app/">LiveLink</a></button>
                        <button class="btn btn-primary"><a target="_blank" href="https://github.com/Ashik-Sarker/Twinkle-kitchen">Source Code</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;