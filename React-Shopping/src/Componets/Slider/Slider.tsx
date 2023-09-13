import data from "../db/products.json";
import "./Slider.css";
import Card from "./Card/Card";

interface Props{
  handleClick:Function
}

const Slider = ({handleClick}:Props) => {
  

  return (
    <section id="Slider" className="s-wrapper">
      <div className="s-conatiner">
        <div className="flexCenter s-size">
          <button>S</button>
          <button>XS</button>
          <button>M</button>
          <button>ML</button>
          <button>L</button>
          <button>X</button>
          <button>XL</button>
          <button>XXL</button>
        </div>
        <div className="r-cards">
          {data.map((card, id) => (
            <Card card={card} id={id} title={"title"} isFreeShipping={true} handleClick={handleClick}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
