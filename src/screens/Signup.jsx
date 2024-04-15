import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export default function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Define the mutation for signing up
  const { mutate: signupMutation } = useMutation({
    mutationKey: "signup",
    mutationFn: async ({ email, password }) => {
      return await createUserWithEmailAndPassword(auth, email, password);
    },
    onSuccess: () => {
      navigate('/login'); // Redirige al usuario a la página de inicio de sesión
    },
  });

  const onSubmit = async (data) => {
    signupMutation(data);
  };

  return (
    <div className="container mx-auto flex justify-center items-center flex-col min-h-[100vh] gap-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">
          Email
          <input
            className="input"
            type="email"
            name="email"
            autoComplete="username"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
        </label>
        <label htmlFor="password">
          Password
          <input
            className="input"
            type="password"
            name="password"
            autoComplete="new-password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}
        </label>
        <button
          className="button"
          type="submit"
          disabled={signupMutation.isLoading}
        >
          Sign up
        </button>
      </form>
    </div>
  );
}
