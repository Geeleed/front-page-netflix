"use client";
import React, { useState } from "react";

export const InputPass = ({
  setTransfer,
  placeholder,
}: {
  setTransfer: React.Dispatch<React.SetStateAction<string>>;

  placeholder: string;
}) => {
  const [value, setValue] = useState("");
  const [textBox, setTextBox] = useState(false);
  const [nowShow, setNowShow] = useState(false);
  const handleText = () => {
    if (!value) setTextBox(false);
  };
  return (
    <div className=" rounded-md relative w-full h-12 bg-[#474747] bg-opacity-50">
      <label
        className={
          " text-[0.8rem] text-gray-500 px-5 h-full absolute flex items-center transition-all origin-top-left " +
          (textBox && " px-7 scale-[0.7] -translate-y-1")
        }
      >
        {placeholder}
      </label>
      <input
        className={
          "  px-5 outline-none rounded-sm h-full w-full absolute flex items-center transition-all origin-bottom-left bg-transparent " +
          (textBox && "pt-3")
        }
        type={nowShow ? "text" : "password"}
        onFocus={() => setTextBox(true)}
        onBlur={handleText}
        onChange={(e) => {
          setValue(e.target.value);
          setTransfer(e.target.value);
        }}
      />
      {value && (
        <button
          onClick={(e) => {
            e.preventDefault();
            setNowShow((prev) => !prev);
          }}
          className=" h-full flex items-center absolute right-2 hover:text-gray-400 text-[0.9rem] font-semibold"
        >
          {nowShow ? "Hide" : "Show"}
        </button>
      )}
    </div>
  );
};
