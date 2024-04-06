import React, { useRef, useState } from "react";
import { styles } from "../../styles/styles";
import { Logo } from "../../assets/export";
import NavLink from "./NavLink";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { TbMenuDeep } from "react-icons/tb";
import LoginPopup from "./LoginPopup";
import SignUpPopup from "./SignUpPopup";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef();

  const toggleSidebar = (e) => {
    if (!sidebarRef.current.contains(e.target)) {
      setOpen(false);
    }
  };
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/popup");
  };
  return (
    <div
      className={`w-full h-20 ${styles.horizontalPadding} flex justify-between items-center py-2`}
    >
      <div>
        <Link to="/">
          <img src={Logo} alt="" className="w-[167px] h-[32px]" />
        </Link>
      </div>
      <div
        className="hidden md:flex items-center justify-end gap-12"
        id="navbar"
      >
        <NavLink path={"/"} title={"Home"} />
        <NavLink path={"/tours"} title={"Find Tours"} />
        <SignUpPopup />
        {/* <NavLink path={"/"} title={"Sign up"} /> */}
        {/* <Button
          title={"Login"}
          onclick={handleNavigate}
          classes={
            "tex-sm font-normal text-white h-[44px] w-[83px] rounded-lg bg-[#EB662B]"
          }
        /> */}
        <LoginPopup />
      </div>
      <div
        onClick={toggleSidebar}
        className={`w-screen h-screen fixed top-0 right-0 transition-all duration-300 flex justify-end items-start z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          ref={sidebarRef}
          className=" flex flex-col justify-start gap-3  items-start p-6 w-1/2 h-[calc(100vh)] shadow-md z-50 bg-white"
        >
          <NavLink path={"/"} title={"Home"} setOpen={setOpen} />
          <NavLink path={"/"} title={"Activities"} setOpen={setOpen} />
          <NavLink path={"/"} title={"Sign up"} setOpen={setOpen} />
        </div>
      </div>
      <button onClick={() => setOpen(true)} className="md:hidden">
        <TbMenuDeep className="text-2xl md:hidden" />
      </button>
    </div>
  );
};

export default Navbar;
