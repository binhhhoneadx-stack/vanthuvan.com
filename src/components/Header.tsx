import { useState } from "react";
import ic_vnu from "../assets/images/ic-vnu.png";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      id="__header_website"
      className="py-4 px-4 md:px-7 shadow-md shadow-[#f5effc] sticky top-0 z-[9999] bg-white"
    >
      <div className="container m-auto flex items-center justify-between">
        {/* Logo */}
        <div className="__logo_vnu flex items-center gap-2 text-lg md:text-xl font-bold">
          <img src={ic_vnu} alt="Image VNU-UEB" className="w-8 h-8" loading="lazy" />
          <h1 className="hidden sm:block">Đại học Kinh Tế - ĐHQGHN</h1>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>

        {/* Navigation */}
        <nav
          className={`${isOpen ? "flex" : "hidden"} md:flex absolute md:static top-full left-0 w-full md:w-auto bg-white flex-col md:flex-row items-center gap-2 p-5 md:p-0 shadow-lg md:shadow-none border-t border-gray-100 md:border-none`}
        >
          <Link to="/" className="text-base py-2 px-4 rounded-md hover:bg-[#efebfc] w-full text-center md:w-auto">
            Trang chủ
          </Link>

          {/* Dropdown 1 */}
          <div className="group relative w-full md:w-auto text-center">
            <div className="text-base cursor-pointer py-2 px-4 flex items-center justify-center">
              <span>Thông tin cá nhân</span>
              <FaAngleDown className="ml-2" size={16} />
            </div>
            <div className="hidden group-hover:flex md:absolute bg-white z-[999] p-4 flex-col w-full md:w-65 rounded-md drop-shadow-xl border border-gray-100 gap-3 md:left-1/2 md:-translate-x-1/2 top-10">
              <Link to="/profile" className="hover:bg-[#efebfc] py-2 px-4 rounded-md">
                Giới thiệu bản thân
              </Link>
              <Link to="/personal" className="hover:bg-[#efebfc] py-2 px-4 rounded-md">
                Mục tiêu và định hướng
              </Link>
              <Link to="/portfolio-goals" className="hover:bg-[#efebfc] py-2 px-4 rounded-md">
                Mục tiêu xây dựng profile
              </Link>
            </div>
          </div>

          {/* Dropdown 2 */}
          <div className="group relative w-full md:w-auto text-center">
            <div className="text-base cursor-pointer py-2 px-4 flex items-center justify-center">
              <span>Dự án</span>
              <FaAngleDown className="ml-2" size={16} />
            </div>
            <div className="hidden group-hover:flex md:absolute bg-white z-[999] p-4 flex-col w-full md:w-35 rounded-md drop-shadow-xl border border-gray-100 gap-3 md:left-1/2 md:-translate-x-1/2 top-10">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Link key={i} to={`/project/${i}`} className="hover:bg-[#efebfc] py-2 px-4 rounded-md">
                  Bài Tập {i}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/portfolio-conclusion" className="text-base py-2 px-4 w-full text-center md:w-auto">
            Tổng kết
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
