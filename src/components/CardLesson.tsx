import bg from "../assets/images/background_3.png";
import { FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { MdOutlineMenuBook } from "react-icons/md";
import lesson from "../assets/images/lesson_1.png";
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
    <div className="max-w-screen min-h-screen ">
      <div
        className="container mx-auto mb-10 mt-12 rounded-xl h-[35vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="w-[72%] flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-[50%]"
          >
            <div className="bg-transparent border-[#7c5fd4] inline-flex items-center border py-1 px-4 rounded-full drop-shadow-md drop-shadow-[#7c5fd4]">
              <FaStar color="yellow" />
              <span className="ml-2 font-semibold text-[#7c5fd4]">Bài tập {menu_tile[keyName].sub}</span>
            </div>

            <h1 className="text-3xl font-bold mb-2 mt-8">{menu_tile[keyName].title}</h1>

            <Link
              to={menu_tile[keyName].path}
              className="inline-flex items-center border border-[#7c5fd4] py-1.5 rounded-full px-6 group hover:bg-[#7c5fd4] bg-transparent transition duration-300 mt-8"
            >
              <MdOutlineMenuBook size={18} className="text-[#7c5fd4] group-hover:text-white" />
              <span className="font-semibold ml-3 mt-0.5 text-[#7c5fd4] group-hover:text-white">
                Xem File Tài Liệu PDF
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-2 rounded-xl bg-white drop-shadow-xl drop-shadow-[#7c5fd4]"
          >
            <img src={lesson} alt="" className="w-105 h-55 object-center rounded-md" />
          </motion.div>
        </div>
      </div>

      <div className="container m-auto flex items-start mb-25">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-[22%] bg-white border border-black/5 rounded-md min-h-25 drop-shadow-md drop-shadow-black/10 p-5"
        >
          <div className="flex items-center">
            <div className="bg-[#7c5fd4]/15 rounded-full p-2.5">
              <MdOutlineMenuBook size={18} color="#7c5fd4" />
            </div>
            <span className="uppercase ml-3 text-base font-semibold text-[#7c5fd4]">Nội dung bài học</span>
          </div>

          <div className="flex flex-col gap-5 mt-5">
            {menu_sidebar.map((item) => (
              <a
                key={item.id}
                href={`#${item.path}`}
                className="py-2 px-4 hover:bg-[#7c5fd4]/15 rounded-md text-base font-semibold"
              >
                {item.title}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right */}
        <div className="flex-1 ml-8">
          {/* Mục Tiêu */}
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            id="muc_tieu_bai_tap"
            className="bg-white border border-black/5 rounded-md drop-shadow-md drop-shadow-black/10 p-8"
          >
            <div className="flex items-center gap-2">
              <PiTargetBold size={30} color="#7c5fd4" />
              <span className="uppercase text-xl font-bold text-[#7c5fd4]">Mục tiêu bài học</span>
            </div>

            <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
              {menu_lesson[keyName].muc_tieu.map((item, index) => (
                <div
                  key={index}
                  className="border border-[#7c5fd4] bg-[#7c5fd4]/15 rounded-xl p-6 flex items-center justify-center text-center font-semibold hover:scale-105 transition"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tóm tắt nội dung */}
          <motion.div
            id="tom_tat_noi_dung"
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white border border-black/5 rounded-md drop-shadow-md drop-shadow-black/10 p-8 mt-8"
          >
            <div className="flex items-center gap-2">
              <MdOutlineMenuBook size={30} color="#7c5fd4" />
              <span className="uppercase text-xl font-bold text-[#7c5fd4]">Tóm tắt nội dung</span>
            </div>

            <div className="grid gap-5 mt-8">
              {menu_lesson[keyName].tom_tat_noi_dung.map((item, index) => (
                <div
                  key={index}
                  className="border border-[#7c5fd4] bg-[#7c5fd4]/10 rounded-xl p-5 flex gap-4 hover:scale-[1.02] transition"
                >
                  <div className="min-w-9 h-9 rounded-lg bg-[#7c5fd4] text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>

                  <p className="leading-7 text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quá trình thực hiện */}
          <motion.div
            id="qua_trinh_thuc_hien"
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white border border-black/5 rounded-md drop-shadow-md drop-shadow-black/10 p-8 mt-8"
          >
            <div className="flex items-center gap-2">
              <HiClipboardList size={30} color="#7c5fd4" />
              <span className="uppercase text-xl font-bold text-[#7c5fd4]">Quá trình thực hiện</span>
            </div>

            <div className="space-y-6 mt-8">
              {menu_lesson[keyName].qua_trinh_thuc_hien.map((step, index) => (
                <div key={index} className="border border-[#7c5fd4] bg-[#7c5fd4]/10 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#7c5fd4] text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>

                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-[#7c5fd4]">{step.title}</h3>

                      <p className="text-gray-600 mt-1">{step.description}</p>

                      <ul className="mt-4 space-y-2 list-disc ml-5">
                        {step.items.map((item, i) => (
                          <li key={i} className="text-gray-700 leading-7">
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
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white border border-black/5 rounded-md drop-shadow-md drop-shadow-black/10 p-8 mt-8"
          >
            <div className="flex items-center gap-2">
              <GiTrophyCup size={30} color="#7c5fd4" />
              <span className="uppercase text-xl font-bold text-[#7c5fd4]">Kết quả đạt được</span>
            </div>

            <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
              {menu_lesson[keyName].ket_qua.map((item, index) => (
                <div
                  key={index}
                  className="border border-[#7c5fd4] bg-[#7c5fd4]/15 rounded-xl p-6 text-center font-semibold hover:scale-105 transition"
                >
                  <div className="w-10 h-10 rounded-full bg-[#7c5fd4] text-white flex items-center justify-center mx-auto mb-4">
                    ✓
                  </div>

                  {item}
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
