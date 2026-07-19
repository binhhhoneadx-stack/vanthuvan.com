import background from "../assets/images/background.png";
import ic_ueb__card from "../assets/images/ic_ueb-card.png";
import { FaUser, FaRegFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="w-full min-h-[60vh] py-12 md:py-0 relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right,#7C3AED 1px,transparent 1px), linear-gradient(to bottom,#7C3AED 1px,transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full text-center md:text-left"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-2 shadow-lg backdrop-blur-md mx-auto md:mx-0">
            <FaRegFileAlt size={16} className="text-violet-600" />
            <span className="font-semibold text-violet-700 text-sm md:text-base">Bài Tập Dự Án</span>
          </div>

          <h1 className="leading-tight font-bold">
            <span className="block text-3xl md:text-5xl text-slate-900">Cá Nhân</span>
            <span className="text-[#7c5fd4] text-4xl md:text-6xl lg:text-7xl">Digital Portfolio</span>
          </h1>

          <p className="mt-6 max-w-xl text-sm md:text-base leading-7 text-slate-600 mx-auto md:mx-0">
            Sinh viên Đại học Quốc Gia Hà Nội – Trường Đại học Kinh Tế.
            <br />
            Đam mê sáng tạo, thiết kế và ứng dụng công nghệ để mang đến những trải nghiệm trực quan ấn tượng.
          </p>

          <Link
            to="/profile"
            className="inline-flex mt-8 items-center gap-3 rounded-full border-2 border-violet-600 bg-white/70 px-8 py-3 md:px-9 md:py-4 font-semibold text-violet-700 backdrop-blur-md transition hover:bg-violet-600 hover:text-white"
          >
            <FaUser size={18} />
            Tìm hiểu thêm về tôi
          </Link>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-[45%] lg:w-[40%] p-3 md:p-5 rounded-2xl bg-white drop-shadow-xl"
        >
          <img src={ic_ueb__card} alt="Profile Card" loading="lazy" className="w-full h-auto rounded-xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
