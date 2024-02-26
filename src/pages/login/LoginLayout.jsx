import { PiSpotifyLogoFill } from "react-icons/pi";
import { NavLink, Outlet } from "react-router-dom";

function LoginLayout() {
  return (
    <div className=" bg-neutral-900 ">
      <NavLink to="/" className="flex w-full  items-center  ">
        <PiSpotifyLogoFill
          size={"3.8em"}
          color="white"
          style={{ margin: "0px 10px" }}
        />
        <h2 className="text-white text-[40px]  text-base font-bold">Spotify</h2>
      </NavLink>
      <Outlet />
    </div>
  );
}

export default LoginLayout;
