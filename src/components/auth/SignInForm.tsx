import { useState } from "react";
import { EyeCloseIcon, EyeIcon } from "../../icons";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Button from "../ui/button/Button";
import axios from "axios";
import { loginAdmin } from "../../utils/apis";
import { useNavigate } from "react-router";
export default function SignInForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    console.log(data, "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
    try {
       const response = await loginAdmin(data);
    //  const response = await axios.post("https://woqqy.juanosorio.dev/auth/admin/login", data);
      console.log("Response:", response.data);
      localStorage.setItem('token',response.data.payload.token)
      console.log("Navigating to dashboard...");
      navigate('/dashboard');
    } catch (error) {
      console.log("Login failed:", error);
    }
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              Sign In - WOQQY
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enter your email and password to sign in!
            </p>
          </div>
          <div>
            <form>
              <div className="space-y-6">
                <div>
                  <Label>
                    Email <span className="text-error-500">*</span>{" "}
                  </Label>
                  <Input
                    placeholder="info@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <Label>
                    Password <span className="text-error-500">*</span>{" "}
                  </Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      ) : (
                        <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      )}
                    </span>
                  </div>
                </div>

                <div>
                  {/* <button
                    type="button"
                    className="w-full"
                    // size="sm"
                    onClick={() => HandleLogin()}
                  >
                    Sign in
                  </button> */}
                  <Button className="w-full" size="sm" onClick={HandleLogin}>
                    Sign in
                  </Button>
                </div>
              </div>
            </form>

            <div className="mt-8 py-4 text-center">
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-400 tracking-wide">
                Designed by{" "}
                <span className="font-bold text-blue-600">
                  Zero It Solutions
                </span>
              </p>
              <p className="text-sm text-center text-gray-700 dark:text-gray-400 mt-2">
                Powered by{" "}
                <span className="font-bold text-blue-600">Woqqy</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
