import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const { id } = useParams();

    const data = [
        {
            _id: 1,
            name: "Tools Manufacturer Website"
        },
        {
            _id: 2,
            name: "Warehouse Management System"
        },
        {
            _id: 3,
            name: "Twinkle Kitchen"
        }
    ]

    let project = data.find(d => d._id === id);
    console.log(project);
    
    return (
        <div>
            <h1>project details: {id}</h1>
            
        </div>
    );
};

export default ProjectDetails;


