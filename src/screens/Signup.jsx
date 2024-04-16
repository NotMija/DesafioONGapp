import { Box, Button, Card, TextField } from "@mui/material";
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
  const { mutate: signupMutation, isLoading } = useMutation({
    mutationKey: "signup",
    mutationFn: async ({ email, password }) => {
      return await createUserWithEmailAndPassword(auth, email, password);
    },
    onSuccess: () => {
      navigate("/Dashboard");
    },
    onError: (error) => {
      console.error("Error signing up:", error);
    },
  });

  const onSubmit = async (data) => {
    signupMutation(data);
  };

  // Función para manejar la navegación a la página principal
  const goToHome = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        backgroundImage: 'url(https://www.meraparivar.org/wp-content/uploads/2022/07/WhatsApp-Image-2024-04-02-at-1.52.28-PM-2.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
        },
      }}
    >
      <Card
        raised
        sx={{
          position: 'relative',
          zIndex: 2,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <TextField 
            label="Email" 
            variant="outlined" 
            fullWidth 
            {...register("email", { required: true })} 
            error={!!errors.email} 
            helperText={errors.email ? "This field is required" : ""} 
          />
          <TextField 
            label="Password" 
            type="password" 
            variant="outlined" 
            fullWidth 
            {...register("password", { required: true })} 
            error={!!errors.password} 
            helperText={errors.password ? "This field is required" : ""}
          />
          <Button type="submit" variant="contained" fullWidth disabled={isLoading}>
            Sign up
          </Button>
        </form>
        <Button variant="text" onClick={goToHome} fullWidth>
          Go to Login
        </Button>
      </Card>
    </Box>
  );
}
