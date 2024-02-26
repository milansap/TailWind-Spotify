import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { MdCopyright } from "react-icons/md";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <div>
      <div className="px-2 pt-8 bg-neutral-700  overflow-auto  flex flex-col ">
        <div className="">
          <div className="flex  justify-between">
            <div className=" w-1/2 flex justify-between">
              <div className="flex flex-col">
                <h1 className="p-2 font-bold">Company</h1>
                <NavLink style={{ padding: "0.3rem" }}>About</NavLink>
                <NavLink style={{ padding: "0.3rem" }}>Jobs</NavLink>
                <NavLink style={{ padding: "0.3rem" }}>For the Record</NavLink>
              </div>
              <div className="flex flex-col">
                <h1 className="p-2 font-bold">Communities</h1>
                <NavLink style={{ padding: "0.3rem" }}>For Artists</NavLink>
                <NavLink style={{ padding: "0.3rem" }}>Developers</NavLink>
                <NavLink style={{ padding: "0.3rem" }}>Advertising</NavLink>
                <NavLink style={{ padding: "0.3rem" }}>Investors</NavLink>
                <NavLink style={{ padding: "0.3rem" }}>Vendors</NavLink>
              </div>
              <div className="flex flex-col">
                <h1 className="p-2 font-bold">Useful links</h1>
                <NavLink style={{ padding: "0.3rem" }}>Support</NavLink>
                <NavLink style={{ padding: "0.3rem" }}>Free Mobile App</NavLink>
              </div>
            </div>
            <div className="flex gap-5 justify-between">
              <BiLogoInstagram
                style={{ borderRadius: 100, backgroundColor: "#181818" }}
                size={"30px"}
                backgroundColor="white"
              />
              <BiLogoTwitter
                color="Whitesmoke "
                style={{ borderRadius: 100, backgroundColor: "#181818" }}
                size={"30px"}
              />
              <BiLogoFacebook
                color="Whitesmoke "
                style={{
                  borderRadius: 100,
                  backgroundColor: "#181818",
                }}
                size={"30px"}
              />
            </div>
          </div>
          <div className="p-6  border-black border-b-2"></div>
          <div className=" justify-start items-center py-6 flex">
            <MdCopyright />
            2024 spotify AB
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
