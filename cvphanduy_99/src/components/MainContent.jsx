import React from "react";
import { FaUserGraduate, FaBriefcase, FaLaptopCode } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import ProfileDetails from "./ProfileDetails";

const MainContent = () => {
  return (
    <div className="flex-1 p-8 bg-white m-4 rounded-lg shadow-lg">
      <div className="space-y-6">
        {/* Phần Giới thiệu */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <BsFillPersonLinesFill className="text-2xl text-teal-800" />
            <h2 className="text-2xl font-bold text-teal-800">Giới thiệu</h2>
          </div>
          <p className="text-gray-700">
            Tốt nghiệp chuyên ngành marketing nhưng sau một thời gian đi làm, em
            dần Cảm thấy bản thân không thể phát triển được nhiều hơn trong công
            việc, Nên em đã quyết định đi học thêm một nghề nào đó sau mỗi ngày
            đi làm. Cảm thấy bản thân thích suy luận logic và trước đó cũng đã
            được tiếp xúc qua về HTML,CSS,wordpress ở trên trường. Cảm thấy rất
            hứng thú nên em đã chọn theo học khóa học JAVA FULLSTACK của trung
            tâm Green Academy, tuy là học trung tâm nhưng cũng được dạy khá bài
            bản lập trình các ngôn ngữ phổ biến như C+, html,css, javascript,
            reactjs. Em khá tự tin về khả năng và quyết tâm theo nghề IT này. Vì
            em cảm thấy bản thân khá phù hợp với công việc này. Tuy em không
            phải xuất thân là dân lập trình, Nhưng sau 1 năm theo học, em cảm
            thấy mình khá tự tin về nền tảng lập trình của mình. Em mong anh/chị
            tuyển dụng cân nhắc cho em xin một cơ hội được theo học thực tập
            sinh ở bên doanh nghiệp bên mình em hứa sẽ cố gắng theo học để đáp
            ứng được yêu cầu làm việc của bên mình , em xin chân thành cảm ơn ạ!
          </p>
        </section>

        {/* Phần Kinh nghiệm */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <MdWork className="text-2xl text-teal-800" />
            <h2 className="text-2xl font-bold text-teal-800">
              Kinh nghiệm làm việc
            </h2>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-teal-600 pl-4">
              <h3 className="font-semibold text-lg">Nhân viên marketing</h3>
              <p className="text-red-600 font-bold">
                Công ty CP tập đoàn Sendai | 09/2023 - 03/2025
              </p>
              <p className="text-gray-600">
                Làm việc tại công ty con thuộc tập đoàn Sendai là TNG gruop ,
                chuyên bán các sản phẩm nông nghiệp, hàng trend các cho thị
                trường ĐNA như malaysia,indonesia,philippines.
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>
                  Chạy doanh thu từ 9/2023 - 2/2024, doanh thu trung bình từ
                  250-300 triệu.
                </li>
                <li>
                  Chuyển sang test sản phẩm từ 3/2024 - 8/2024, đã test ra 5 sản
                  phẩm win{" "}
                </li>
                <li>
                  Chạy doanh thu từ 9/2024 - 1/2025, Chạy doanh thu và đào tạo
                  nhân sự thử việc
                </li>
                <li>
                  Chuyển sang làm dropshipping thị trường châu âu từ 2/2025 -
                  3/2025, Nghiên cứu thị trường, tìm sản phẩm, làm video tiktok
                  và facebook, chạy quảng cáo và đánh giá hiệu quả{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-4"></div>
          <div className="space-y-4">
            <div className="border-l-4 border-teal-600 pl-4">
              <h3 className="font-semibold text-lg">Thực Tập sinh SEO</h3>
              <p className="text-red-600 font-bold">
                Trung tâm tiếng anh ENSPIRE ACADEMY | 05/2023 - 07/2023
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>
                  Làm content chuẩn SEO,onpage và offpage, tối ưu giao diện
                  UI,UX website của trung tâm và các đối tác
                </li>
                <li>Chạy quảng cáo google ads và facebook ads </li>
                <li>tester ứng dụng học tiếng anh cho trung tâm </li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-teal-600 pl-4">
              <h3 className="font-semibold text-lg">
                Thực tập sinh chạy quảng cáo facebook ads
              </h3>
              <p className="text-red-600 font-bold">
                Công ty Cổ phần Đầu tư Công nghệ F99 | 09/2022 - 02/2023
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Chạy quảng cáo mảng sữa non tổ yến goldilac grow</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Phần Học vấn */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <FaUserGraduate className="text-2xl text-teal-800" />
            <h2 className="text-2xl font-bold text-teal-800">Học vấn</h2>
          </div>
          <div className="border-l-4 border-teal-600 pl-4">
            <h3 className="font-semibold text-lg">
              Cử nhân thực hành thương mại điện tử và marketing
            </h3>
            <p className="text-red-600 font-bold">
              Cao đẳng FPT POLYTECHNIC | 05/2021 - 09/2023
            </p>
            <p className="text-gray-600">
              Tốt nghiệp trường cao đẳng FPT Polytechnic bằng giỏi.
              <br />
              Điểm trung bình GPA 8,1/10 4 Kì liên tiếp đạt danh hiệu sinh viên
              giỏi
            </p>
          </div>
          <div className="border-l-4 border-teal-600 pl-4">
            <h3 className="font-semibold text-lg">Fullstack java developer</h3>
            <p className="text-red-600 font-bold">
              Học Viện Green Academy - Cơ Sở Trường Chinh ( Hà Nội ) | 06/2024 -
              nay
            </p>
            <p className="text-gray-600">
              Đã học qua 4 ngôn ngữ C+,HTML,CSS,javascript,React
              <br />
              Điểm trung Đang học ngôn ngữ JAVA
            </p>
          </div>
        </section>

        {/* Phần Dự án */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <FaLaptopCode className="text-2xl text-teal-800" />
            <h2 className="text-2xl font-bold text-teal-800">Dự án</h2>
          </div>
          <div className="grid gap-4">
            <div className="border-l-4 border-teal-600 pl-4">
              <h3 className="font-semibold text-lg">
                Website CV cá nhân quản lý đơn hàng
              </h3>
              <p className="text-gray-700">
                Xây dựng website CV cá nhân sử dụng React và Tailwind CSS với
                các tính năng CRUD đơn hàng và sản phẩm, hiển thị detail đơn
                hàng, quản lý roles, hiển thị biểu đồ doanh thu dùng react
                google charts
              </p>
              <a href="https://mounage-anlr.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-500  underline hover:no-underline">Link website dự án</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainContent;
