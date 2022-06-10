import React from 'react';
import './GetInTouch.css'

const GetInTouch = () => {
    return (
        <div className='mb-32'>
            < div className = 'text-center mt-24 py-12' >
                <h1 style={{letterSpacing:"7px"}} className='mb-12 text-4xl md:text-6xl'>Get In Touch</h1>
                <form action="https://formsubmit.co/ashiksarker89@gmail.com" method="POST">
                    <input type="text" placeholder="Your Name" class="mb-4 input input-bordered input-md w-full max-w-xs md:max-w-md border-black" /><br />
                    <input type="text" placeholder="Your email" class="mb-4 input input-bordered input-md w-full max-w-xs md:max-w-md border-black" required/><br />
                    <input type="text" placeholder="Your Contact number" class="mb-4 input input-bordered input-md w-full max-w-xs md:max-w-md border-black" /><br />
                    <textarea class="textarea textarea-bordered w-full max-w-xs md:max-w-md border-black" placeholder="Your Comment Here"></textarea><br />
                    <button class="btn btn-primary w-full max-w-xs md:max-w-md mt-4">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default GetInTouch;