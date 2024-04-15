import { Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../config/firebase";


export default function Login() {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Mutation for email/password login
  const { mutate: loginMutate, isLoading } = useMutation({
    mutationKey: "login",
    mutationFn: async ({ email, password }) => {
      await signInWithEmailAndPassword(auth, email, password);
    },
    onSuccess: () => {
      navigate("/Dashboard");
    },
    onError: (error) => {
      console.error("Error al loguear el usuario:", error);
    },
  });

  // Handler for form submission
  const onSubmit = (data) => {
    loginMutate(data);
  };

  // Google login function
  const googleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/Dashboard");
    } catch (error) {
      console.error("Error al loguear con Google:", error);
    }
  };

  const registerSinup = async () => {
    try {
      await navigate("/signup");
    } catch (error) {
    }
  };

  return (
    <div className="container mx-auto flex justify-center items-center flex-col min-h-[100vh] gap-8">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">
          Email
          <input
            type="email"
            autoComplete="username"
            className="input"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            className="input"
            autoComplete="current-password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}
        </label>
        <input
          className="button"
          type="submit"
          disabled={isLoading}
        />
      </form>
      <Button className="button" onClick={googleLogin} disabled={isLoading}>
        Login with Google
      </Button>

      <Button className="button" onClick={registerSinup} disabled={isLoading}>
      New account
      </Button> 

    </div>
  );
}
