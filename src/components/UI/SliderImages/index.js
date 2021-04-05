import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SliderImages({ images }) {
 const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplaySpeed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 660,
      settings: {
        dots: false,
        arrows: true,
      },
    },
  ],
  };

  return (
    <div className="max-w-md px-4 pb-16 w-full mx-auto self-end">
      <Slider {...settings}>
        {
          images.map(image => {
            return (
            <div key={image} className="h-80 w-full">
              <img className="object-cover h-80 w-full rounded" src={image} alt="Chef story image" />
            </div>
          )})
        }
      </Slider>
    </div>
  )
}

export default SliderImages;