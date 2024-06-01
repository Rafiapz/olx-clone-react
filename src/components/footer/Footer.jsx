import React from "react";
import "./Footer.css";

function Footer() {
   return (
      <div className="footer-container ">
         <div className="top-container">
            <div className="footer-col">
               <h4>POPULAR LOCATIONS</h4>
               <div className="content">
                  <h4>Kolkata</h4>
                  <h4>Mumbai</h4>
                  <h4>Chennai</h4>
                  <h4>Pune</h4>
               </div>
            </div>
            <div className="footer-col">
               <h4>TRENDING LOCATIONS</h4>
               <div className="content">
                  <h4>Bhubaneshwar</h4>
                  <h4>Hyderabad</h4>
                  <h4>Chandigarh</h4>
                  <h4>Nashik</h4>
               </div>
            </div>
            <div className="footer-col">
               <h4>ABOUT US</h4>
               <div className="content">
                  <h4>About OLX Group</h4>
                  <h4>Careers</h4>
                  <h4>Contact Us</h4>
                  <h4>OLXPeople</h4>
                  <h4>Waah Jobs</h4>
               </div>
            </div>
            <div className="footer-col">
               <h4>OLX</h4>
               <div className="content">
                  <h4>Help</h4>
                  <h4>Sitemap</h4>
                  <h4>Legal & Privacy information</h4>
                  <h4>Blog</h4>
                  <h4>OLX Autos Sell Car</h4>
               </div>
            </div>
            <div className="footer-col">
               <h4>FOLLOW US</h4>
               <div className="icons">
                  <img src="icons/facebook.png" alt="" />
                  <img src="icons/instagram.png" alt="" />
                  <img src="icons/facebook.png" alt="" />
               </div>
               <div className="links mt-6 flex items-center justify-start">
                  <img src="images/get_it_on_play_store.png" alt="" className="h-[1.65rem]" />
                  <img src="images/get_it_on_app_store.png" alt="" className="h-5" />
               </div>
            </div>
         </div>
         <div className="bottom-container bg-teal-950 text-white flex items-center justify-between px-4 py-4">
            <h4>Help - Sitemap</h4>
            <h4>All rights reserved © 2006-2023 OLX</h4>
         </div>
      </div>
   );
}

export default Footer;
