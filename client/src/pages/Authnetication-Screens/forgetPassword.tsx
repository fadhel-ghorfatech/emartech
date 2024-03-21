import { Box, Button, Typography } from "@mui/material";
import { InputField } from "../../components/inputs";
import { ButtonVariants } from "../../components/constants";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { forgotPasswordService } from "../../services/userServiceCalls";
import { FC, useCallback, useState } from "react";
import { AuthenticationWrapper } from "./index";
import { forgotPasswordFormSchema } from "../../schemas";

const initialValues = {
  forgetPassword: "",
};

export const ForgotPassword : FC = () => {
  const navigate = useNavigate();
  const [apiError, setApiError] = useState(false);
  const handleSubmitAction = useCallback(
    (values: any) => {
      forgotPasswordService(values, (error: any, response: any) => {
        if (error) {
          setApiError(true)
        }
        if (response) {
          const { email } = response;
          navigate(`/emailVerification/${email}`);
        }
      });
    },
    [navigate]
  );

  const { values, handleChange, handleSubmit, isValid, isSubmitting } = useForm(
    {
      initialValues,
      handleSubmitAction,
      validationSchema: forgotPasswordFormSchema,
    }
  );

  return (
    <AuthenticationWrapper>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography className="auth-heading">
                Forgot your password?
        </Typography>
        <Typography className="auth-heading">
                Enter your email address or phone number and we’ll help you
                reset your password.
        </Typography>
        <InputField
          label="Email address or phone number"
          labelClassName="input-label"
          name="forgetPassword"
          onChange={handleChange}
          value={values.forgetPassword}
        />
        {
          apiError && (
            <Box sx={{ color: "red" }}>User not exists against provided email/phoneNumber</Box>
          ) 
        }
        <Button
          className="auth-btn input-label"
          disabled={!isValid || isSubmitting}
          type="submit"
          variant={ButtonVariants.OUTLINED}
        >
                Reset Password
        </Button>
      </form>
    </AuthenticationWrapper>
  );
};
