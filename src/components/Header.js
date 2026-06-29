import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [loginButtonName, setLoginButtonName] = useState("Login");
    // no dependency array, useEffect runs after every render
    // if dependency array is empty, useEffect runs only once after the first render (componentDidMount)
    useEffect(() => {
        console.log('useEffect called');
    }, []);
    const onlineStatus = useOnlineStatus();
    return (
        <div className='flex justify-between bg-orange-100 shadow-lg sm:bg-orange-100 items-center'>
            <div className='flex items-center gap-2.5 w-25 h-16'>
                <img src={LOGO_URL} alt="logo" />
            </div>
            <div>
                <ul className="flex gap-2 flex-row items-center text-sm">
                    <li className="px-2">Online Status: {onlineStatus ? "✅" : "❌"}</li>
                    <li className="px-2"><Link to="/">Home</Link></li>
                    <li className="px-2"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-2"><Link to="/about">About Us</Link></li>
                    <li className="px-2"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-2">Cart</li>
                    <li className="px-2"><button className="login-btn" onClick={() => {
                        let newBtnName = loginButtonName === "Login" ? "Logout" : "Login";
                        setLoginButtonName(newBtnName);
                         }}>
                        {loginButtonName}
                    </button></li>
                </ul>
            </div>
        </div>
    );
};
export default Header;