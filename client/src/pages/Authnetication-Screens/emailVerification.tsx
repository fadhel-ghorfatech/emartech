import {
  Link,
  Typography,
} from "@mui/material";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { AuthenticationWrapper } from "./index";
import { FC } from "react";

export const EmailVerification : FC = () => {
  return (
    <AuthenticationWrapper>
      <EmailRoundedIcon/>
      <Typography className="auth-heading">
              Check Your Inbox!
      </Typography>
      <Typography className="auth-heading">
              We’ve sent you a reset password link to i**********6@gm***.com
      </Typography>
      <Typography className="input-label text-center" variant="body1" gutterBottom>
        <Link className="link sign-up">
                Need help?
        </Link>
      </Typography>
    </AuthenticationWrapper>
  );
};
