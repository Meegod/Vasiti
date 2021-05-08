import './Footer.css';
import sub from "../images/subscribe.png";
import ig  from "../images/ig.png";
import tw  from "../images/tw.png";
import face  from "../images/face.png";
import link  from "../images/link.png";



function Footer(){
return(
     <div className="Footer">
     <div className="container">
     <div className="row">
     <div className="col-md-6 col-xs-12 col-sm-12">
 <img className="footer__img" src={sub} alt="" />
 </div>
     <div className="col-md-6 col-xs-12 col-sm-12">
      <h1>Be a  member of our community 🎉</h1>
      <p>We’d make sure you’re always first to know what’s happening on Vasiti—thus, the world.</p>
           {/*<form className="form">
           	 <input type="email" name="email" className="email-outline"/>
           	 <input type="submit" value="Subscribe"/>

           </form>*/}
     </div>
     </div>
    <section className="footer__bottom container">

<div className="row">
       <div className="col-md-2">
         <h6>Company</h6>
         <div class="d-flex flex-column ">
  <div class="p-2">About Us</div>
  <div class="p-2">Term of Use</div>
  <div class="p-2">Privacy Policy</div>
  <div class="p-2">Press & Media</div>
</div>
       </div>
       <div className="col-md-2  col-sm-6">
         <h6>Products</h6>
         <div class="d-flex flex-column">
  <div class="p-2">Marketplace</div>
  <div class="p-2">Magazine</div>
  <div class="p-2">Seller</div>
  <div class="p-2">Wholesale</div>
  <div class="p-2">Services</div>
</div>
       </div>
       <div className="col-md-2 col-sm-6">
                 <h6>Careers</h6>
                 <div class="d-flex flex-column">
  <div class="p-2 py-2">Become a Campus Rep</div>
  <div class="p-2">Become a vasiti influencer</div>
  <div class="p-2">Become a Campus writer</div>
  <div class="p-2">Become an affiliate</div>
</div>

       </div>
       <div className="col-md-2 col-sm-6">
         <h6>Get in Touch</h6>
         <div class="d-flex flex-column">
  <div class="p-2">Contact us</div>
  <div class="p-2">Partner with us</div>
  <div class="p-2">Advertise with us</div>
  <div class="p-2">Help Faqs</div>
</div>
       </div>
       <div className="col-md-2 col-sm-6"> <h6>Join Our community</h6>

<div class="d-flex flex-row">
  <div class="p-2"> <img className="img-fluid footer__bottom__image" src={link} alt="" />
</div>
  <div class="p-2"> <img className="img-fluid" src={face} alt="" />
</div>
  <div class="p-2"> <img className="img-fluid" src={ig} alt="" /></div>
  <div class="p-2"> <img className="img-fluid" src={tw} alt="" />
</div>

       </div>
     
    </div>

     </div>













    </section>
     
     </div>
</div>


  	);



}
export default Footer;