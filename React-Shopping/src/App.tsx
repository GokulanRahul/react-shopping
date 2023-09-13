import Pants from "./Componets/Pantaloons/Pants";
import SearchBar from "./Componets/SearchBar/SearchBar";
import { useState } from "react";
import Slider from "./Componets/Slider/Slider";
import Cart from "./Componets/Cart/Cart";
// import FootWears from "./Componets/FootWears/FootWears";
import Nav from "./Componets/NavBar/Nav";
import Footer from "./Componets/Footer/Footer";
import Header from "./Componets/Header/Header";
import Get_Started from "./Componets/Get Started/Get_Started";

type value = {
  id: number;
  style: String;
  price: number;
  amount: Number;
};


const App = () => {
  const [cart, setCart] = useState<value[]>([]);
  const [show, setShow] = useState(true);

  const handleClick = (card: any) => {
    if (cart.indexOf(card) !== -1) return;
    setCart([...cart, card]);
  };
  const handleChange = (card: value, d: any) => {
    const ind = cart.indexOf(card);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <div className="App">

      <Nav />
      
      <Header />
      <SearchBar setShow={setShow} size={cart.length} />
      {show ? (
        <>
          <Slider handleClick={handleClick} />
          <Pants handleClick={handleClick} />
          <Get_Started />
          <Footer/>
        </>
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
     
        
    </div>
   
   
   
  );
};

export default App;
