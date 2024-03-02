import { PiSpotifyLogoFill } from "react-icons/pi";
import { NavLink, Outlet, useLocation } from "react-router-dom";

function LoginLayout() {
  const location = useLocation();
  return (
    <div>
      <div className=" bg-neutral-900 p-4 gap-2 justify-between flex text-white">
        <NavLink to="/" className="flex   items-center  ">
          <PiSpotifyLogoFill
            size={"3.8em"}
            color="white"
            style={{ margin: "0px 10px" }}
          />
          <h2 className="text-white text-[40px]  text-base font-bold">
            Spotify
          </h2>
        </NavLink>
        {location.pathname === "/about" && (
          <div className="flex   justify-evenly p-4 gap-2 font-bold w-[50%]">
            <NavLink to="/about/pre" className="hover:text-green-600">
              Premium
            </NavLink>
            <NavLink to="/about/sup" className="hover:text-green-600">
              Support
            </NavLink>
            <NavLink to="/about/down " className="hover:text-green-600">
              Download
            </NavLink>
            |
            <NavLink to="signup" className="hover:text-green-600">
              Sign up
            </NavLink>
            <NavLink to="login" className="hover:text-green-600">
              Log in{" "}
            </NavLink>
          </div>
        )}
      </div>
      <Outlet />
    </div>
  );
}

export default LoginLayout;
