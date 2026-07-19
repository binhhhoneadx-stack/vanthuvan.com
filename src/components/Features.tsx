import { motion } from "framer-motion";
import { PiPaletteFill, PiLightbulbFilament, PiRocketLaunchFill } from "react-icons/pi";

const menu_features = [
  {
    id: 1,
    title: "Sáng tạo",
    desc: "Kết hợp nghệ thuật và công nghệ trong từng thiết kế.",
    IconBar: PiPaletteFill,
  },
  {
    id: 2,
    title: "Đổi mới",
    desc: "Luôn tìm kiếm ý tưởng mới và giải pháp mới.",
    IconBar: PiLightbulbFilament,
  },
  {
    id: 3,
    title: "Phát triển",
    desc: "Không ngừng học hỏi và phát triển bản thân mỗi ngày.",
    IconBar: PiRocketLaunchFill,
  },
];

const Features = () => {
  return (
    <section className="flex items-center justify-center py-15">
      <div className="w-[82%] flex items-center justify-center flex-col ">
        <motion.div initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-3xl font-bold">
            Thu trọn lăng kính <span className="text-[#7c5fd4]">nghệ thuật</span>, kiến tạo không gian{" "}
            <span className="text-[#7c5fd4]">kỹ thuật số</span>
          </h1>

          <div className="w-55 h-0.5 rounded-full bg-[#7c5fd4] m-auto mt-5" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center mt-10 gap-8"
        >
          {menu_features.map((item) => (
            <div key={item.id} className="flex items-center w-85 gap-5">
              <div className="bg-[#ede9fa] p-3 rounded-full">
                <item.IconBar className="text-[#7c5fd4]" size={30} />
              </div>

              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-black/45">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
