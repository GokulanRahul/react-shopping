import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./SearchBar.css";
import { BsSearchHeart } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
interface Props{
  size:number,
  setShow:any

}
const SearchBar = ( { setShow, size }:Props) => {

  return (
    <section className="s-wrapper">
      <nav className="flexCenter innerWidth paddings s-container">
        <div className="flexCenter s-logo">
          <img src="m-logo.jpg" alt="" />
          <span className="orangeText" onClick={() => setShow(true)} >Cotton House</span>
        </div>
       
        <div className="flexCenter search-box">
            <BsSearchHeart color="var(--blue) " size={25} style={{marginRight:"5px"}}/>
            <input type="text" />
            <button className="button">Search</button>
          </div>
          
        <div className="flexCenter profile-container">
          <a href="#">
            <FiHeart className="nav-icons" />
          </a>
          <span onClick={() => setShow(false)}>
            <AiOutlineShoppingCart className="nav-icons"  />
            <span style={{top:"1rem",fontSize:"25px"}}>{size}</span>
          </span>
          <a href="mailto:email@email.com">
            <AiOutlineUserAdd className="nav-icons" />
          </a>
        </div>
        
      </nav>
    </section>
  );
};

export default SearchBar;
