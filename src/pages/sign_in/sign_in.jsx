import React, { useState } from "react";
import FormInput from "../../components/FormInput";
import CustomBtn from "../../components/CustomBtn";
import { auth, provider } from "../../firebase/firebaseUtil";
import { signInWithPopup } from "firebase/auth";
import { toast, Toaster } from "sonner";

const Sign_in = ({ currentUser }) => {
  const [page, setPage] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [loading, setLoading] = useState(false);

  const createPopup = () => {
    setLoading(true)
    currentUser
      ? toast("Already signed in. Sign out to proceed")
      : signInWithPopup(auth, provider)
          .then((result) => {
            setLoading(false)
            toast.success('Signed in successfully')
          })
          .catch((e) => {
            setLoading(false)
            console.log("An error occured");
          });
  };
  return (
    <section className="w-[100%] h-[91.5vh] relative flex justify-center items-center">
      {loading ? (
        <div className="bg-[rgba(255,255,255,0.8)] flex justify-center items-center absolute w-full h-[90vh] z-10">
          <div className="spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div className="">
          <Toaster position="top-right" richColors />
          {page === "login" ? (
            // Login card
            <div className="bg-white rounded-md p-3 w-full md:w-[500px]">
              <div className="card-container">
                <h1 className="font-bold text-center mb-3 text-3xl">Sign In</h1>
                <form>
                  <FormInput
                    placeholder={"Enter your email..."}
                    type={"email"}
                    required
                    value={email}
                    onChange={setEmail}
                  />
                  <FormInput
                    placeholder={"Enter your password..."}
                    type={"email"}
                    required
                    value={password}
                    onChange={setPassword}
                  />
                </form>
                <div className="flex gap-4 justify-center mt-5">
                  <CustomBtn
                    value={"Sign In"}
                    textColor={"white"}
                    bgColor={"black"}
                  />
                  <CustomBtn
                    value={"Sign in with Google"}
                    onClick={() => createPopup()}
                    textColor={"white"}
                    bgColor={"blue"}
                  />
                </div>
                <p
                  className="text-center text-sm mt-2 underline cursor-pointer"
                  onClick={() => setPage("register")}
                >
                  Don't have an account?
                </p>
              </div>
            </div>
          ) : (
            // Register card
            <div className="bg-white rounded-md p-3 w-full md:w-[500px]">
              <div className="card-container">
                <h1 className="font-bold text-center mb-3 text-3xl">
                  Register
                </h1>
                <form>
                  <FormInput
                    placeholder={"Display name..."}
                    type={"text"}
                    required
                    value={displayName}
                    onChange={setDisplayName}
                  />
                  <FormInput
                    placeholder={"Enter your email..."}
                    type={"email"}
                    required
                    value={email}
                    onChange={setEmail}
                  />
                  <FormInput
                    placeholder={"Enter a password..."}
                    type={"password"}
                    required
                    value={password}
                    onChange={setPassword}
                  />
                  <FormInput
                    placeholder={"Confirm password..."}
                    type={"password"}
                    required
                    value={confirmPassword}
                    onChange={setConfirmPassword}
                  />
                </form>
                <div className="flex gap-4 justify-center mt-5">
                  <CustomBtn
                    value={"Sign Up"}
                    textColor={"white"}
                    bgColor={"black"}
                  />
                </div>
                <p
                  className="text-center text-sm mt-2 underline cursor-pointer"
                  onClick={() => setPage("login")}
                >
                  Already have an account?
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Sign_in;
