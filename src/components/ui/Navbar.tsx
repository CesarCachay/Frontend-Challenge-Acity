"use client";

// vendors
import { useRouter } from "next/navigation";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

// contexts
import { useAuthContext } from "@/contexts/authContext";

const Navbar = () => {
  const router = useRouter();
  const { user, logout } = useAuthContext();

  const handleRedirectHome = () => {
    router.push("/");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, cursor: "pointer" }}
          onClick={handleRedirectHome}
          className="hover:text-black"
        >
          Pokedex Challenge
        </Typography>
        {user ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="body1">{user.fullName}</Typography>
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          </Box>
        ) : (
          <Button color="inherit" href="/login">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
