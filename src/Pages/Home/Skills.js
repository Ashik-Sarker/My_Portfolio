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
      <div className='w-3/5 mx-auto mt-16'>
        <h2 className='text-center text-6xl mb-12'>SKILLS</h2>
        <Slider {...settings}>
          <div className='p-12 text-center'>
            <div>
                <img className='mx-auto' style={{width:"50%"}} src={img} alt=""/>
            </div>
            <div>
                <h3 className='text-lg font-bold mb-2'>Front End Developer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, accusantium.</p>
            </div>
          </div>
          
          <div className='p-12 text-center'>
            <div>
                <img className='mx-auto' style={{width:"50%"}} src={img} alt=""/>
            </div>
            <div>
                <h3 className='text-lg font-bold mb-2'>Front End Developer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, accusantium.</p>
            </div>
          </div>
          
           <div className='p-12 text-center'>
            <div>
                <img className='mx-auto' style={{width:"50%"}} src={img} alt=""/>
            </div>
            <div>
                <h3 className='text-lg font-bold mb-2'>Front End Developer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, accusantium.</p>
            </div>
          </div>
          
          <div className='p-12 text-center'>
            <div>
                <img className='mx-auto' style={{width:"50%"}} src={img} alt=""/>
            </div>
            <div>
                <h3 className='text-lg font-bold mb-2'>Front End Developer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, accusantium.</p>
            </div>
          </div>
          
          <div className='p-12 text-center'>
            <div>
                <img className='mx-auto' style={{width:"50%"}} src={img} alt=""/>
            </div>
            <div>
                <h3 className='text-lg font-bold mb-2'>Front End Developer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, accusantium.</p>
            </div>
          </div>
          
          <div className='p-12 text-center'>
            <div>
                <img className='mx-auto' style={{width:"50%"}} src={img} alt=""/>
            </div>
            <div>
                <h3 className='text-lg font-bold mb-2'>Front End Developer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, accusantium.</p>
            </div>
          </div>
          
          <div className='p-12 text-center'>
            <div>
                <img className='mx-auto' style={{width:"50%"}} src={img} alt=""/>
            </div>
            <div>
                <h3 className='text-lg font-bold mb-2'>Front End Developer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, accusantium.</p>
            </div>
          </div>
          
          <div className='p-12 text-center'>
            <div>
                <img className='mx-auto' style={{width:"50%"}} src={img} alt=""/>
            </div>
            <div>
                <h3 className='text-lg font-bold mb-2'>Front End Developer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, accusantium.</p>
            </div>
          </div>
          
          <div className='p-12 text-center'>
            <div>
                <img className='mx-auto' style={{width:"50%"}} src={img} alt=""/>
            </div>
            <div>
                <h3 className='text-lg font-bold mb-2'>Front End Developer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, accusantium.</p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }

export default Skills;