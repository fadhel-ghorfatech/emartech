import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contextProviders/authentication";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { ForgotPassword } from "./pages/ForgotPassword";
import { EmailVerification } from "./pages/EmailVerification";
import { ResetPassword } from "./pages/ResetPassword";
import { SuccessfullyResetPassword } from "./pages/SuccessfullyResetPassword";
import { baseTheme } from "./theme";



export const App = () => {
  return (
    <>
      <ThemeProvider theme={baseTheme}>
        <CssBaseline />
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/forgotPassword" element={<ForgotPassword />}/>
            <Route path="/emailVerification" element={<EmailVerification />}/>
            <Route path="/resetPassword" element={<ResetPassword />}/>
            <Route path="/successfullyresetPassword" element={<SuccessfullyResetPassword />}/>
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
};
