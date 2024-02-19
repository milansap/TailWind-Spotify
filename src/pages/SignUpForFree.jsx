function SignUpForFree() {
  return (
    <div className="flex justify-between  gap- w-full bg-white  h-full ">
      <div className="text-sm flex justify-between px-4 font-bold text-white bg-gradient-to-r w-full from-fuchsia-500 to-cyan-500 ">
        <div className="div">
          <h4 className=""> preview of Spotify</h4>
          <p>
            Sign up to get unlimited songs and podcasts with occasional ads. No
            credit card needed.
          </p>
        </div>
        <button className="rounded-3xl w-32   bg-white text-black">
          Sign up free
        </button>
      </div>
    </div>
  );
}

export default SignUpForFree;
