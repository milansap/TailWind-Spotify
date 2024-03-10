import { PiSpotifyLogoFill } from "react-icons/pi";
import { NavLink, Outlet } from "react-router-dom";

function LoginLayout() {
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
      </div>
      <Outlet />
    </div>
  );
}

export default LoginLayout;
