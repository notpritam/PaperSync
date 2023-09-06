import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import { useDrawer, useModal, useUser } from "../../util/store";

function Header() {
  const user = useUser((state) => state.user);
  const imageUrl = user.imageUrl;
  const logOut = useUser((state) => state.logOut);

  const logoutUser = () => {
    logOut();
  };

  const setDrawer = useDrawer((state) => state.setDrawer);

  const openDrawer = (id) => {
    setDrawer(id);
  };
  return (
    <>
      <div className="bg-white z-[999] p-2 pl-4 pr-4 flex justify-between items-center shadow-md">
        <div className="flex items-center">
          <button
            onClick={() => openDrawer("sidebar")}
            className="h-[48px] w-[48px] rounded-full hover:bg-[#f0f3f5] flex items-center justify-center"
          >
            <MenuIcon />
          </button>
          <div className="h-[44px] w-[40px]">
            <img src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png"></img>
          </div>
          <span className="text-[1.25rem]">Docs</span>
        </div>

        <div className="flex p-2 pl-4 pr-4 bg-[#f0f3f5] rounded-[6px] gap-3 min-w-[40vw]">
          <button className="h-[24px] w-[24px] rounded-full hover:bg-[#f0f3f5] flex items-center justify-center">
            <SearchIcon />
          </button>
          <input
            className="bg-transparent border-0 font-light"
            placeholder="Search"
          ></input>
        </div>

        <div className="flex items-center gap-1">
          <button className="h-[48px] w-[48px] rounded-full hover:bg-[#f0f3f5] flex items-center justify-center">
            <AppsRoundedIcon />
          </button>

          <div
            onClick={logoutUser}
            title="Logout"
            className="h-[32px] w-[32px] rounded-full overflow-hidden hover:border-[4px] border-blue-400 transition-all duration-200 ease-in bg-red-600"
          >
            <img src={imageUrl}></img>
          </div>
        </div>
      </div>
      {/* <div className="min-w-[18vvw] w-[18vw] bg-red-500 fixed bottom-0 left-0 h-[90%]">
        hello
      </div> */}
    </>
  );
}

export default Header;
