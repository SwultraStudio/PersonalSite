import { Navigation,Autoplay, EffectCoverflow  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
import { useState } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const ProjectsImagesSlider = ({ projects }) => {

  const [activeSlideIndex, setActiveSlideIndex] = useState(0); 

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.activeIndex);
  };

  const handleSlideClick = (url)=>{
    window.open(url);
  }

  return (
    <section id="Projects" className='mt-12 mb-6 mx-3' dir='rtl'>
   <h2 class="text-2xl font-semibold text-gray-800 capitalize  mb-9"> المشاريع المنجزة </h2>
    <Swiper
      modules={[Navigation, Autoplay, EffectCoverflow]}
      spaceBetween={40}
      slidesPerView={1}
      style={{
        "--swiper-navigation-color": "royalblue"
      }}
      navigation
      effect='coverflow'
      coverflowEffect={{
        rotate: 40,
        stretch: 0,
        depth: 100,
        scale: 0.9,
        modifier: 1,
        slideShadows: false,
      }}
      autoplay={{
        delay: 1900,
        disableOnInteraction: false,
      }}
      centeredSlides={true}
      onSlideChange={handleSlideChange} 
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {projects && projects.map((project, index) => (
        <SwiperSlide className='select-none' key={index}>
          <div 
            className={` relative mb-4 p-3 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-lg flex flex-col items-center text-center 
            ${index === activeSlideIndex ? 'bg-[#F9701A]' : 'bg-white'}`}
          >
            <div className='w-20 h-20 rounded-sm overflow-hidden mb-4'>
              <img
                src={project.imageUrl}
                alt={project.description}
                width={150}
                loading='lazy'
                height={150}
                className='object-cover w-full h-full'
              />
            </div>
            <p className={` ${index === activeSlideIndex ? 'text-white' : 'text-black'} text-xl mb-2`}>{project.name}</p>
            <p className={`${index === activeSlideIndex ? 'text-white' : 'text-black'} text-lg`}>{project.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    
    </section>
  );

};

export default ProjectsImagesSlider;
