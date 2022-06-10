import React from 'react';
import Slider from 'react-slick/lib/slider';
import img from '../../images/web_skill.jpg'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "purple", borderRadius: "40px", fontSize:"50px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "purple", borderRadius: "40px", fontSize:"50px" }}
      onClick={onClick}
    />
  );
}

const Skills = () => {
    const settings = {
      infinite: true,
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      // autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div className='w-4/5 2xl:w-3/5 mx-auto mt-16'>
        <h2 style={{letterSpacing:"7px"}} className='text-center text-6xl mb-12'>SKILLS</h2>
        <Slider {...settings}>
          <div className='p-12 text-center'>
            <div>
                <img className='mx-auto' style={{width:"50%"}} src={img} alt=""/>
            </div>
            <div>
                <h3 className='text-lg font-bold mb-2'>ReactJs</h3>
                <p>I am a junior react developer. I have done few more projects as a practice projects. Here I am showing those projects.</p>
            </div>
          </div>
          
          <div className='p-12 text-center'>
            <div>
                <img className='mx-auto' style={{width:"50%"}} src={img} alt=""/>
            </div>
            <div>
                <h3 className='text-lg font-bold mb-2'>NodeJs</h3>
                <p>I am a junior NodeJs developer. I have done few more projects as a practice projects. Here I am showing those projects.</p>
            </div>
          </div>
          
           <div className='p-12 text-center'>
            <div>
                <img className='mx-auto' style={{width:"50%"}} src={img} alt=""/>
            </div>
            <div>
                <h3 className='text-lg font-bold mb-2'>ExpressJs</h3>
                <p>I am a junior ExpressJs developer. I have done few more projects as a practice projects. Here I am showing those projects.</p>
            </div>
          </div>
          
          <div className='p-12 text-center'>
            <div>
                <img className='mx-auto' style={{width:"50%"}} src={img} alt=""/>
            </div>
            <div>
                <h3 className='text-lg font-bold mb-2'>JavaScript</h3>
                <p>I am a junior JavaScript developer. I have done few more projects as a practice projects. Here I am showing those projects.</p>
            </div>
          </div>
          
          <div className='p-12 text-center'>
            <div>
                <img className='mx-auto' style={{width:"50%"}} src={img} alt=""/>
            </div>
            <div>
                <h3 className='text-lg font-bold mb-2'>HTML5</h3>
                <p>I am a junior web developer. I have done few more projects as a practice projects. Here I am showing those projects.</p>
            </div>
          </div>
          
          <div className='p-12 text-center'>
            <div>
                <img className='mx-auto' style={{width:"50%"}} src={img} alt=""/>
            </div>
            <div>
                <h3 className='text-lg font-bold mb-2'>CSS3</h3>
                <p>I am a junior web developer. I have done few more projects as a practice projects. Here I am showing those projects.</p>
            </div>
          </div>
          
          <div className='p-12 text-center'>
            <div>
                <img className='mx-auto' style={{width:"50%"}} src={img} alt=""/>
            </div>
            <div>
                <h3 className='text-lg font-bold mb-2'>Bootstrap5</h3>
                <p>As a Junior web developer Bootstrap5 is a very helpful css framework which I used many more projects.</p>
            </div>
          </div>
          
          <div className='p-12 text-center'>
            <div>
                <img className='mx-auto' style={{width:"50%"}} src={img} alt=""/>
            </div>
            <div>
                <h3 className='text-lg font-bold mb-2'>Tailwind</h3>
                <p>As a Junior web developer Tailwind is a very helpful css framework which I like and used many more projects.</p>
            </div>
          </div>
          
          <div className='p-12 text-center'>
            <div>
                <img className='mx-auto' style={{width:"50%"}} src={img} alt=""/>
            </div>
            <div>
                <h3 className='text-lg font-bold mb-2'>DaisyUI</h3>
                <p>As a Junior web developer DaisyUI is a very helpful css framework which I used many more projects.</p>
            </div>
          </div>

          <div className='p-12 text-center'>
            <div>
                <img className='mx-auto' style={{width:"50%"}} src={img} alt=""/>
            </div>
            <div>
                <h3 className='text-lg font-bold mb-2'>MongoDB</h3>
                <p>I am using NoSql Database thats why I am  using MongoDb Database which is very flexible and secured</p>
            </div>
          </div>
          
          <div className='p-12 text-center'>
            <div>
                <img className='mx-auto' style={{width:"50%"}} src={img} alt=""/>
            </div>
            <div>
                <h3 className='text-lg font-bold mb-2'>Firebase</h3>
                <p>Firebase is very popular for user authentication, hosting and storing data. I am using this for authentication and deploy my site.</p>
            </div>
          </div>

          <div className='p-12 text-center'>
            <div>
                <img className='mx-auto' style={{width:"50%"}} src={img} alt=""/>
            </div>
            <div>
                <h3 className='text-lg font-bold mb-2'>Heroku</h3>
                <p>Where I am hoisting my server side code. When I Deploy my site server code must deploy then my projects will run properly.</p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }

export default Skills;