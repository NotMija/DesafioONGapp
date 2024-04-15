import React from "react";
import { getAuth, signOut } from "firebase/auth";

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
      <button className="align-items: end;"
        onClick={this.handleLogout}
        style={{
          color: "black",
        }}
      >
        Sign out
      </button>
    );
  }
}


export default LogoutButton;