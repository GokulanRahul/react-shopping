import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import data from "../db/products-2.json";
import "./Pants.css";
import {FaHandPointDown} from 'react-icons/fa'
interface Props{
  handleClick:Function
}

const Pants = ({handleClick}:Props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <section id="Pants" className="p-wraper flexCenter">
      <span className="hd">Only Few Products Left </span>
      <FaHandPointDown style={{marginLeft:"20px",fontSize:"1.6rem",color:"var(--blue)",marginTop:"1.5rem"}}/>
      
      <div className="paddindgs innerWidth p-container">
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {data.map((card, i) => (
            <div key={i}>
              <div className=" flexColStart p-card">
                <img src={card.icon} alt="Home" className="product--image" />

                <span className="p-price">
                  <span style={{ color: "orange" }}>Rs : </span>
                  <span>{card.price}</span>
                </span>

                <span className="primaryText">{card.style}</span>
                <button className="button" onClick={()=>handleClick(card)}>Add To Cart</button>
              </div>
            </div>
          ))}
        </Carousel>
        ;
      </div>
    </section>
  );
};

export default Pants;
