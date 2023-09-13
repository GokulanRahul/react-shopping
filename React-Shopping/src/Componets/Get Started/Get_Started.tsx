import { Button } from "@mui/material";
import "./Get_Started.css";
import { GiFishingBoat, GiMoneyStack } from "react-icons/gi";
import { BsRocketTakeoff } from "react-icons/bs";
import { LuPhoneCall } from "react-icons/lu";
import { BiSolidDirectionLeft } from "react-icons/bi";

const Get_Started = () => {
  return (
    <section id="Get_Started" className="g-wrapper">
      <div className="g-container flexCenter ">
        <div className="left">
          <div className="head">
            <h4 style={{ fontWeight: "bold" }}>Sponsor </h4>
          </div>
          <div className="left-cnt">
            <div className="pic-container">
              <img src="./testimonial-1.jpg" alt="" />
            </div>
            <div className="cnt">
              <span style={{ fontWeight: "600" }}>ALAN DOE</span>
              <span>CEO & Founder Invision</span>
              <img src="./quotes.svg" alt="" width={50} />
              <span className="secondaryText about">
                He was a sponsor at the baptism of Richard and <br /> Eliza's
                daughter Elizabeth in 2000.
              </span>
            </div>
          </div>
        </div>
        <div className="center">
          <div className="immg">
            <img src="./cta-banner.jpg" alt="" />
          </div>
          <div className="cnnt">
            <span className="txt1">25% DISCOUNT</span>
            <span
            className="summer"
              
            >
              Summer <br /> Collection
            </span>
            <span className="secondaryText">Starting @Rs 500</span>
            <Button variant="outlined" size="medium">
              Shop Now
            </Button>
          </div>
        </div>
        <div className="right">
          <div className="head">
            <span style={{ fontWeight: "bold",fontSize:"22px" }}>Our Services</span>
          </div>
          <div className="right-cnt">
            <div className="flexCenter cnt-">
              <div>
                <i>
                  <GiFishingBoat />
                </i>
              </div>
              <div className="flexColStart">
                <span style={{fontWeight:"bolder",opacity:"0.7",fontSize:"16px",marginBottom:"0.3rem"}}>Worldwide Delivery</span>
                <span className="secondaryText">For Order Over ₹ 1000</span>
              </div>
            </div>
            <div className="flexCenter cnt-">
              <div>
                <i>
                  <BsRocketTakeoff />
                </i>
              </div>
              <div className="flexColStart">
                <span style={{fontWeight:"bolder",opacity:"0.7",fontSize:"16px",marginBottom:"0.3rem"}}>Next Day Delivery</span>
                <span className="secondaryText">India Orders Only</span>
              </div>
            </div>
            <div className="flexCenter cnt-">
              <div>
                <i>
                  <LuPhoneCall />
                </i>
              </div>
              <div className="flexColStart">
                <span style={{fontWeight:"bolder",opacity:"0.7",fontSize:"16px",marginBottom:"0.3rem"}}>Best Online Support</span>
                <span className="secondaryText">Hours: 8AM-11Pm</span>
              </div>
            </div>
            <div className="flexCenter cnt-">
              <div>
                <i>
                  <BiSolidDirectionLeft />
                </i>
              </div>
              <div className="flexColStart">
                <span style={{fontWeight:"bolder",opacity:"0.7",fontSize:"16px",marginBottom:"0.3rem"}}>Return Policy</span>
                <span className="secondaryText">Easy & Free Return</span>
              </div>
            </div>
            <div className="flexCenter cnt-">
              <div>
                <i>
                  <GiMoneyStack />
                </i>
              </div>
              <div className="flexColStart">
                <span style={{fontWeight:"bolder",opacity:"0.7",fontSize:"16px",marginBottom:"0.3rem"}}>30% Money Back</span>
                <span className="secondaryText">For Order Over ₹ 1000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Get_Started;
