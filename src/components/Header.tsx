import ic_vnu from "../assets/images/ic-vnu.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa6";

const Header = () => {
  return (
    <header id="__header_website" className="py-4 px-7 shadow-md shadow-[#f5effc] sticky top-0 z-9999 bg-white">
      <div className="container m-auto flex items-center justify-between">
        <div className="__logo_vnu flex items-center justify-center gap-2 text-xl font-bold">
          <img src={ic_vnu} alt="Image VNU-UEB" className="w-8 h-8" loading="lazy" />
          <h1>Đại học Kinh Tế - Đại Học Quốc Gia Hà Nội</h1>
        </div>

        <nav className="flex items-center gap-2.5">
          <Link to="/" className="text-base py-2 px-4 rounded-md hover:bg-[#efebfc]">
            Trang chủ
          </Link>

          <div className="group relative">
            <div className="text-base cursor-pointer py-2 px-4 flex items-center">
              <span>Thông tin cá nhân</span>
              <FaAngleDown className="ml-2 mt-0.5" size={16} />
            </div>

            <motion.div className="hidden group-hover:inline-flex absolute bg-white z-999 p-4  flex-col w-65 rounded-md drop-shadow-xl border border-gray-100 gap-3 left-1/2 -translate-x-1/2 top-10 after:absolute after:left-0 after:right-0 after:h-4 after:-top-4">
              <Link
                to="/profile"
                className={`text-base hover:bg-[#efebfc] py-2 px-4 rounded-md transition duration-150`}
              >
                Giới thiệu bản thân
              </Link>
              <Link
                to="/personal"
                className={`text-base hover:bg-[#efebfc] py-2 px-4 rounded-md transition duration-150`}
              >
                Mục tiêu và định hướng
              </Link>
              <Link
                to="/portfolio-goals"
                className={`text-base hover:bg-[#efebfc] py-2 px-4 rounded-md transition duration-150`}
              >
                Mục tiêu xây dựng profile
              </Link>
            </motion.div>
          </div>

          <div className="group relative">
            <div className="text-base cursor-pointer py-2 px-4 flex items-center">
              <span>Dự án</span>
              <FaAngleDown className="ml-2 mt-0.5" size={16} />
            </div>

            <motion.div className="hidden group-hover:inline-flex absolute bg-white z-999 p-4  flex-col w-35 rounded-md drop-shadow-xl border border-gray-100 gap-3 left-1/2 -translate-x-1/2 top-10 after:absolute after:left-0 after:right-0 after:h-4 after:-top-4">
              <Link
                to="/project/1"
                className={`text-base hover:bg-[#efebfc] py-2 px-4 rounded-md transition duration-150`}
              >
                Bài Tập 1
              </Link>
              <Link
                to="/project/2"
                className={`text-base hover:bg-[#efebfc] py-2 px-4 rounded-md transition duration-150`}
              >
                Bài Tập 2
              </Link>
              <Link
                to="/project/3"
                className={`text-base hover:bg-[#efebfc] py-2 px-4 rounded-md transition duration-150`}
              >
                Bài Tập 3
              </Link>
              <Link
                to="/project/4"
                className={`text-base hover:bg-[#efebfc] py-2 px-4 rounded-md transition duration-150`}
              >
                Bài Tập 4
              </Link>
              <Link
                to="/project/5"
                className={`text-base hover:bg-[#efebfc] py-2 px-4 rounded-md transition duration-150`}
              >
                Bài Tập 5
              </Link>
              <Link
                to="/project/6"
                className={`text-base hover:bg-[#efebfc] py-2 px-4 rounded-md transition duration-150`}
              >
                Bài Tập 6
              </Link>
            </motion.div>
          </div>

          <Link to={"/portfolio-conclusion"} className="text-base cursor-pointer py-2 px-4">
            Tổng kết
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
