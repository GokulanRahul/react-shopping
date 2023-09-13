import { useState } from "react";
import { LiaCartPlusSolid } from "react-icons/lia";
import "./Card.css";

interface Props {
  id: number;
  title: string;
  card: any;
  isFreeShipping: Boolean;
  handleClick: Function;
}

const Card = ({ card, handleClick }: Props) => {
  const [newPic, setNewPic] = useState(card.icon);

  return (
    <div className=" flexColStart  paddings  r-card" key={card.id}>
      <img
        src={newPic}
        onMouseOver={() => setNewPic(card.icons)}
        onMouseLeave={() => setNewPic(card.icon)}
        alt="Home"
      />

      <span className="r-price">
        <span className="titl" style={{ fontWeight: "500" }}>
          {card.title}
        </span>
        <br />
        <span style={{ color: "orange" }}>Rs : </span>
        <span>{card.price}</span>
        <br />
        <span className="secondaryText">{card.style}</span>

        <span className="titl-1">
          {card.isFreeShipping ? "FreeShiping" : ""}
        </span>
      </span>

      <LiaCartPlusSolid className="c-icon" onClick={() => handleClick(card)} />
    </div>
  );
};

export default Card;
