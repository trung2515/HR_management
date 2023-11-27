import { faBell, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import InputField from "../forms/input/InputField";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Header = () => {

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
                            <li>Language</li>
                            <li>Reports</li>
                            <li>Project</li>
                        </ul>
                    </div>
                    <div className="header-menu-icon">
                        <div className="header-menu-icon-item">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <div className="header-menu-icon-item">
                             <FontAwesomeIcon icon={faBell} />
                        </div>
                        <div className="header-menu-icon-item">
                        <FontAwesomeIcon icon={faUser} />
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
