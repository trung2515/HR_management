import { faBell, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import InputField from "../forms/input/InputField";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Card} from "primereact/card";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {logout} from "../../redux/features/authSlice";


const Header = () => {
    const [isOpenDropdown, setisOpenDropdown] = useState(false)
    const dispatch = useDispatch();
    const handleSignOut = () => {
        localStorage.clear()
        dispatch(logout());
    }
    return (
        <>
            <div className="header-container">
                <div className="header-title">
                    <span className="title">HR Dashboard</span>
                    <div className="header-search">
                        <InputField
                          className='font-size'
                          placeholder="Search..."
                        />
                    </div>
                </div>
                <div className="header-menu">
                    <div className="header-menu-config">
                        <ul>
                            <li className="pointer">Language</li>
                            <li className="pointer">Reports</li>
                            <li className="pointer">Project</li>
                        </ul>
                    </div>
                    <div className="header-menu-icon">
                        <div className="header-menu-icon-item pointer">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <div className="header-menu-icon-item pointer">
                             <FontAwesomeIcon icon={faBell} />
                        </div>
                        <div className="header-menu-icon-item pointer user">
                            <FontAwesomeIcon icon={faUser} onClick={ () => setisOpenDropdown(!isOpenDropdown)} />
                           { isOpenDropdown && <div className="dropdown z-999">
                                <Card>
                                    <div className="dropdown-content pt-2 pb-2">
                                        <div className="item pointer ml-2 mr-2 pt-2 pb-2">
                                            <i className="pi pi-user mr-2 pt-2 pb-2"></i>
                                            <span>Profile</span>
                                        </div>
                                        <div className="item pointer ml-2 mr-2 pt-2 pb-2">
                                            <i className="pi pi-cog mr-2 pt-2 pb-2"></i>
                                            <span>Settings</span>
                                        </div>
                                        <div className="item pointer ml-2 mr-2 pt-2 pb-2">
                                            <i className="pi pi-envelope mr-2 pt-2 pb-2"></i>
                                            <span>Inbox</span>
                                        </div>
                                        <div className="item pointer ml-2 mr-2 pt-2 pb-2">
                                            <i className="pi pi-check-square mr-2 pt-2 pb-2"></i>
                                            <span>Role</span>
                                        </div>
                                       <div className="dropdown-divider"></div>
                                        <div className="item pointer ml-2 mr-2 pt-2 pb-2">
                                            <i className="pi pi-question-circle mr-2 pt-2 pb-2"></i>
                                            <span>Need help</span>
                                        </div>
                                        <div className="item pointer ml-2 mr-2 pt-2 pb-2" onClick={() => handleSignOut()}>
                                            <i className="pi pi-sign-out mr-2 pt-2 pb-2"></i>
                                            <span>Sign out</span>
                                        </div>
                                      
                                    </div>
                                </Card>
                            </div>}
                        </div>
                    </div>
                    <div className="header-menu-notification">
                </div>

                </div>
            </div>
        </>
    );
};

export default Header;
