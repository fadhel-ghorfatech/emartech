import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { useAuth } from "../../contextProviders/authentication";
import { signInService } from "../../services/userServiceCalls";
import { setUserInLocalStorage } from "../../utils";
import { InputField } from "../../components/inputs";
import { ButtonVariants } from "../../components/constants";
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import abc  from "../../assets/Rectangle 2.png";
import xyz  from "../../assets/Rectangle 3.png";


export const LoginForm = () => {
  const { setUser } = useAuth() as any;
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!event.target.checkValidity()) {
      return;
    }

    const username = event.target.username.value;
    const password = event.target.password.value;

    try {
      signInService({
        username,
        password,
      }, (err: any, response: any) => {
        if(err) {
          // Need to handle error case.
        }
        else {
          setUserInLocalStorage(response);
          setUser(response);
        }
      });
    } 
    catch (err) {
      // Handle error
    }
  };

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
       <Container style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Container style = {{ maxWidth: 608 }}>
        <img src={abc} alt="Image 1" style={{ width: '100%' }} />
        <img src={xyz} alt="Image 2" style={{ width: '100%', marginTop: '-275px' }} />
      </Container>
      <Container style={{ display: 'flex', flexDirection: 'column'}}>
          <Typography sx={{
            fontFamily: 'Poppins', 
            fontSize: '34px',
            fontWeight: 500, 
            lineHeight: '51px',
            letterSpacing: '0em', 
            textAlign: 'left',
            alignSelf: 'center'
            }}
          >
            Login
          </Typography>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
        }}>
        <InputField
            label="Username"
            isRequired={true}
          />
          <InputField
            label="Password"
            type={showPassword ? "text" : "password"}
            isRequired={true}
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
          />
        <Button variant={ButtonVariants.OUTLINED}>Login</Button>
        </Box>
        <Link sx={{ display: "flex", justifyContent: "end" }}>Forgot Password?</Link>
        <Box>
          <Box style={{ display: 'flex', alignItems: 'center', marginBottom: "10px"}}>
            <Divider sx={{ flexGrow: 1 }} />
              <Box component={"span"} style={{ margin: '0 10px', whiteSpace: 'nowrap' }}>Or login using</Box>
            <Divider sx={{ flexGrow: 1 }} />
          </Box>
          <Box sx={{ display:"flex", flexDirection: "column"}}>
            <Button variant={ButtonVariants.OUTLINED}><GoogleIcon />Continue with Google</Button>
            <Button variant={ButtonVariants.OUTLINED}><AppleIcon />Continue with Apple</Button>
          </Box>
          <Box style={{ display:"flex", justifyContent: "center"}}>
            <Typography variant="body1" gutterBottom>
              Don't have an account? 
              <Link  style={{ textTransform: 'none', marginLeft: '5px' }}>
                Sign Up
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Container>
    </form>
  );
};
