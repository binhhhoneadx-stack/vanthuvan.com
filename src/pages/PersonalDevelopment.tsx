import bg from "../assets/images/background_2.png";
import { motion } from "framer-motion";
import personal from "../assets/images/muc_tieu_ca_nhan.png";
import dinh_huong from "../assets/images/dinh_huong_ca_nhan.png";

const PersonalDevelopment = () => {
  return (
    <div>
      <div
        className="w-full h-[85vh] relative flex items-center justify-center"
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
        <div className="w-[72%]">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center flex-col"
          >
            <h1 className="text-5xl font-bold">
              Mục Tiêu <span className="text-[#7c5fd4]">Học Tập</span>
            </h1>

            <div className="w-45 h-0.5 rounded-full bg-[#7c5fd4] mt-5"></div>
          </motion.div>

          <motion.div className="w-[82%] m-auto mt-15 flex items-start">
            <motion.div
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="bg-white p-3 rounded-xl inline-flex drop-shadow-md drop-shadow-black/25"
            >
              <img src={personal} alt="" className="w-105 h-75 rounded-md" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="bg-white p-5 rounded-xl inline-flex drop-shadow-md drop-shadow-black/25 ml-8 flex-1 leading-7 text-base"
            >
              Không ngừng học tập, nâng cao kiến thức chuyên môn và rèn luyện các kỹ năng cần thiết để phát triển bản
              thân một cách toàn diện. Tôi luôn chủ động tìm hiểu những kiến thức mới, đặc biệt trong lĩnh vực quản trị
              kinh doanh, công nghệ số và trí tuệ nhân tạo, nhằm mở rộng tư duy và nâng cao khả năng thích ứng với sự
              thay đổi của môi trường học tập cũng như làm việc.
              <br />
              Bên cạnh đó, Portfolio còn minh chứng cho việc tôi biết vận dụng công nghệ và AI vào các hoạt động học tập
              Bên cạnh việc trau dồi kiến thức chuyên môn, tôi chú trọng phát triển các kỹ năng mềm như giao tiếp, làm
              việc nhóm, tư duy phản biện, quản lý thời gian và giải quyết vấn đề. Tôi tin rằng sự kết hợp giữa nền tảng
              kiến thức vững chắc, tinh thần học hỏi không ngừng và khả năng ứng dụng công nghệ sẽ giúp tôi tự tin đối
              mặt với những thử thách trong tương lai.
              <br />
              Trong thời gian tới, tôi định hướng xây dựng cho mình một lộ trình phát triển rõ ràng, không ngừng hoàn
              thiện năng lực bản thân, tích lũy kinh nghiệm thực tiễn và duy trì tinh thần học tập suốt đời. Mục tiêu
              của tôi là trở thành một người có trách nhiệm, có năng lực chuyên môn và sẵn sàng đóng góp những giá trị
              tích cực cho tổ chức và cộng đồng.
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="w-full h-[85vh] relative flex items-center justify-center">
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
        <div className="w-[72%]">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center flex-col"
          >
            <h1 className="text-5xl font-bold">
              Định Hướng <span className="text-[#7c5fd4]">Cá Nhân</span>
            </h1>

            <div className="w-45 h-0.5 rounded-full bg-[#7c5fd4] mt-5"></div>
          </motion.div>

          <motion.div className="w-[82%] m-auto mt-15 flex items-start">
            <motion.div
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="bg-white p-5 rounded-xl inline-flex drop-shadow-md drop-shadow-black/25 mr-8 flex-1 leading-7 text-base"
            >
              Định hướng phát triển cá nhân của tôi là không ngừng hoàn thiện bản thân về kiến thức chuyên môn, kỹ năng
              nghề nghiệp và khả năng ứng dụng công nghệ trong học tập cũng như công việc. Tôi luôn chủ động học hỏi,
              cập nhật những xu hướng mới, đặc biệt trong lĩnh vực quản trị kinh doanh, chuyển đổi số và trí tuệ nhân
              tạo, nhằm nâng cao năng lực và thích ứng với môi trường làm việc hiện đại.
              <br />
              Bên cạnh việc phát triển kiến thức, tôi chú trọng rèn luyện các kỹ năng mềm như giao tiếp, làm việc nhóm,
              tư duy phản biện, quản lý thời gian và giải quyết vấn đề. Đồng thời, tôi luôn đề cao tinh thần trách
              nhiệm, tính kỷ luật và thái độ cầu tiến trong mọi hoạt động, xem đó là nền tảng để không ngừng hoàn thiện
              bản thân và đạt được những mục tiêu đã đề ra.
              <br />
              Trong tương lai, tôi hướng đến việc tích lũy nhiều kinh nghiệm thực tiễn, mở rộng hiểu biết thông qua các
              dự án, hoạt động học tập và trải nghiệm nghề nghiệp. Tôi mong muốn xây dựng một nền tảng vững chắc về
              chuyên môn, phát triển tư duy đổi mới và khả năng thích ứng với sự thay đổi của công nghệ, từ đó từng bước
              trở thành một nhà quản trị có năng lực, bản lĩnh và tạo ra những giá trị tích cực cho doanh nghiệp cũng
              như cộng đồng.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="bg-white p-3 rounded-xl inline-flex drop-shadow-md drop-shadow-black/25"
            >
              <img src={dinh_huong} alt="" className="w-105 h-75 rounded-md" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDevelopment;
