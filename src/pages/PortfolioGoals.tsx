import bg from "../assets/images/background_2.png";
import { motion } from "framer-motion";
import profileo_goals from "../assets/images/muc_tieu_profile.png";
import { useEffect } from "react";

const PortfolioGoals = () => {
  useEffect(() => {
    document.title = `Vũ Thu Vân - Mục tiêu xây dựng profilio`;
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
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Mục Tiêu Xây Dựng <span className="text-[#7c5fd4]">Portfolio</span>
          </h1>

          <div className="w-24 sm:w-32 lg:w-44 h-1 rounded-full bg-[#7c5fd4] mt-5" />
        </motion.div>

        {/* Nội dung */}
        <div className="mt-10 lg:mt-16 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-10">
          {/* Ảnh */}
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[42%]"
          >
            <div className="bg-white rounded-2xl p-3 shadow-xl">
              <img src={profileo_goals} alt="Portfolio Goals" className="w-full h-auto rounded-xl object-cover" />
            </div>
          </motion.div>

          {/* Nội dung text */}
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 bg-white rounded-2xl p-6 sm:p-8 shadow-xl"
          >
            <div className="space-y-6 text-justify text-gray-700 leading-8 text-sm sm:text-base lg:text-lg">
              <p>
                Mục tiêu của Portfolio này là trình bày một cách hệ thống những kiến thức, kỹ năng số và kinh nghiệm
                thực hành mà tôi đã tích lũy trong quá trình học tập học phần Công nghệ số và Ứng dụng AI. Thông qua các
                bài thực hành, dự án và sản phẩm học tập, tôi tập trung thể hiện khả năng sử dụng các công cụ số, các
                nền tảng trí tuệ nhân tạo và các công nghệ hỗ trợ học tập để quản lý dữ liệu, tìm kiếm và phân tích
                thông tin, xây dựng Prompt, cộng tác trực tuyến cũng như sáng tạo nội dung số một cách hiệu quả.
              </p>

              <p>
                Bên cạnh đó, Portfolio còn minh chứng cho việc tôi biết vận dụng công nghệ và AI vào các hoạt động học
                tập và nghiên cứu như tổ chức dữ liệu cá nhân, phân tích và tổng hợp tài liệu, thiết kế Prompt để tối ưu
                kết quả từ AI, sử dụng các công cụ cộng tác trực tuyến và ứng dụng AI trong quá trình xây dựng nội dung
                học thuật. Đồng thời, tôi luôn chú trọng đến việc sử dụng AI một cách có trách nhiệm thông qua kiểm
                chứng thông tin, tôn trọng đạo đức học thuật và phát triển tư duy phản biện.
              </p>

              <p>
                Mục tiêu cuối cùng của Portfolio là khẳng định năng lực tự học, khả năng thích nghi với sự phát triển
                của công nghệ, tư duy logic, kỹ năng giải quyết vấn đề và khả năng ứng dụng các công cụ số vào học tập
                cũng như công việc trong môi trường chuyển đổi số hiện đại.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioGoals;
