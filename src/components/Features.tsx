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
    <section className="flex items-center justify-center py-10 md:py-15 px-4">
      <div className="w-full max-w-6xl flex items-center justify-center flex-col">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-2xl md:text-3xl font-bold px-2">
            Thu trọn lăng kính <span className="text-[#7c5fd4]">nghệ thuật</span>, kiến tạo không gian{" "}
            <span className="text-[#7c5fd4]">kỹ thuật số</span>
          </h1>
          <div className="w-24 md:w-55 h-0.5 rounded-full bg-[#7c5fd4] mx-auto mt-5" />
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full"
        >
          {menu_features.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-xl transition duration-300"
            >
              <div className="bg-[#ede9fa] p-3 rounded-full flex-shrink-0">
                <item.IconBar className="text-[#7c5fd4]" size={28} />
              </div>

              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-black/50 text-sm md:text-base mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
