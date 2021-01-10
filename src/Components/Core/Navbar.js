import {Link} from 'react-router-dom'

const Navbar = () =>{
     return (
        <div className="nav_header">
            <div className="nav_container">
                <div className="brand">
                <Link to="/"className="nav_link_" style={{
                    fontFamily: "Lobster, cursive", 
                    fontSize: "3em ", 
                    textDecoration: 'none'
                }}><span style={{}}>C</span>afe++</Link>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/login" className="nav_link" style={{ textDecoration: 'none' }}>Login</Link></li>
                        <li><Link to="/register" className="nav_link" style={{ textDecoration: 'none' }}>Register</Link></li>
                    </ul>
                </nav>
            </div>
        </div>        
     )
}
export default Navbar;