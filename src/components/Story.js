import './story.css';
import woman from "../images/woman.png";
import story from "../images/story.png";


function Story(){
  
   return(
    <div className="Story">
    <div className="row container">
   <div className="col-md-6 col-sm-12 col-xs-12">
<div className="story__content">
       <h1 className="mb-2 pb-2"> Josiah’s Experience
               </h1>
               <button type="button" class="btn btn-story">CUSTOMER</button>
               <p>
               I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!
        </p>
        <h5>SHARE YOUR OWN STORY</h5>
         <img className="story__image" src={story} alt="" />
     

        </div>
        

     </div>


  <div className="col-md-6 col-sm-12 col-xs-12">
    <div className="header__image">
         <img className="header__logo container" src={woman} alt="" />

        </div>
</div>


     </div>


    </div>



   	);



}

export default Story;