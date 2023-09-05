import About from "@/components/About/About";
import DoctorList from "@/components/Doctors/DoctorList";
import FaqList from "@/components/Faq/FaqList";
import Testimonial from "@/components/Testimonial/Testimonial";
import ServiceList from "@/components/services/ServiceList";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Home = () => {
  return (
    <>
      {/* === hero Section === */}
      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* === hero Content === */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[700] md:text-[60px] md:leading-[70px] ">
                  We help patients live a healthy, longer life
                </h1>
                <p className="text__para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur totam beatae, dolores quasi non perferendis illum
                  tenetur? Qui placeat nostrum, itaque corrupti blanditiis magni
                  officia corporis molestias laborum fugiat magnam?
                </p>
                <button className="btn">Request an Appointment</button>
              </div>

              {/* === hero Counter === */}
              <div className="mt-[30px] lg:mt-[50px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Years of experience</p>
                </div>

                <div className="mr-5">
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Clinic Location</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Patient satisfaction</p>
                </div>
              </div>
            </div>

            {/* === hero Content === */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img src="/images/hero-img01.png" alt="" />
              </div>
              <div className="mt-[30px] ">
                <img
                  src="/images/hero-img02.png"
                  alt=""
                  className="w-full mb-[30px]"
                />
                <img src="/images/hero-img03.png" alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* === hero Section end === */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className="text__para text-center ">
              World-class care for everyone. Our health system offers unmatched
              expert health care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[10px] lg:mt-[15px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center ">
                <img src="/images/icon01.png" alt="" />
              </div>

              <div className="mt-[10px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Doctor
                </h2>
                <p className="text-[18px] leading-7 text-textColor font-400 mt-2 text-center">
                  World-class care for everyone. Our health system offers
                  unmatched, expert health care. From the lab to the Clinic
                </p>
                <Link
                  href="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[10px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5 " />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center ">
                <img src="/images/icon02.png" alt="" />
              </div>

              <div className="mt-[10px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Location
                </h2>
                <p className="text-[18px] leading-7 text-textColor font-400 mt-2 text-center">
                  World-class care for everyone. Our health system offers
                  unmatched, expert health care. From the lab to the Clinic
                </p>
                <Link
                  href="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[10px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5 " />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center ">
                <img src="/images/icon03.png" alt="" />
              </div>

              <div className="mt-[10px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book Appointment
                </h2>
                <p className="text-[18px] leading-7 text-textColor font-400 mt-2 text-center">
                  World-class care for everyone. Our health system offers
                  unmatched, expert health care. From the lab to the Clinic
                </p>
                <Link
                  href="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[10px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5 " />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />

      {/* === Services Section === */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Medical Services</h2>
            <p className="text__para text-center ">
              World-class care for everyone. Our health system offers unmatched
              expert health care.
            </p>
          </div>
          <ServiceList />
        </div>
      </section>
      {/* === Services Section end === */}

      {/* === Feature Section === */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* === Feature Content === */}
            <div className="xl:w-[670px] ">
              <h2 className="heading">
                Get Virtual Treatment <br /> Anytime.
              </h2>
              <ul className="pl-4">
                <li className="text__para">
                  1. Schedule the appointment directly.
                </li>
                <li className="text__para">
                  2. Search for your physician here, and contact their office.
                </li>
                <li className="text__para">
                  3. View our physician who are accepting new patients, use the
                  online scheduling tool to select an appointment time.
                </li>
              </ul>
              <Link href="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>
            {/* === Feature Img === */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src="/images/feature-img.png" className="w-3/4" alt="" />

              <div className="w-[150px] lg:w-[248px] shadow-lg bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex-items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Tue,24{" "}
                      <span className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                        10:00
                      </span>
                    </p>
                  </div>
                  <div className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px] ">
                    <img src="/images/video-icon.png" alt="" />
                  </div>
                </div>

                <div className="text-center w-[65px] lg:w-[96px] bg-[#ccf0f3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  Consultation
                </div>
                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src="/images/avatar-icon.png" alt="" />
                  <h4 className="leading-3 text-headingColor text-[10px] lg:text-[16px] lg:leading-[22px] font-[700]">
                    Wayne Collins
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* === Feature Section end === */}

      {/* === Doctors Section === */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Great Doctors</h2>
            <p className="text__para text-center ">
              World-class care for everyone. Our health system offers unmatched
              expert health care.
            </p>
          </div>

          <DoctorList />
        </div>
      </section>
      {/* === Doctors Section end === */}

      {/* === Faq Section === */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src="/images/faq-img.png" alt="" />
            </div>

            <div className="mt-2 w-full md:w-1/2 ">
              <h2 className="heading">
                Most Questions by our beloved patients
              </h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* === Faq Section end === */}

      {/* === Testimonial === */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our patients say</h2>
            <p className="text__para text-center ">
              World-class care for everyone. Our health system offers unmatched
              expert health care.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
      {/* === Testimonial end === */}
    </>
  );
};

export default Home;
