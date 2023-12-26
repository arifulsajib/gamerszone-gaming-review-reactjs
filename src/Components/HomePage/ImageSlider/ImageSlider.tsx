import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";
import Slider from "react-slick";
import slider_img_1 from "../../../assets/slider_img_1.png";
import slider_img_2 from "../../../assets/slider_img_2.png";
import slider_img_3 from "../../../assets/slider_img_3.png";
import slider_img_4 from "../../../assets/slider_img_4.jpg";
import slider_img_5 from "../../../assets/slider_img_5.jpg";
import slider_img_6 from "../../../assets/slider_img_6.jpg";
import slider_img_7 from "../../../assets/slider_img_7.jpg";

const ImageSlider = () => {
  const sliderImagesArr = [slider_img_1, slider_img_2, slider_img_3, slider_img_4, slider_img_5, slider_img_6, slider_img_7];

  const settings = {
    className: "center",
    arrows: true,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: false
        }
      }
    ]
  };
  return (
    <section className="container-fluid bg-darkblue">
      <Slider {...settings} className="fancy-slider">
        {sliderImagesArr.map((image, idx) => (
          <div className="slider-item object-fit-cover" key={idx}>
            <img src={image} className="img-fluid" />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ImageSlider;
