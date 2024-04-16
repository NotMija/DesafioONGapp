import { Box, Button, Card, Checkbox, FormControlLabel, TextField } from "@mui/material";
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
        <img src="https://www.meraparivar.org/wp-content/uploads/2022/03/mera-parivar-ngo_edited.png" alt="Mera Parivar" style={{ width: '150px', marginBottom: '1rem' }} />
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <TextField 
            label="Username" 
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
          <FormControlLabel 
            control={<Checkbox />} 
            label="Remember password" 
          />
          <Button type="submit" variant="contained" fullWidth disabled={isLoading}>
            Login
          </Button>
        </form>
        <Button variant="outlined" onClick={googleLogin} fullWidth disabled={isLoading}>
          Login with Google
        </Button>
        <Button variant="text" onClick={registerSinup} fullWidth disabled={isLoading}>
          New account
        </Button>
      </Card>
    </Box>
  );
}
