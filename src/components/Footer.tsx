import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import ic_logo from "../assets/images/ic-vnu.png";

const Footer = () => {
  return (
    <footer className="bg-[#efebfc] py-4 px-7">
      <div className="w-[82%] py-7 flex items-center mx-auto justify-between gap-25">
        <div className="flex items-center gap-3">
          <img src={ic_logo} loading="lazy" alt="" className="w-12 h-12" />
          <div>
            <h3 className="text-lg">Đại học Kinh Tế - Đại Học Quốc Gia Hà Nội</h3>
            <span className="text-black/65 leading-7">Chuyên ngành Quản Trị Kinh Doanh</span>
          </div>
        </div>

        <span className="text-black/30">© 2026 Vũ Thu Vân | Digital Portfolio.</span>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-full">
              <FaFacebookF size={20} color="blue" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-full">
              <MdOutlineEmail size={20} color="black" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
