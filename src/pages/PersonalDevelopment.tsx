import bg from "../assets/images/background_2.png";
import { motion } from "framer-motion";
import personal from "../assets/images/muc_tieu_ca_nhan.png";
import dinh_huong from "../assets/images/dinh_huong_ca_nhan.png";
import { useEffect } from "react";

const PersonalDevelopment = () => {
  useEffect(() => {
    document.title = `Vũ Thu Vân - Mục tiêu và định hướng cá nhân`;
  }, []);

  return (
    <div>
      {/* ======================= MỤC TIÊU HỌC TẬP ======================= */}
      <section
        className="relative flex min-h-screen items-center justify-center overflow-hidden py-12 lg:py-20"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
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

        <div className="relative z-10 w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">
              Mục Tiêu <span className="text-[#7c5fd4]">Học Tập</span>
            </h1>

            <div className="mt-5 h-1 w-24 sm:w-32 lg:w-44 rounded-full bg-[#7c5fd4]" />
          </motion.div>

          <div className="mt-10 lg:mt-16 flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-[40%]"
            >
              <div className="bg-white rounded-2xl p-3 shadow-xl">
                <img src={personal} alt="" className="w-full rounded-xl object-cover aspect-[4/3]" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="flex-1 bg-white rounded-2xl p-6 sm:p-8 shadow-xl"
            >
              <div className="space-y-6 text-justify leading-8 text-sm sm:text-base lg:text-lg text-gray-700">
                <p>
                  Không ngừng học tập, nâng cao kiến thức chuyên môn và rèn luyện các kỹ năng cần thiết để phát triển
                  bản thân một cách toàn diện. Tôi luôn chủ động tìm hiểu những kiến thức mới, đặc biệt trong lĩnh vực
                  quản trị kinh doanh, công nghệ số và trí tuệ nhân tạo, nhằm mở rộng tư duy và nâng cao khả năng thích
                  ứng với sự thay đổi của môi trường học tập cũng như làm việc.
                </p>

                <p>
                  Bên cạnh việc trau dồi kiến thức chuyên môn, tôi chú trọng phát triển các kỹ năng mềm như giao tiếp,
                  làm việc nhóm, tư duy phản biện, quản lý thời gian và giải quyết vấn đề. Tôi tin rằng sự kết hợp giữa
                  nền tảng kiến thức vững chắc, tinh thần học hỏi không ngừng và khả năng ứng dụng công nghệ sẽ giúp tôi
                  tự tin đối mặt với những thử thách trong tương lai.
                </p>

                <p>
                  Trong thời gian tới, tôi định hướng xây dựng cho mình một lộ trình phát triển rõ ràng, không ngừng
                  hoàn thiện năng lực bản thân, tích lũy kinh nghiệm thực tiễn và duy trì tinh thần học tập suốt đời.
                  Mục tiêu của tôi là trở thành một người có trách nhiệm, có năng lực chuyên môn và sẵn sàng đóng góp
                  những giá trị tích cực cho tổ chức và cộng đồng.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================= ĐỊNH HƯỚNG CÁ NHÂN ======================= */}

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-12 lg:py-20">
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

        <div className="relative z-10 w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">
              Định Hướng <span className="text-[#7c5fd4]">Cá Nhân</span>
            </h1>

            <div className="mt-5 h-1 w-24 sm:w-32 lg:w-44 rounded-full bg-[#7c5fd4]" />
          </motion.div>

          <div className="mt-10 lg:mt-16 flex flex-col-reverse lg:flex-row gap-8 lg:gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="flex-1 bg-white rounded-2xl p-6 sm:p-8 shadow-xl"
            >
              <div className="space-y-6 text-justify leading-8 text-sm sm:text-base lg:text-lg text-gray-700">
                <p>
                  Định hướng phát triển cá nhân của tôi là không ngừng hoàn thiện bản thân về kiến thức chuyên môn, kỹ
                  năng nghề nghiệp và khả năng ứng dụng công nghệ trong học tập cũng như công việc. Tôi luôn chủ động
                  học hỏi, cập nhật những xu hướng mới, đặc biệt trong lĩnh vực quản trị kinh doanh, chuyển đổi số và
                  trí tuệ nhân tạo.
                </p>

                <p>
                  Bên cạnh việc phát triển kiến thức, tôi chú trọng rèn luyện các kỹ năng mềm như giao tiếp, làm việc
                  nhóm, tư duy phản biện, quản lý thời gian và giải quyết vấn đề. Đồng thời, tôi luôn đề cao tinh thần
                  trách nhiệm, tính kỷ luật và thái độ cầu tiến trong mọi hoạt động.
                </p>

                <p>
                  Trong tương lai, tôi hướng đến việc tích lũy nhiều kinh nghiệm thực tiễn, mở rộng hiểu biết thông qua
                  các dự án và hoạt động học tập. Tôi mong muốn xây dựng một nền tảng vững chắc về chuyên môn, phát
                  triển tư duy đổi mới và khả năng thích ứng với sự thay đổi của công nghệ để từng bước trở thành một
                  nhà quản trị có năng lực.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-[40%]"
            >
              <div className="bg-white rounded-2xl p-3 shadow-xl">
                <img src={dinh_huong} alt="" className="w-full rounded-xl object-cover aspect-[4/3]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalDevelopment;
