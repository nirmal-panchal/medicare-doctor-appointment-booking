import { formateDate } from "@/utils/formateDate";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from "./FeedbackForm";

const DoctorFeedback = () => {
  const [feedbackForm, setFeedbackForm] = useState(false);

  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          All Reviews (272)
        </h4>

        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full ">
              <img className="w-full" src="/images/avatar-icon.png" alt="" />
            </figure>

            <div>
              <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                Suresh Parmar
              </h5>
              <p className="text-[14px] leading-6 text-textColor">
                {formateDate("02-14-2023")}
              </p>
              <p className="text__para mt-3 font-medium text-[15px]">
                Good services, high recommanded 👍
              </p>
            </div>
          </div>

          <div className="flex gap-1">
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} color="#0067ff" />
            ))}
          </div>
        </div>
      </div>
      {!feedbackForm && (
        <div className="text-center">
          <button
            className="btn"
            onClick={() => {
              setFeedbackForm(true);
            }}
          >
            Give Feedback
          </button>
        </div>
      )}
      {feedbackForm && <FeedbackForm />}
    </div>
  );
};

export default DoctorFeedback;
