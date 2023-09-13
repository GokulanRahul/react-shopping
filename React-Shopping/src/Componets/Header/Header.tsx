import "./Header.css";
import Carousel from "react-bootstrap/Carousel";

const Header = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className="h-container innerWidth paddings" {...settings} id="Header">
      <Carousel
        data-bs-theme="dark"
        indicators={true}
        controls={false}
        className="h-head"
      >
        <Carousel.Item interval={1000}>
          <div className="img-container">
            <img src="./banner-1.jpg" alt="" className="d-block w-100" />
          </div>
          <Carousel.Caption>
            <div className="content flexColStart">
              <h3>Trending Item</h3>
              <h1>LATEST FASHION</h1>
              <p>starting at Rs<b> 520</b>.00</p>
              <button>Shop Now</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <div className="img-container">
            <img src="./banner-2.jpg" alt="" className="d-block w-100" />
          </div>
          <Carousel.Caption>
            <div className="content">
              <h3>Trending Accessories</h3>
              <h1>MODERN SUNGLASSES</h1>
              <p>starting at ₹ <b>200</b>.00</p>
              <button>Shop Now</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="img-container">
            <img src="./banner-3.jpg" alt="" className="d-block w-100" />
          </div>
          <Carousel.Caption>
          <div className="content">
              <h3>Sale Offer</h3>
              <h1>SUMMER SALE</h1>
              <p>starting at ₹ <b>200</b></p>
              <button>Shop Now</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    // <section className="h-wrapper">
    //   <div className="h-container  paddings innerWidth" {...settings}>
    //     <Carousel indicators={true} controls={false} >

    //         <div className="pic-container">
    //           <img src="./banner-1.jpg" alt=""  className="d-block w-100"/>
    //         </div>
    //         <div className="h-cnt">
    //             <h3>Trending Item</h3>
    //             <h1>LATEST FASHION</h1>
    //             <p>starting at $ 20.00</p>
    //             <button className="button">Shop Now</button>
    //         </div>
    //         <div className="pic-container">
    //           <img src="./banner-2.jpg" alt="" className="d-block w-100" />
    //         </div>
    //         <div className="h-cnt">
    //             <h3>Trending Accessories</h3>
    //             <h1>MODERN SUNGLASSES</h1>
    //             <p>starting at $ 15.00</p>
    //             <button className="button">Shop Now</button>
    //         </div>
    //         <div className="pic-container">
    //           <img src="./banner-3.jpg" alt="" className="d-block w-100" />
    //         </div>
    //         <div className="h-cnt">
    //             <h3>Sale Offer</h3>
    //             <h1>SUMMER SALE</h1>
    //             <p>starting at $ 20.00</p>
    //             <button className="button">Shop Now</button>
    //         </div>
    //     </Carousel>
    //   </div>
    // </section>
  );
};

export default Header;
