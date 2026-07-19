import bg from "../assets/images/background_2.png";
import avatar from "../assets/images/avatar.jpg";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Profile = () => {
  useEffect(() => {
    document.title = `Vũ Thu Vân - Giới thiệu bản thân`;
  }, []);

  return (
    <div
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden py-12 lg:py-20"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Grid */}
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

      <div className="relative z-10 w-full max-w-7xl px-5 sm:px-8 lg:px-10 xl:px-12">
        {/* Tiêu đề */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Giới Thiệu <span className="text-[#7c5fd4]">Bản Thân</span>
          </h1>

          <div className="mt-5 h-1 w-24 sm:w-32 lg:w-44 rounded-full bg-[#7c5fd4]" />
        </motion.div>

        {/* Nội dung */}
        <div className="mt-10 lg:mt-16 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-10">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[36%]"
          >
            <div className="rounded-2xl bg-white p-3 shadow-xl">
              <img src={avatar} alt="Avatar" className="w-full h-auto rounded-xl object-cover aspect-[4/5]" />
            </div>
          </motion.div>

          {/* Giới thiệu */}
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="flex-1 rounded-2xl bg-white p-6 sm:p-8 shadow-xl"
          >
            <div className="space-y-6 text-justify text-gray-700 leading-8 text-sm sm:text-base lg:text-lg">
              <p>
                Xin chào! Mình là <strong>Vũ Thu Vân</strong>, hiện đang là sinh viên chuyên ngành{" "}
                <strong>Quản trị Kinh doanh</strong> tại Trường Đại học Kinh tế – Đại học Quốc gia Hà Nội (UEB – VNU).
              </p>

              <p>
                Với niềm yêu thích trong lĩnh vực quản trị và phát triển doanh nghiệp, mình luôn mong muốn tìm hiểu cách
                các tổ chức vận hành, xây dựng chiến lược và tạo ra giá trị bền vững trong môi trường kinh doanh hiện
                đại. Bên cạnh việc học tập chuyên ngành, mình cũng chủ động trau dồi các kỹ năng về công nghệ số, phân
                tích dữ liệu và ứng dụng trí tuệ nhân tạo (AI) nhằm nâng cao hiệu quả học tập, giải quyết vấn đề và
                thích ứng với xu hướng chuyển đổi số trong hoạt động quản trị.
              </p>

              <p>
                Ngoài thời gian học tập, mình yêu thích khám phá những kiến thức mới, đọc sách về kinh doanh, tham gia
                các hoạt động phát triển kỹ năng và trải nghiệm làm việc nhóm. Mình tin rằng sự kết hợp giữa tư duy quản
                trị, tinh thần học hỏi và khả năng ứng dụng công nghệ sẽ là nền tảng quan trọng giúp bản thân phát triển
                trong tương lai. Portfolio này được xây dựng như một nơi lưu giữ quá trình học tập, các sản phẩm thực
                hành và những kỹ năng số mà mình đã tích lũy, đồng thời thể hiện sự nỗ lực không ngừng trên hành trình
                trở thành một nhà quản trị chuyên nghiệp.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
