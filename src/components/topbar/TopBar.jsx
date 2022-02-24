import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css"

function TopBar() {
    const { user, dispatch } = useContext(Context);

    const PF = "http://localhost:5000/images/";

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    }
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="fab topIcon fa-facebook-square"></i>
                <i className="fab topIcon fa-twitter-square"></i>
                <i className="fab topIcon fa-pinterest-square"></i>
                <i className="fab topIcon fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to='/' className="link">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link to='/about' className="link">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link to='/contact' className="link">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link to='/write' className="link">WRITE</Link>

                    </li>
                    <li className="topListItem"
                        onClick={handleLogout}
                    >
                        {user && "LOGOUT"}
                    </li>

                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <Link to="/settings">
                            <img className="topImg" src={PF + user.profilePic} alt="" />
                        </Link>
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link to='/login' className="link">LOGIN</Link>

                            </li>
                            <li className="topListItem">
                                <Link to='/register' className="link">REGISTER</Link>
                            </li>

                        </ul>

                    )
                }

                <i className="searchIcon fas fa-search"></i>
            </div>

        </div >
    );
}

export default TopBar;