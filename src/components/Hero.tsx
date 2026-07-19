import background from "../assets/images/background.png";
import ic_ueb__card from "../assets/images/ic_ueb-card.png";
import { FaUser, FaRegFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="w-full h-[60vh] relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
          linear-gradient(to right,#7C3AED 1px,transparent 1px),
          linear-gradient(to bottom,#7C3AED 1px,transparent 1px)
        `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="w-[72%] flex items-center justify-between px-8">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-2 shadow-lg backdrop-blur-md">
            <FaRegFileAlt size={18} className="text-violet-600" />
            <span className="font-semibold text-violet-700">Bài Tập Dự Án</span>
          </div>

          <h1 className="leading- font-bold">
            <span className="block text-5xl text-slate-900">Cá Nhân</span>

            <span className="text-[#7c5fd4] text-7xl leading-20">
              Digital Portfolio
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-7 text-slate-600">
            Sinh viên Đại học Quốc Gia Hà Nội – Trường Đại học Kinh Tế.
            <br />
            Đam mê sáng tạo, thiết kế và ứng dụng công nghệ để mang đến những trải nghiệm trực quan ấn tượng.
          </p>

          {/* Buttons */}
          <Link
            to="/profile"
            className="inline-flex mt-8 items-center gap-3 rounded-full border-2 border-violet-600 bg-white/70 px-9 py-4 font-semibold text-violet-700 backdrop-blur-md transition hover:bg-violet-600 hover:text-white"
          >
            <FaUser size={20} />
            Tìm hiểu thêm về tôi
          </Link>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="w-[45%] p-5 rounded-2xl bg-white drop-shadow-xl drop-shadow-black/30"
        >
          <img src={ic_ueb__card} alt="" loading="lazy" className="w-full h-full rounded-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
