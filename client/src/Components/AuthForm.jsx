import React from "react";

const AuthForm = ({ text , email,setEmail,password,setPassword }) => {
  return (
    <div className="flex flex-col">
      <div className="flex w-full max-w-[320px]">
        <span className="font-black relative top-[23px] left-7">@</span>
        <input
          type="email"
          placeholder="Email"
          className="rounded-3xl border-2 border-gray-300
          py-1.5 px-3 pl-8 mt-4 w-[300px]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="flex w-full max-w-[320px] relative right-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#1d254f"
          className="w-5 h-6 relative top-[23px] left-7"
        >
          <path
            fillRule="evenodd"
            d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="text"
          placeholder="Password"
          className="rounded-3xl border-2 border-gray-300
          py-1.5 px-3 pl-8 mt-4 w-[300px]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button
        className={`bg-blue text-white border-2 border-transparent hover:bg-white
    hover:border-blue rounded-3xl hover:text-blue py-1.5 w-[305px] mx-auto mt-6 relative left-1`}
      >
        {text}
      </button>
      <div className="flex w-full items-center gap-3">
        <p className="h-0 w-[50%] border-[1px] border-gray-200"></p>
        <p className="text-gray-400 my-4">OR</p>
        <p className="h-0 w-[50%] border-[1px] border-gray-200"></p>
      </div>
      <div className="border-2 rounded-[50%] mb-8 p-2 border-black-300 w-auto mx-auto">
        <img src="./google-icon.png" alt="google-icon" width={"20px"} />
      </div>
    </div>
  );
};

export default AuthForm;
