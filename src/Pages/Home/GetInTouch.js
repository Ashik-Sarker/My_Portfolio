import React from 'react';
import './GetInTouch.css'

const GetInTouch = () => {
    return (
        // <div>
        //     <div class="hero min-h-full -mt-40 mb-40">
        //         <div class="hero-content flex-col lg:flex-row-reverse shadow-lg">
        //             <div class="text-center lg:text-left">
        //             <h1 class="text-5xl font-bold">Login now!</h1>
        //             <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        //             </div>
        //             <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        //             <div class="card-body">
        //                 <div class="form-control">
        //                 <label class="label">
        //                     <span class="label-text">Email</span>
        //                 </label>
        //                 <input type="text" placeholder="email" class="input input-bordered" />
        //                 </div>
        //                 <div class="form-control">
        //                 <label class="label">
        //                     <span class="label-text">Password</span>
        //                 </label>
        //                 <input type="text" placeholder="password" class="input input-bordered" />
        //                 <label class="label">
        //                     <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
        //                 </label>
        //                 </div>
        //                 <div class="form-control mt-6">
        //                 <button class="btn btn-primary">Login</button>
        //                 </div>
        //             </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>


        <div id='contact' className='mb-32 z-50'>
            <div className = 'text-center mt-24 py-12' >
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