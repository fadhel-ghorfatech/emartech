import { Button, Typography } from "@mui/material";
import { InputField } from "../../components/inputs";
import { ButtonVariants } from "../../components/constants";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { forgotPasswordService } from "../../services/userServiceCalls";
import { FC, useCallback } from "react";
import { forgotPasswordFormSchema } from "../../schemas";
import { AuthenticationWrapper } from "./index";

const initialValues = {
  email: "",
};

export const ForgotPassword : FC = () => {
  const navigate = useNavigate();
  const handleSubmitAction = useCallback(
    (values: any) => {
      forgotPasswordService(values, (err: any, response: any) => {
        if (err) console.log("-------error------------", err);
        if (response) navigate("/emailVerification");
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
          name="email"
          value={values.email}
          label="Email address or phone number"
          labelClassName="input-label"
          onChange={handleChange}
        />
        <Button
          disabled={!isValid || isSubmitting}
          variant={ButtonVariants.OUTLINED}
          type="submit"
          className="auth-btn input-label"
        >
                Reset Password
        </Button>
      </form>
    </AuthenticationWrapper>
  );
};
