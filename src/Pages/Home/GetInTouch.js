import React from 'react';

const GetInTouch = () => {
    return (
        <div className='text-center my-12'>
            <h1 style={{letterSpacing:"7px"}} className='my-8 text-6xl'>Get In Touch</h1>
            <form action="https://formsubmit.co/ashiksarker89@gmail.com" method="POST">
                <input type="text" placeholder="Your Name" class="mb-4 input input-bordered input-sm w-full max-w-xs" /><br />
                <input type="text" placeholder="Your email" class="mb-4 input input-bordered input-sm w-full max-w-xs" required/><br />
                <input type="text" placeholder="Your Contact number" class="mb-4 input input-bordered input-sm w-full max-w-xs" /><br />
                <textarea class="textarea textarea-bordered w-full max-w-xs" placeholder="Your Comment Here"></textarea><br />
                <button class="btn btn-outline btn-primary w-full max-w-xs">Submit</button>
            </form>
        </div>
    );
};

export default GetInTouch;