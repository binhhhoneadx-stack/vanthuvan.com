import bg from "../assets/images/background_3.png";
import { FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { MdOutlineMenuBook } from "react-icons/md";
import { motion } from "framer-motion";
import { PiTargetBold } from "react-icons/pi";
import { GiTrophyCup } from "react-icons/gi";
import { HiClipboardList } from "react-icons/hi";
import { menu_lesson } from "../assets/constants/lessons";
import { menu_tile } from "../assets/constants/menu_tile";

const menu_sidebar = [
  {
    id: 2,
    path: "muc_tieu_bai_tap",
    title: "Mục Tiêu Bài Tập",
  },
  {
    id: 1,
    path: "tom_tat_noi_dung",
    title: "Tóm tắt nội dung",
  },
  {
    id: 3,
    path: "qua_trinh_thuc_hien",
    title: "Quá trình thực hiện",
  },
  {
    id: 4,
    path: "ket_qua_dat_duoc",
    title: "Kết quả đạt được",
  },
];

const CardLesson = () => {
  const pathName = useParams().id;
  const keyName = pathName as keyof typeof menu_lesson;

  return (
    <div className="max-w-[100vw] min-h-screen px-4">
      {/* Header Section */}
      <div
        className="container mx-auto mb-10 mt-12 rounded-xl min-h-[30vh] flex items-center justify-center p-6 md:p-10"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full lg:w-[85%] flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-[50%]"
          >
            <div className="bg-transparent border-[#7c5fd4] inline-flex items-center border py-1 px-4 rounded-full drop-shadow-md">
              <FaStar color="yellow" />
              <span className="ml-2 font-semibold text-[#7c5fd4]">Bài tập {menu_tile[keyName].sub}</span>
            </div>

            <h1 className="text-2xl md:text-4xl font-bold mb-2 mt-6">{menu_tile[keyName].title}</h1>

            <Link
              to={menu_tile[keyName].path}
              target="_blank"
              className="inline-flex items-center border border-[#7c5fd4] py-2 rounded-full px-6 group hover:bg-[#7c5fd4] bg-transparent transition duration-300 mt-6"
            >
              <MdOutlineMenuBook size={18} className="text-[#7c5fd4] group-hover:text-white" />
              <span className="font-semibold ml-3 text-[#7c5fd4] group-hover:text-white">Xem File Tài Liệu PDF</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-2 rounded-xl bg-white drop-shadow-xl w-full md:w-auto"
          >
            <img
              src={menu_tile[keyName].imageUrl}
              alt="thumbnail"
              className="w-full md:w-[420px] h-auto object-cover rounded-md"
            />
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto flex flex-col lg:flex-row items-start mb-25 gap-8">
        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full lg:w-[22%] bg-white border border-black/5 rounded-md drop-shadow-md p-5"
        >
          <div className="flex items-center">
            <div className="bg-[#7c5fd4]/15 rounded-full p-2.5">
              <MdOutlineMenuBook size={18} color="#7c5fd4" />
            </div>
            <span className="uppercase ml-3 text-sm font-semibold text-[#7c5fd4]">Nội dung</span>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            {menu_sidebar.map((item) => (
              <a
                key={item.id}
                href={`#${item.path}`}
                className="py-2 px-4 hover:bg-[#7c5fd4]/15 rounded-md text-sm font-semibold text-gray-700 transition"
              >
                {item.title}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Content Area */}
        <div className="flex-1 w-full">
          {/* Mục Tiêu */}
          <motion.div
            id="muc_tieu_bai_tap"
            className="bg-white border border-black/5 rounded-md drop-shadow-md p-6 md:p-8"
          >
            <div className="flex items-center gap-2">
              <PiTargetBold size={30} color="#7c5fd4" />
              <span className="uppercase text-lg md:text-xl font-bold text-[#7c5fd4]">Mục tiêu bài học</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-8">
              {menu_lesson[keyName].muc_tieu.map((item, index) => (
                <div
                  key={index}
                  className="border border-[#7c5fd4] bg-[#7c5fd4]/15 rounded-xl p-4 flex items-center justify-center text-center font-semibold hover:scale-105 transition"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tóm tắt nội dung */}
          <motion.div
            id="tom_tat_noi_dung"
            className="bg-white border border-black/5 rounded-md drop-shadow-md p-6 md:p-8 mt-8"
          >
            <div className="flex items-center gap-2">
              <MdOutlineMenuBook size={30} color="#7c5fd4" />
              <span className="uppercase text-lg md:text-xl font-bold text-[#7c5fd4]">Tóm tắt nội dung</span>
            </div>
            <div className="grid gap-4 mt-8">
              {menu_lesson[keyName].tom_tat_noi_dung.map((item, index) => (
                <div key={index} className="border border-[#7c5fd4] bg-[#7c5fd4]/10 rounded-xl p-4 flex gap-4">
                  <div className="min-w-8 h-8 rounded-lg bg-[#7c5fd4] text-white flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="leading-7 text-gray-700 text-sm md:text-base">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quá trình thực hiện */}
          <motion.div
            id="qua_trinh_thuc_hien"
            className="bg-white border border-black/5 rounded-md drop-shadow-md p-6 md:p-8 mt-8"
          >
            <div className="flex items-center gap-2">
              <HiClipboardList size={30} color="#7c5fd4" />
              <span className="uppercase text-lg md:text-xl font-bold text-[#7c5fd4]">Quá trình thực hiện</span>
            </div>
            <div className="space-y-6 mt-8">
              {menu_lesson[keyName].qua_trinh_thuc_hien.map((step, index) => (
                <div key={index} className="border border-[#7c5fd4] bg-[#7c5fd4]/10 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="min-w-10 h-10 rounded-lg bg-[#7c5fd4] text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-base md:text-lg text-[#7c5fd4]">{step.title}</h3>
                      <p className="text-gray-600 mt-1 text-sm md:text-base">{step.description}</p>
                      <ul className="mt-4 space-y-2 list-disc ml-5">
                        {step.items.map((item, i) => (
                          <li key={i} className="text-gray-700 leading-7 text-sm md:text-base">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Kết quả đạt được */}
          <motion.div
            id="ket_qua_dat_duoc"
            className="bg-white border border-black/5 rounded-md drop-shadow-md p-6 md:p-8 mt-8"
          >
            <div className="flex items-center gap-2">
              <GiTrophyCup size={30} color="#7c5fd4" />
              <span className="uppercase text-lg md:text-xl font-bold text-[#7c5fd4]">Kết quả đạt được</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-8">
              {menu_lesson[keyName].ket_qua.map((item, index) => (
                <div
                  key={index}
                  className="border border-[#7c5fd4] bg-[#7c5fd4]/15 rounded-xl p-5 text-center font-semibold hover:scale-105 transition"
                >
                  <div className="w-8 h-8 rounded-full bg-[#7c5fd4] text-white flex items-center justify-center mx-auto mb-3 text-xs">
                    ✓
                  </div>
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CardLesson;
