import './profile.css'
import Navbar from '../../Core/Navbar'
import Profile1 from '../../../Resources/images/profile1.jpg'
import Envolope from '../../../Resources/images/envelope.svg'
import Phone from '../../../Resources/images/phone.svg'

const Profile=()=>{
    return(
        <div>
               <Navbar/>
              <div className="body">
                <div classNameName="asd card card-2">
                        <div classNameName="pic-container" id="it1">
                        <img src={profile1} classNameName="circular--landscape" alt="profile-pic"/>     
                        </div>
                        <div className="main-container" id="it2">
                         <h4 className="fname" >Roshan</h4>
                         <h4 className="lname">Singh</h4>
                         <button className="btn btn-warning edit-button" id="ebtn">Edit</button>
                         <h5 className="Orgnm "><span>Roshan Singhs Company Name Here</span></h5>
                         <h6 className="Empid text-secondary">(# -<span className="text-secondary">12345678</span>)</h6>
                         <img src={Envolope} className="svg" alt="mail-Image"/><span className="small text-secondary">rohansing@gmail.com</span><br/> 
                         <img src={Phone} className="svg" alt="phone-img"/><span className="small text-secondary">999999999</span> 
                        </div>
                        <table className="t"> <caption></caption>
                        <thead>
                        <tr className="theadrow">
                        <th id="">Order-Id#</th>
                        <th id="">Date</th>
                        <th id="">Items</th>
                        <th id="">Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="trow">
                        <th id="">1</th>
                        <td>11/01/20</td>
                        <td>Burger,Pizza</td>
                        <td>340</td>
                        </tr>
                        <tr className="trow">
                         <th id="" >2</th>
                         <td>12/11/20</td>
                         <td>Dosa</td>
                         <td>130</td>
                         </tr>
                         <tr className="trow">
                         <th id="">3</th>
                         <td>01/12/20</td>
                         <td>Cofee</td>
                         <td>80</td>
                         </tr>
                         <tr className="trow">
                         <th id="" >4</th>
                         <td>12/11/20</td>
                         <td>Veg Thali</td>
                         <td>190</td>
                         </tr>
                         </tbody>
                         </table>
                 </div>
             </div>
     <div className="dbox" id="pos">
         <div className="apna-box card card-2"> 
         <div className="box-header">
         <h1 className="edit-heading">Edit Info</h1>
         <button className="" id="close-icon"> &times; </button>
         </div>
         <div className="box-body">
         <form>
          <div className="form-group row1">
          <label className="label-inp inp1 " for="Fname" >First Name</label>
          <label className="label-inp inp2"for="Lname" >Last Name</label>
          </div>
          <div className="form-group">
          <input type="text" name="Fname" className="form-inp  inp3" id="fname"/>
          <input type="text" name="Lname" className="form-inp inp4" id="lname"/>
          </div>
          <div className="form-group row1">
          <label className="label-inp inp1"for="Orgnm" >Org. Name</label>
          <label className="label-inp inp2"for="Email" >Email</label>
          </div>
          <div className="form-group">
          <input type="text" name="Orgnm" className="form-inp inp3" id="orgnm"/>
          <input type="email" name="Email" className="form-inp inp4" id="email"/>
          </div>
          <div className="form-group row1">
          <label className="label-inp inp1"for="Mob" >Mobile</label>
          <label className="label-inp inp2"for="File" id="upld" >Upload</label>
          </div>
          <div className="form-group">
          <input type="tel" name="Mob" className="form-inp inp3" id="mo"/>
          <input type="file" name="icard" className="form-inp inp4" id="icard"accept="image/x-png,image/jpeg"/>    
          </div>
         <button className="btn btn-success chng-btn" >Change</button>
         </form>
         </div> 
       </div>
     </div>
      {/*<script>
       var form=document.getElementById("pos");   
       var clickbtn=document.getElementById("ebtn");
       var clsicon=document.getElementById("close-icon");
       clickbtn.addEventListener("click",clicked);
       clsicon.addEventListener("click",toclose);
       window.addEventListener("click",outclick)
       function clicked(){
        console.log(clickbtn);
        form.style.display="block";
    }
    function toclose(){
      var form=document.getElementById("pos");
        form.style.display="none";
    }
    function outclick(elem){
      if(elem.target==form)
      form.style.display="none"
    }  
   </script> */}
    </div>

    );
};
export default Profile;