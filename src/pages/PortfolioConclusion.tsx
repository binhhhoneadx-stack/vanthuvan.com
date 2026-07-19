import { motion } from "framer-motion";
import tong_ket from "../assets/images/tong_ket.png";
import { useEffect } from "react";

const PortfolioConclusion = () => {
  useEffect(() => {
    document.title = `Vũ Thu Vân - Tổng Kết`;
  }, []);

  return (
    <div className="w-full min-h-[77vh] relative flex items-center justify-center py-18">
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
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center flex-col"
        >
          <h1 className="text-5xl font-bold text-[#7c5fd4] uppercase">Tổng Kết</h1>

          <div className="w-35 h-0.5 rounded-full bg-[#7c5fd4] mt-5"></div>
        </motion.div>

        <div className="w-[72%] m-auto mt-15">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-xl drop-shadow-md drop-shadow-black/25 bg-white p-5 flex-1 ml-8 mb-12"
          >
            <div className="text-base leading-7">
              Trong quá trình học tập học phần Công nghệ số và Ứng dụng AI cũng như thực hiện các bài thực hành trong
              Portfolio, tôi đã có cơ hội tiếp cận và vận dụng nhiều kiến thức, kỹ năng số vào các tình huống thực tế.
              Thông qua các bài học về quản lý dữ liệu cá nhân, ứng dụng AI trong nghiên cứu, xây dựng Prompt, làm việc
              nhóm với các công cụ trực tuyến, sáng tạo nội dung số và sử dụng AI có trách nhiệm, tôi hiểu rõ hơn vai
              trò của công nghệ trong học tập, nghiên cứu và phát triển bản thân. Không chỉ tiếp thu kiến thức lý
              thuyết, tôi còn biết cách khai thác các công cụ số để nâng cao hiệu quả làm việc và giải quyết các nhiệm
              vụ học tập một cách khoa học.
              <br />
              Học phần đã mang lại cho tôi nhiều giá trị thiết thực trong quá trình học tập. Tôi cải thiện được khả năng
              quản lý và tổ chức dữ liệu, tìm kiếm và đánh giá thông tin, sử dụng hiệu quả các nền tảng cộng tác trực
              tuyến cũng như khai thác sức mạnh của trí tuệ nhân tạo để hỗ trợ nghiên cứu và sáng tạo nội dung. Bên cạnh
              đó, tôi cũng rèn luyện được tư duy phản biện, kỹ năng làm việc nhóm, kỹ năng giao tiếp và ý thức về đạo
              đức, bản quyền cũng như trách nhiệm khi sử dụng AI và các công nghệ số trong môi trường học thuật.
              <br />
              Trong thời gian tới, tôi sẽ tiếp tục trau dồi kiến thức chuyên môn, nâng cao kỹ năng công nghệ số và cập
              nhật những xu hướng mới về trí tuệ nhân tạo, chuyển đổi số và quản trị hiện đại. Đồng thời, tôi đặt mục
              tiêu phát triển các kỹ năng mềm như tư duy phân tích, giải quyết vấn đề, quản lý thời gian và khả năng
              thích ứng với những thay đổi của môi trường làm việc. Tôi mong muốn vận dụng những kiến thức và kỹ năng đã
              tích lũy để hỗ trợ tốt hơn cho quá trình học tập, nghiên cứu và định hướng nghề nghiệp trong lĩnh vực Quản
              trị Kinh doanh.
              <br />
              Có thể khẳng định rằng, học phần này không chỉ giúp tôi xây dựng nền tảng về công nghệ số và AI mà còn
              hình thành tư duy học tập chủ động, tinh thần đổi mới và khả năng thích ứng trong thời đại chuyển đổi số.
              Portfolio này là minh chứng cho quá trình học tập, rèn luyện và phát triển của bản thân, đồng thời là động
              lực để tôi tiếp tục hoàn thiện kiến thức, kỹ năng và hướng tới mục tiêu trở thành một nhà quản trị có năng
              lực, sáng tạo và sẵn sàng đáp ứng những yêu cầu của môi trường làm việc hiện đại.
            </div>
          </motion.div>

          <div className="flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="p-3 rounded-xl drop-shadow-xl drop-shadow-black/25 bg-white inline-flex items-center"
            >
              <img src={tong_ket} alt="" className="w-185 h-135 rounded-md " />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioConclusion;
