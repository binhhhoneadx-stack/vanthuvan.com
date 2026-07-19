import bg from "../assets/images/background_2.png";
import { motion } from "framer-motion";
import profileo_goals from "../assets/images/muc_tieu_profile.png";

const PortfolioGoals = () => {
  return (
    <div
      className="w-full h-[95vh] relative flex items-center justify-center"
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
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center flex-col"
        >
          <h1 className="text-5xl font-bold">
            Mục Tiêu Xây Dựng <span className="text-[#7c5fd4]">Profilio</span>
          </h1>

          <div className="w-45 h-0.5 rounded-full bg-[#7c5fd4] mt-5"></div>
        </motion.div>

        <motion.div className="w-[82%] m-auto mt-15 flex items-start">
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-3 rounded-xl inline-flex drop-shadow-md drop-shadow-black/25"
          >
            <img src={profileo_goals} alt="" className="w-125 h-95 rounded-md" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-5 rounded-xl inline-flex drop-shadow-md drop-shadow-black/25 ml-8 flex-1 leading-7 text-base"
          >
            Mục tiêu của Portfolio này là trình bày một cách hệ thống những kiến thức, kỹ năng số và kinh nghiệm thực
            hành mà tôi đã tích lũy trong quá trình học tập học phần Công nghệ số và Ứng dụng AI. Thông qua các bài thực
            hành, dự án và sản phẩm học tập, tôi tập trung thể hiện khả năng sử dụng các công cụ số, các nền tảng trí
            tuệ nhân tạo và các công nghệ hỗ trợ học tập để quản lý dữ liệu, tìm kiếm và phân tích thông tin, xây dựng
            Prompt, cộng tác trực tuyến cũng như sáng tạo nội dung số một cách hiệu quả.
            <br />
            Bên cạnh đó, Portfolio còn minh chứng cho việc tôi biết vận dụng công nghệ và AI vào các hoạt động học tập
            và nghiên cứu như tổ chức dữ liệu cá nhân, phân tích và tổng hợp tài liệu, thiết kế Prompt để tối ưu kết quả
            từ AI, sử dụng các công cụ cộng tác trực tuyến và ứng dụng AI trong quá trình xây dựng nội dung học thuật.
            Đồng thời, tôi luôn chú trọng đến việc sử dụng AI một cách có trách nhiệm thông qua kiểm chứng thông tin,
            tôn trọng đạo đức học thuật và phát triển tư duy phản biện.
            <br />
            Mục tiêu cuối cùng của Portfolio là khẳng định năng lực tự học, khả năng thích nghi với sự phát triển của
            công nghệ, tư duy logic, kỹ năng giải quyết vấn đề và khả năng ứng dụng các công cụ số vào học tập cũng như
            công việc trong môi trường chuyển đổi số hiện đại.
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioGoals;
