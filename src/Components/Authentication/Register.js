import '../../Resources/styles/styles.css'
import Navbar from '../Pages/Home/Navbar';

const Register = () =>{
    return (
        <div>
        <Navbar />
        <div className="page-wrapper p-t-100 p-b-100 font-robo">
            <div className="wrapper wrapper--w960">
                <div className="card card-2">
                    <div className="card-heading"></div>          
                    <div className="card-body">
                        <h2 className="title text-center">Register</h2>
                        
                        <form method="POST">
                            <div className="flx-box" >
                                <div className="input-group col-2 flx-item">
                                    <input className="input--style-2" type="text" placeholder="First Name" name="Fname" />
                                </div>
                                <div className="input-group col-2 flx-item"> 
                                    <input className="input--style-2" type="text" placeholder="Last Name" name="Lname" />
                                </div>                       
                            </div>
                            <div className="input-group">
                                <input className="input--style-2" type="text" placeholder="Organization Name" name="Oname" />
                            </div>
                            <div className="flx-box">
                                <div className="input-group col-2 flx-item">
                                        <input className="input--style-2" type="text" placeholder="Employee ID No" name="E_id" />
                                </div>
                                <div className="input-group col-2 flx-item">
                                        <input className="input--style-2" type="tel" placeholder="Mobile" name="mob_no" />
                                </div>
                            </div>
                            <div class="flx-box" >
                            
                                <div className="input-group col-2 flx-item">
                                    <input className="input--style-2" type="email" placeholder="Email" name="email" />
                                </div>   
                                
                                <div className="flx-item" >
                                    <span id="upld">Upload Id Card</span> 
                                    <input type="file" id="myFile" name="filename" accept="image/png,image/jpeg" title="" />
                                </div>
                            </div>
                            <div className="p-t-20 text-center">
                                <button className="btn btn--radius btn--green" type="submit">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
    </div>
    </div>
    )
}

export default Register;