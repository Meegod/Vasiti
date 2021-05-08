import './customer.css';
import lady  from "../images/lady.png";
import chef from "../images/chef.png";
import emma from "../images/emma.png";
import guy from "../images/guy.png";
import girl from "../images/girl.png";
import myguy from "../images/myguy.png";




function Customer(){

  return(
<div className="Customer container">
<div className="row ">
<div className="col-md-4 col-sm-12 col-xs-12">
 <img className="customer__img" src={lady} alt="" />
 <h3 className="mb-2 margin-2">Adetola Fashina</h3>
 <span className="customer__state">In Ikeja</span> <span className="button button-customer ml-2">Customer</span>
 <p className="custom__paragraph">
 	Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim

 </p>

</div>
<div className="col-md-4 col-sm-12 col-xs-12">
 <img className="customer__img" src={chef} alt="" />
 <h3 className="mb-2 margin-2 ml-4">Joseph Ike</h3>
 <span className="customer__state">Ibadan</span> <span className="button button-customer ml-2">Customer</span>
 <p className="custom__paragraph">
 	Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim
 	
 </p>

</div>
<div className="col-md-4 col-sm-12 col-xs-12">
 <img className="customer__img" src={emma} alt="" />
  <h3 className="mb-2 margin-2 ">Emmanuel Fayemi</h3>
 <span className="customer__state">In Ikoka</span> <span className="button button-customer ml-2">Customer</span>
 <p className="custom__paragraph">
 	Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim
 	
 </p>
</div>



</div>
{/*section--2*/}
<div className="row ">
<div className="col-md-4 col-sm-12 col-xs-12">
 <img className="customer__img" src={guy} alt="" />
 <h3 className="mb-2 margin-2">Adunoluwa Adeyemi</h3>
 <span className="customer__state">Iwo Road</span> <span className="button button-customer ml-2">Customer</span>
 <p className="custom__paragraph">
 	Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim

 </p>

</div>
<div className="col-md-4 col-sm-12 col-xs-12">
 <img className="customer__img" src={girl} alt="" />
 <h3 className="mb-2 margin-2 ml-4">Chisom ibolor</h3>
 <span className="customer__state">In Magodo</span> <span className="button button-customer ml-2">Customer</span>
 <p className="custom__paragraph">
 	Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim
 	
 </p>

</div>
<div className="col-md-4 col-sm-12 col-xs-12">
 <img className="customer__img" src={myguy} alt="" />
  <h3 className="mb-2 margin-2 ">Chidi Okeke</h3>
 <span className="customer__state">In Somolu</span> <span className="button button-customer ml-2">Customer</span>
 <p className="custom__paragraph">
 	Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim
 	
 </p>
</div>



</div>





</div>



  	);


 

}
export default Customer;