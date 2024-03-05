"use client";

import Link from "next/link";
import React, { useState } from "react";
import { InputText } from "./component/InputText";
import { InputPass } from "./component/InputPass";
import Image from "next/image";

export default function Root() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const signin = () => {
    if (email === "" || pass === "") return alert("Please enter all fields!");
  };
  return (
    <div
      id="root_div"
      className=" bg-black text-white flex flex-col items-center w-full relative md:bg-[url('/image/TH-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg')]
      bg-cover"
    >
      <div className=" absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)]"></div>

      <nav className=" p-4 lg:px-10 w-full z-10">
        <svg
          viewBox="0 0 111 30"
          data-uia="netflix-logo"
          className="svg-icon svg-icon-netflix-logo h-12"
          fill="red"
          aria-hidden="true"
          focusable="false"
        >
          <g id="netflix-logo">
            <path
              d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
              id="Fill-14"
            ></path>
          </g>
        </svg>
      </nav>

      <section className=" pb-[8rem] md:w-[28rem] bg-[rgba(0,0,0,0.7)] z-10 md:p-10 md:pb-[8rem] md:mb-[5rem] rounded-sm">
        <form action="" className=" p-6 pb-2 flex flex-col gap-y-3">
          <h1 className=" font-bold text-[2rem]">Sign In</h1>
          <InputText
            placeholder="Email or phone number"
            setTransfer={setEmail}
          />
          <InputPass placeholder="Password" setTransfer={setPass} />
          <button
            onClick={(e) => {
              e.preventDefault();
              signin();
            }}
            className=" py-3 bg-red-600 rounded-md mt-7"
          >
            Sign In
          </button>
        </form>
        <div className=" px-6 flex justify-between text-gray-400 text-[0.8rem]">
          <div className=" flex items-center">
            <input
              className=" w-4 h-4 mr-1 appearance-none relative before:absolute before:w-4 before:h-4 before:bg-[#474747] before:top-0 before:left-0 checked:before:content-['✔'] before:rounded-sm before:flex before:justify-center before:items-center"
              type="checkbox"
            />
            <label>Remember me</label>
          </div>
          <Link className=" flex items-center" href={"#"}>
            {"Need help?"}
          </Link>
        </div>
        <div className=" px-6 text-gray-400 text-[0.9rem]">
          <br />
          <br />
          <p>
            New to Netflix?{" "}
            <Link className=" text-white" href={"#"}>
              Sign up now
            </Link>
            .
          </p>
          <br />
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <Link className=" text-blue-500" href={"#"}>
              Learn more.
            </Link>
          </p>
        </div>
      </section>
      <hr className=" border-[#ffffff77]" />
      <footer className=" p-6 text-[#ffffff77] flex flex-col gap-4 w-full bg-[rgba(0,0,0,0.6)] z-10 lg:px-[10rem] min-[1920px]:px-[30rem]">
        <h3 className=" mb-5">
          Questions? Call <Link href={"#"}>+66 1800 012 674</Link>
        </h3>
        <ul className=" grid grid-cols-2 md:grid-cols-4 gap-3 text-[0.8rem]">
          <Link href={"#"}>FAQ</Link>
          <Link href={"#"}>Help Center</Link>
          <Link href={"#"}>Terms of Use</Link>
          <Link href={"#"}>Privacy</Link>
          <Link href={"#"}>Cookie Preferences</Link>
          <Link href={"#"}>Corporate Information</Link>
        </ul>
        <select className=" my-5 flex-none w-fit p-2 rounded-sm bg-black border-[#ffffff77] border">
          <option value="en">English</option>
          <option value="th">ไทย</option>
        </select>
      </footer>
    </div>
  );
}
