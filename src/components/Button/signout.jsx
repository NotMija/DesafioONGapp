import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { Box, Button, Card, Checkbox, FormControlLabel, TextField } from "@mui/material";

class LogoutButton extends React.Component {
  handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        window.location.href = "/";
      })
      .catch((error) => {
  
        console.error("Error al cerrar sesión:", error);
      });
  };

  render() {
    return (
      <Button className="align-items: end;"
        onClick={this.handleLogout}
        style={{
          color: "black", background: "white",
        }}
      >
        Sign off
      </Button>
    );
  }
}


export default LogoutButton;