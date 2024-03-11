import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contextProviders/authentication";
import { Login } from "./pages/Login";
import { baseTheme } from "./theme";



export const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={baseTheme}>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />}/>
          </Routes>
        </AuthProvider>
      </ThemeProvider>

    </>
  );
};



