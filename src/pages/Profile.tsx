import bg from "../assets/images/background_2.png";
import avatar from "../assets/images/avatar.jpg";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <div
      className="w-full h-[77vh] relative flex items-center justify-center"
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
      <div className="w-[82%]">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center flex-col"
        >
          <h1 className="text-5xl font-bold">
            Giới Thiệu <span className="text-[#7c5fd4]">Bản Thân</span>
          </h1>

          <div className="w-45 h-0.5 rounded-full bg-[#7c5fd4] mt-5"></div>
        </motion.div>

        <div className="w-[72%] m-auto mt-8 flex items-start">
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="p-3 rounded-xl drop-shadow-xl drop-shadow-black/25 bg-white inline-flex"
          >
            <img src={avatar} alt="" className="w-80 h-105 rounded-md " />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="rounded-xl drop-shadow-xl drop-shadow-black/25 bg-white p-5 flex-1 ml-8"
          >
            <div className="text-base leading-7">
              Xin chào! Mình là Vũ Thu Vân, hiện đang là sinh viên chuyên ngành Quản trị Kinh doanh tại Trường Đại học
              Kinh tế – Đại học Quốc gia Hà Nội (UEB – VNU).
              <br />
              Với niềm yêu thích trong lĩnh vực quản trị và phát triển doanh nghiệp, mình luôn mong muốn tìm hiểu cách
              các tổ chức vận hành, xây dựng chiến lược và tạo ra giá trị bền vững trong môi trường kinh doanh hiện đại.
              Bên cạnh việc học tập chuyên ngành, mình cũng chủ động trau dồi các kỹ năng về công nghệ số, phân tích dữ
              liệu và ứng dụng trí tuệ nhân tạo (AI) nhằm nâng cao hiệu quả học tập, giải quyết vấn đề và thích ứng với
              xu hướng chuyển đổi số trong hoạt động quản trị.
              <br />
              Ngoài thời gian học tập, mình yêu thích khám phá những kiến thức mới, đọc sách về kinh doanh, tham gia các
              hoạt động phát triển kỹ năng và trải nghiệm làm việc nhóm. Mình tin rằng sự kết hợp giữa tư duy quản trị,
              tinh thần học hỏi và khả năng ứng dụng công nghệ sẽ là nền tảng quan trọng giúp bản thân phát triển trong
              tương lai. Portfolio này được xây dựng như một nơi lưu giữ quá trình học tập, các sản phẩm thực hành và
              những kỹ năng số mà mình đã tích lũy, đồng thời thể hiện sự nỗ lực không ngừng trên hành trình trở thành
              một nhà quản trị chuyên nghiệp.
            </div>

            <div></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
