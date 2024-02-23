import  React,{useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom'; 

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Portfolio.css';
import Ecommerce from '../../img/1.jpg.jpeg';
import HOC from '../../img/2.jpg.jpeg';
import MusicApp from '../../img/3.jpg.jpeg';
import full1 from '../../img/4.jpg.jpeg';
import { themeContext } from '../../Context';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const navigate = useNavigate();

  const handleClick = () => {
    
      console.log('Button clicked');
    
    navigate('/Services');
  };

  return (
    <div className="portfolio" id="portfolio">
      {/* Heading */}
      <div className="portfolio-heading">
        <span>Our courses</span>
      </div>

      {/* Slider */}
      <Swiper
        spaceBetween={35}
        slidesPerView={4}
        navigation
        scrollbar={{ draggable: true }}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <div className="portfolio-card">
            <img src={MusicApp} alt="" />
            <button className="buttonX" onClick={handleClick}>
              Explore
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio-card">
            <img src={Ecommerce} alt="" />
            <button className="buttonX" onClick={handleClick}>
              Explore
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio-card">
            <img src={full1} alt="" />
            <button className="buttonX" onClick={handleClick}>
              Explore
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio-card">
            <img src={HOC} alt="" />
            <button className="buttonX" onClick={handleClick}>
              Explore
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
