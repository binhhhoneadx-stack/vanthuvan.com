import { motion } from "framer-motion";
import tong_ket from "../assets/images/tong_ket.png";
import { useEffect } from "react";

const PortfolioConclusion = () => {
  useEffect(() => {
    document.title = `Vũ Thu Vân - Tổng Kết`;
  }, []);

  return (
    <div className="relative flex min-h-screen w-full justify-center overflow-hidden py-12 lg:py-20">
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
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase text-[#7c5fd4]">
            Tổng Kết
          </h1>

          <div className="mt-5 h-1 w-24 sm:w-32 lg:w-40 rounded-full bg-[#7c5fd4]" />
        </motion.div>

        {/* Content */}
        <div className="mx-auto mt-10 max-w-6xl lg:mt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl bg-white p-6 sm:p-8 lg:p-10 shadow-xl"
          >
            <div className="space-y-6 text-justify text-gray-700 leading-8 text-sm sm:text-base lg:text-lg">
              <p>
                Trong quá trình học tập học phần Công nghệ số và Ứng dụng AI cũng như thực hiện các bài thực hành trong
                Portfolio, tôi đã có cơ hội tiếp cận và vận dụng nhiều kiến thức, kỹ năng số vào các tình huống thực tế.
                Thông qua các bài học về quản lý dữ liệu cá nhân, ứng dụng AI trong nghiên cứu, xây dựng Prompt, làm
                việc nhóm với các công cụ trực tuyến, sáng tạo nội dung số và sử dụng AI có trách nhiệm, tôi hiểu rõ hơn
                vai trò của công nghệ trong học tập, nghiên cứu và phát triển bản thân. Không chỉ tiếp thu kiến thức lý
                thuyết, tôi còn biết cách khai thác các công cụ số để nâng cao hiệu quả làm việc và giải quyết các nhiệm
                vụ học tập một cách khoa học.
              </p>

              <p>
                Học phần đã mang lại cho tôi nhiều giá trị thiết thực trong quá trình học tập. Tôi cải thiện được khả
                năng quản lý và tổ chức dữ liệu, tìm kiếm và đánh giá thông tin, sử dụng hiệu quả các nền tảng cộng tác
                trực tuyến cũng như khai thác sức mạnh của trí tuệ nhân tạo để hỗ trợ nghiên cứu và sáng tạo nội dung.
                Bên cạnh đó, tôi cũng rèn luyện được tư duy phản biện, kỹ năng làm việc nhóm, kỹ năng giao tiếp và ý
                thức về đạo đức, bản quyền cũng như trách nhiệm khi sử dụng AI và các công nghệ số trong môi trường học
                thuật.
              </p>

              <p>
                Trong thời gian tới, tôi sẽ tiếp tục trau dồi kiến thức chuyên môn, nâng cao kỹ năng công nghệ số và cập
                nhật những xu hướng mới về trí tuệ nhân tạo, chuyển đổi số và quản trị hiện đại. Đồng thời, tôi đặt mục
                tiêu phát triển các kỹ năng mềm như tư duy phân tích, giải quyết vấn đề, quản lý thời gian và khả năng
                thích ứng với những thay đổi của môi trường làm việc. Tôi mong muốn vận dụng những kiến thức và kỹ năng
                đã tích lũy để hỗ trợ tốt hơn cho quá trình học tập, nghiên cứu và định hướng nghề nghiệp trong lĩnh vực
                Quản trị Kinh doanh.
              </p>

              <p>
                Có thể khẳng định rằng, học phần này không chỉ giúp tôi xây dựng nền tảng về công nghệ số và AI mà còn
                hình thành tư duy học tập chủ động, tinh thần đổi mới và khả năng thích ứng trong thời đại chuyển đổi
                số. Portfolio này là minh chứng cho quá trình học tập, rèn luyện và phát triển của bản thân, đồng thời
                là động lực để tôi tiếp tục hoàn thiện kiến thức, kỹ năng và hướng tới mục tiêu trở thành một nhà quản
                trị có năng lực, sáng tạo và sẵn sàng đáp ứng những yêu cầu của môi trường làm việc hiện đại.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-10 flex justify-center lg:mt-14"
          >
            <div className="rounded-2xl bg-white p-3 shadow-xl">
              <img src={tong_ket} alt="Tổng kết" className="w-full max-w-5xl rounded-xl object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioConclusion;
