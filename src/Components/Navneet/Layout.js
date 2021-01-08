import Slider from './Slider'
const Layout = ({title, description, className, children}) =>{
    return (
        <div>
            <Slider/>
            <div className={className}>{children}</div>
        </div>
    )
}

export default Layout;