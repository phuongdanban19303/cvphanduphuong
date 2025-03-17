import React from "react";
import { FaBirthdayCake, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaVenusMars } from "react-icons/fa";

const ProfileDetails = () => {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-lg font-semibold">Thông tin cá nhân</h2>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <FaBirthdayCake className="text-neutral-200 w-4 h-4" />
          <div>
            <h3 className="mb-1 text-sm text-neutral-200">Ngày sinh</h3>
            <p className="text-sm">01/06/1999</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <FaVenusMars className="text-neutral-200 w-4 h-4" />
          <div>
            <h3 className="mb-1 text-sm text-neutral-200">Giới tính</h3>
            <p className="text-sm">Nam</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-neutral-200 w-4 h-4" />
          <div>
            <h3 className="mb-1 text-sm text-neutral-200">Phone</h3>
            <a 
              href="tel:0364852922" 
              className="text-sm hover:text-teal-400 transition-colors"
            >
              036 485 2922
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <FaEnvelope className="text-neutral-200 w-4 h-4" />
          <div>
            <h3 className="mb-1 text-sm text-neutral-200">Email</h3>
            <a 
              href="https://mail.google.com/" 
              className="text-sm hover:text-teal-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              phuongduyphann@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-neutral-200 w-4 h-4" />
          <div>
            <h3 className="mb-1 text-sm text-neutral-200">Địa chỉ</h3>
            <p className="text-sm">123 bằng liệt, hoàng mai</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileDetails;
