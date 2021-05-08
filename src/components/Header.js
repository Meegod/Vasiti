import './header.css';
import testimony  from "../images/testimony.png";


function Header() {
 
      return (
    <div className="header container">
{/*      <h1 className="mt-4 p-4 ">This is the header</h1>

*/}    
     <div className="row">
  <div className="col-md-6 col-sm-12 col-xs-12">
<div className="header__content ">
       <h1 class="display-5 font-weight-bold">Amazing Experiences from our Wonderful Customers</h1>
       <p className="lead">Here is what Customers and vendors are saying
       about us,you can share your stories with us too.</p>

        </div>

     </div>
  <div className="col-md-6 col-sm-12 col-xs-12">
    <div className="header__image">
          <img className="logo" src={testimony} alt="" />

        </div>
</div>

     </div>

        
      


</div>
  );
}

export default  Header;
