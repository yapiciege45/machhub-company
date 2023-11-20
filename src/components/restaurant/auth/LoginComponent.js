import Link from "next/link";

export const LoginComponent = ({
  restaurant,
  email,
  setEmail,
  password,
  setPassword,
  login,
}) => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-[#4c653f]">
      <div className="flex flex-col w-11/12 md:w-2/3 lg:w-1/3 p-8 rounded-lg drop-shadow-2xl items-center bg-white">
        <p className="text-black font-bold text-xl">
          Log In to {restaurant.name}
        </p>
        <div className="flex flex-col w-full mt-3">
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
            className="w-full rounded-lg border border-black drop-shadow-md text-md placeholder:text-md p-2 px-3"
          />
        </div>
        <div className="flex flex-col w-full mt-5">
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            className="w-full rounded-lg border border-black drop-shadow-md text-md placeholder:text-md p-2 px-4"
          />
        </div>
        <div
          onClick={() => login()}
          className="flex cursor-pointer justify-center rounded-lg items-center w-full bg-[#4c653f] p-2 mt-5"
        >
          <p className="text-white text-md">Log In</p>
        </div>
        <Link
          href={`/r/${restaurant.slug}/auth/signup`}
          className="text-md text-black mt-5"
        >
          Don't you have a account?{" "}
          <span className="text-blue-700 hover:text-blue-500 transition-all">
            Sign up!
          </span>
        </Link>
        <Link
          href={`/r/${restaurant.slug}/auth/forgot-password`}
          className="text-md text-blue-700 hover:text-blue-500 transition-all mt-5"
        >
          Forgot your password?
        </Link>
      </div>
    </div>
  );
};
