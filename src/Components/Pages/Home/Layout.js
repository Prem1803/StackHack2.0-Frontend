import Slider from './Slider'
const Layout = ({title, description, className, children}) =>{
    return (
        <div className="container" style={{borderRadius: "5px"}}>
            <Slider/>
            <div className={className}>{children}</div>
        </div>
    )
}

export default Layout;