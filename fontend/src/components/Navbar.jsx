// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
//import { LiaSignOutAltSolid } from "react-icons/lia";
import { PiSignOutFill } from "react-icons/pi";
//import { faSignOut } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import SidebarIcon from "../assets/icons/sidebar.png";
import ProfileImage from "../assets/Avatar/Profile.png";
import { logOut } from "../redux/actions/userAction";

const Navbar = ({ setShowSidebar, showSidebar }) => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.user);

  return (
    <>
      {isAuthenticated && (
        <div className="bg-emerald-600 flex justify-between items-center py-3 px-3 sm:px-12 shadow-input fixed w-full z-50">
          <img
            className="h-7 sm:h-7 md:h-9 cursor-pointer"
            src={SidebarIcon}
            onClick={() => setShowSidebar(!showSidebar)}
          />
          <div className="flex items-center relative">
            <div className="flex items-center h-full cursor-pointer">
              {user.avatar ? (
                <img className=" mr-2 h-10 w-10 rounded-full "  src={user.avatar.url} />
              ) : (
                <img className=" mr-2 h-10 "  src={ProfileImage} />
              )}
              {/* <img className=" mr-2 h-8 sm:h-8 lg:h-10 " src={ProfileImage} /> */}

              <p className="font-poppins text-white text-xs sm:text-md lg:text-base">
                {user.name && user.name ? user.name : `${user.role} Name`}
              </p>
            </div>
            <button
              className="text-white text-2xl  ml-4  font-poppins font-light border-border1  rounded-md py-1 px-3 lg:px-6 "
              onClick={() => dispatch(logOut())}
            >
              <PiSignOutFill />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
