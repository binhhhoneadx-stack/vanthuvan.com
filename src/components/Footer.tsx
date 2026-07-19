import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import ic_logo from "../assets/images/ic-vnu.png";

const Footer = () => {
  return (
    <footer className="bg-[#efebfc] py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Left: Logo & Info */}
        <div className="flex flex-col md:flex-row items-center gap-3">
          <img src={ic_logo} loading="lazy" alt="Logo" className="w-12 h-12" />
          <div>
            <h3 className="text-base md:text-lg font-semibold">Đại học Kinh Tế - Đại Học Quốc Gia Hà Nội</h3>
            <span className="text-black/65 text-sm md:text-base">Chuyên ngành Quản Trị Kinh Doanh</span>
          </div>
        </div>

        {/* Center: Copyright */}
        <span className="text-black/40 text-sm order-3 md:order-2">© 2026 Vũ Thu Vân | Digital Portfolio.</span>

        {/* Right: Social Links */}
        <div className="flex items-center gap-4 order-2 md:order-3">
          <div className="bg-white p-2 rounded-full cursor-pointer hover:scale-110 transition">
            <FaFacebookF size={20} color="blue" />
          </div>
          <div className="bg-white p-2 rounded-full cursor-pointer hover:scale-110 transition">
            <MdOutlineEmail size={20} color="black" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
