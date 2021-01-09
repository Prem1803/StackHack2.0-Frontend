import {Link} from 'react-router-dom'

const Navbar = () =>{
     return (
        <div className="nav_header">
            <div className="nav_container">
                <div className="brand">
                    <Link to="/"><i class="fas fa-cookie-bite"></i></Link>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/login" className="nav_link" style={{ textDecoration: 'none' }}>Login</Link></li>
                        <li><Link to="/signup" className="nav_link" style={{ textDecoration: 'none' }}>Sign Up</Link></li>
                    </ul>
                </nav>
            </div>
        </div>        
     )
}
export default Navbar;