import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Typography,
  styled,
} from "@mui/material";
import { InputField } from "../../components/inputs";
import { ButtonVariants } from "../../components/constants";
import { useCallback, useMemo, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import emarTechLogo from "../../assets/emartech-logo.png";
import { redirect, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { resetPasswordSchema } from "../../schemas";
import { resetPassword } from "../../services/userServiceCalls";

const StyledBackgroundBox = styled(Box)({
  backgroundImage: "url('../../src/assets/reset-password-1.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  height: "100%",
});

const initialValues = {
  newPassword: "",
  confirmPassword: "",
};

export const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const handleSubmitAction = useCallback(
    (values: any) => {
      const { newPassword } = values;

      // change this service
      const token = new URLSearchParams(window.location.search).get("token");
      resetPassword(
        { password: newPassword, token },
        (err: any, response: any) => {
          if (err) console.log("-----------err-------");
          if (response) navigate("/successfullyresetPassword");
        }
      );
    },
    [navigate]
  );

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    isValid,
  } = useForm({
    initialValues,
    validationSchema: resetPasswordSchema,
    handleSubmitAction,
  });

  const { newPasswordError, confirmPasswordError } = useMemo(
    () => ({
      newPasswordError:
        errors.newPassword && touched.newPassword ? errors.newPassword : "",
      confirmPasswordError:
        errors.confirmPassword && touched.confirmPassword
          ? errors.confirmPassword
          : "",
    }),
    [
      errors.confirmPassword,
      errors.newPassword,
      touched.confirmPassword,
      touched.newPassword,
    ]
  );

  // const disableSubmit = useMemo(
  //   () => !!(newPasswordError || confirmPasswordError),
  //   [confirmPasswordError, newPasswordError]
  // );

  return (
    <Container className="max-w-100 space-0 main-container">
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Container className="max-w-100 space-0 d-flex align-stretch justify-center">
          <Container className="space-0 image-container d-mobile-none">
            <StyledBackgroundBox className="min-h-100vh image"></StyledBackgroundBox>
          </Container>
          <Container className="content-container d-flex justify-center">
            <Box className="auth-container flex-center">
              <img
                className="emar-logo"
                src={emarTechLogo}
                alt="EmarTech Logo"
              />
              <Typography className="auth-heading">Reset Password</Typography>
              <InputField
                name="newPassword"
                value={values.newPassword}
                error={!!newPasswordError}
                errorTooltip={newPasswordError as string}
                label="New Password"
                type={showPassword ? "text" : "password"}
                labelClassName="input-label"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? (
                          <Icon icon="eva:eye-fill" />
                        ) : (
                          <Icon icon="eva:eye-off-fill" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <InputField
                name="confirmPassword"
                value={values.confirmPassword}
                error={!!confirmPasswordError}
                errorTooltip={confirmPasswordError as string}
                label="Confirm New Password"
                type={confirmPassword ? "text" : "password"}
                labelClassName="input-label"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setConfirmPassword((prev) => !prev)}
                      >
                        {confirmPassword ? (
                          <Icon icon="eva:eye-fill" />
                        ) : (
                          <Icon icon="eva:eye-off-fill" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Button
                className="auth-btn input-label"
                disabled={!isValid}
                type="submit"
                variant={ButtonVariants.OUTLINED}
              >
                Reset Password
              </Button>
            </Box>
          </Container>
        </Container>
      </form>
    </Container>
  );
};
