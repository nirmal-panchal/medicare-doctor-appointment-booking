import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const submitHandler = () => {
    console.log(formdata);
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-lg md:p-10 border">
        <h3 className="text-headingColor px-2 py-1 text-[22px] leading-9 font-bold mb-10">
          Hello! <span className="text-primaryColor">Welcome </span>back 🎉
        </h3>

        <form className="py-4 md:py-0" onSubmit={submitHandler}>
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formdata.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md"
            />
          </div>

          <div className="mb-5">
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formdata.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md"
            />
          </div>
          <div className="mt-7 flex items-center justify-center">
            <button
              className="w-[80%]  bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
              type="submit"
            >
              Login
            </button>
          </div>

          <p className="mt-5 text-textColor text-center">
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/register"
              className="text-primaryColor font-medium ml-1"
            >
              Register here
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
