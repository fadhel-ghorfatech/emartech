import { useCallback, useMemo, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  IconButton,
  InputAdornment,
  Link,
  Typography,
  styled,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { FieldTitle, InputField } from "../../components/inputs";
import { ButtonVariants } from "../../components/constants";
import MuiPhoneNumber from "material-ui-phone-number-2";
import emarTechLogo from "../../assets/emartech-logo.png";
import { signUpSchema } from "../../schemas";
import { signupService } from "../../services/userServiceCalls";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

const StyledBackgroundBox = styled(Box)({
  backgroundImage: "url('../../src/assets/auth-signup-1.png')",
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
  agreementCheckbox: false,
  confirmPassword: "",
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  phoneNumber: "",
};

export const SignupForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitAction = useCallback(
    (values: any) => {
      setIsSubmitting(true);
      const { confirmPassword, ...rest } = values;
      signupService(rest, (err: any, response: any) => {
        setIsSubmitting(false);
        if (err) console.log("-----------err-------", err);
        if (response) navigate("/login");
      });
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
    validationSchema: signUpSchema,
    handleSubmitAction,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const {
    confirmPasswordError,
    emailError,
    firstNameError,
    lastNameError,
    paswordError,
  } = useMemo(
    () => ({
      firstNameError:
        errors.firstName && touched.firstName ? errors.firstName : "",
      lastNameError: errors.lastName && touched.lastName ? errors.lastName : "",
      emailError: errors.email && touched.email ? errors.email : "",
      paswordError: errors.password && touched.password ? errors.password : "",
      confirmPasswordError:
        errors.confirmPassword && touched.confirmPassword
          ? errors.confirmPassword
          : "",
    }),
    [
      errors.confirmPassword,
      errors.email,
      errors.firstName,
      errors.lastName,
      errors.password,
      touched.confirmPassword,
      touched.email,
      touched.firstName,
      touched.lastName,
      touched.password,
    ]
  );

  return (
    <Container className="max-w-100 space-0 main-container">
      <form autoComplete="off" onSubmit={handleSubmit}>
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
              <Typography className="auth-heading">Signup</Typography>
              <Box className="flex-center justify-between sm-flex-col">
                <Box className="form-container flex-center mr-10">
                  <InputField
                    value={values.firstName}
                    error={!!firstNameError}
                    errorTooltip={firstNameError as string}
                    name="firstName"
                    label="First Name"
                    labelClassName="input-label"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <InputField
                    value={values.password}
                    error={!!paswordError}
                    errorTooltip={paswordError as string}
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    isRequired={true}
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
                    value={values.email}
                    error={!!emailError}
                    errorTooltip={emailError as string}
                    name="email"
                    label="Email"
                    labelClassName="input-label"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Box>
                <Box className="form-container flex-center ml-10">
                  <InputField
                    value={values.lastName}
                    error={!!lastNameError}
                    errorTooltip={lastNameError as string}
                    name="lastName"
                    label="Last Name"
                    labelClassName="input-label"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <InputField
                    value={values.confirmPassword}
                    error={!!confirmPasswordError}
                    errorTooltip={confirmPasswordError as string}
                    name="confirmPassword"
                    label="Confirm Password"
                    type={confirmPassword ? "text" : "password"}
                    isRequired={true}
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
                  <FieldTitle label="Phone Number" className="input-label" />
                  <MuiPhoneNumber
                    value={values.phoneNumber}
                    name="phoneNumber"
                    variant="outlined"
                    countryCodeEditable={false}
                    disableAreaCodes={true}
                    defaultCountry={"sa"}
                    onChange={handleChange}
                  />
                </Box>
              </Box>
              <Box className="flex-center justify-start input-label">
                <Typography
                  className="input-label"
                  variant="body1"
                  gutterBottom
                >
                  <Checkbox
                    checked={values.agreementCheckbox}
                    name="agreementCheckbox"
                    size="small"
                    onChange={handleChange}
                  />
                  I accept the
                  <Link className="link sign-up">Terms and Conditions</Link>
                  and
                  <Link className="link sign-up">Privacy Policy.</Link>
                </Typography>
              </Box>
              <Button
                variant={ButtonVariants.OUTLINED}
                type="submit"
                className="auth-btn input-label"
                disabled={!isValid || isSubmitting}
              >
                Signup
              </Button>
            </Box>
          </Container>
        </Container>
      </form>
    </Container>
  );
};
