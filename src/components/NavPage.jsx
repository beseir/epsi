import {Link, Outlet} from 'react-router-dom';
import "../styles/Nav.css"
export const NavPage = () => {
    return (
        <>

            <div className={"navMenu"}>

                <Outlet />
                <Link to="/edit"><img className={"icon"} src={"images/edit.svg"} alt={"edit"}/></Link>
                <Link to="/home"><img className={"icon"} src={"images/home.svg"} alt={"home"}/></Link>
                <Link to="/market"><img className={"icon"} src={"images/market.svg"} alt={"edit"}/></Link>

            </div>
        </>
    )
}