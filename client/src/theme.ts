import { createTheme } from "@mui/material";

export const colorPalette = {
  black: "#000",
  blackRussian: "#212127",
  blueNavy: "#262633",
  dark: "#2a2a36",
  darkGrey: "#353540",
  disabled: "#FFFFFF61",
  doveGray: "#6F6F6F",
  errorRed: "#ED5F63",
  gray: "#262626",
  graySeventy: "#B3B3B3",
  green: "#3cd1b6",
  greenDark: "rgb(60,209,182,.6)",
  grey: "#41414A",
  hover: "#35354A",
  jaguar: "#18171D",
  lightGreen: "#3CD1BF",
  lightGrey: "#CBCBCB",
  purple: "#bf8aff",
  purpleDark: "#ac7ee6",
  silver: "#C6C6C6",
  spanishGray: "#979797",
  taupeGray: "#888888",
  taupeGrayShade: "#88888826",
  white: "#fff",
  yellow: "#FFFD91",
  grey89: "#e3e3e3",
  grey900: "#101828",
};

const commonCss = {
  "&.space-0": {
    padding: 0,
    margin: 0,
  },
  "&.min-h-100vh": {
    minHeight: "100vh",
  },
  "&.max-w-100": {
    maxWidth: "100%"
  },
  "&.d-flex": {
    display: "flex",
  },
  "&.align-center": {
    alignItems: "center",
  },
  "&.justify-center": {
    justifyContent: "center",
  },
  "&.justify-stretch": {
    justifyContent: "center",
  },
  "&.align-stretch": {
    alignItems: "stretch"
  },
  "&.flex-col": {
    flexDirection: "column",
  },
  "&.auth-heading": {
    fontWeight: "500",
    fontSize: "22px",
    textAlign: "center",
    color: colorPalette.grey900,
    margin: "25px 0 25px 0",
  },
  "&.input-label": {
    width: "100%",
    textAlign: "left",
    fontSize: "12px",
    fontWeight: "500",
    color: colorPalette.grey900,
    "&.text-center": {
      textAlign: "center",
    },
  },
  "&.content-container": {
    padding: "100px 20px",
  },
  "&.main-container": {
    "&:after": {
      content: '""',
      width: "100px",
      height: "100px",
      backgroundImage: "url('../../src/assets/emartech-icon.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      bottom: "-40px",
      right: "-50px",
      position: "fixed",
      display: "inline-block",
      opacity: "0.3",
    },
    "&:before": {
      content: '""',
      width: "100px",
      height: "100px",
      backgroundImage: "url('../../src/assets/emartech-icon.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      top: "-40px",
      left: "-35px",
      position: "fixed",
      display: "inline-block",
      opacity: "0.3",
    },
  },

  "@media(max-width: 767px)": {
    "&.d-mobile-none": {
      display: "none",
    },
  },

  "@media(min-width: 480px)": {
    "&.content-container": {
      padding: "100px 40px",
    },
    "&.auth-heading": {
      margin: "25px 0 25px 0",
      fontSize: "24px",
    },
    "&.input-label": {
      fontSize: "14px",
    },
    "&.main-container": {
      "&:before": {
        width: "150px",
        height: "150px",
        top: "-60px",
        left: "-50px",
      },
      "&:after": {
        width: "150px",
        height: "150px",
        bottom: "-60px",
        right: "-75px",
      },
    },
  },
  "@media(min-width: 768px)": {
    "&.content-container": {
      padding: "25px",
    },
    "&.image-container": {
      maxWidth: "340px",
    },
    "&.auth-heading": {
      margin: "6px 0 6px 0",
      fontSize: "18px",
    },
    "&.input-label": {
      fontSize: "12px",
    },
    "&.main-container": {
      "&:before": {
        display: "none",
      },
      "&:after": {
        width: "200px",
        height: "200px",
        bottom: "-95px",
        right: "-95px",
      },
    },
  },
  "@media(min-width: 900px)": {
    "&.image-container": {
      maxWidth: "420px",
    },
    "&.auth-heading": {
      margin: "6px 0 6px 0",
      fontSize: "18px",
    },
    "&.input-label": {
      fontSize: "12px",
    },
  },
  "@media(min-width: 1080px)": {
    "&.image-container": {
      maxWidth: "460px",
    },
    "&.auth-heading": {
      margin: "12px 0 12px 0",
      fontSize: "20px",
    },
    "&.input-label": {
      fontSize: "12px",
    },
  },
  "@media(min-width: 1260px)": {
    "&.image-container": {
      maxWidth: "530px",
    },
    "&.auth-heading": {
      margin: "15px 0 15px 0",
      fontSize: "22px",
    },
    "&.input-label": {
      fontSize: "12px",
    },
  },
  "@media(min-width: 1800px)": {
    "&.image-container": {
      flexBasis: "35%",
      maxWidth: "100%",
    },
    "&.content-container": {
      flexBasis: "65%",
      maxWidth: "100%",
    },
    "&.auth-heading": {
      margin: "30px 0 30px 0",
      fontSize: "34px",
    },
    "&.input-label": {
      fontSize: "16px",
    },
  },
}

export const baseTheme = createTheme({
  palette: {
    common: {
      ...colorPalette,
    },
  },
  zIndex: {
    // Since for most of the existing modals, value of z-index is 10000
    modal: 10000,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "&.emar-logo": {
          maxWidth: '200px',
          width: '100%',
        },
        "&.input-label": {
          width: "100%",
          textAlign: "left",
          fontSize: "12px",
          fontWeight: "500",
          color: colorPalette.grey900,
          "&.text-center": {
            textAlign: "center",
          },
        },
        "&.span-content": {
          "&.MuiBox-root": {
            width: "max-content",
          },
          position: "absolute",
          background: "white",
          padding: "0 30px",
        },
        ".link-holder": {
          textAlign: "right",
        },
        ".MuiBox-root": {
          width: "100%",
          "&.flex-center": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          "&.justify-between": {
            justifyContent: "space-between",
          },
          "&.justify-start": {
            justifyContent: "flex-start",
          },
          "&.sm-flex-col": {
            flexDirection: "column",
          },
          "&.flex-col": {
            flexDirection: "column",
          },
          "&.auth-container": {
            flexDirection: "column",
            maxWidth: "780px",
          },
          "&.form-container": {
            flexDirection: "column",
          },
          "&.position-relative": {
            position: "relative",
          },
          "&.divider-box": {
            margin: "20px 0 30px 0",
          },
          "&.sign-up-box": {
            marginTop: "30px",
          },
        },


        "@media(min-width: 480px)": {
          "&.emar-logo": {
            maxWidth: "180px",
          },
          "&.input-label": {
            fontSize: "14px",
          },
          ".MuiBox-root": {
            "&.link-holder": {

            },
            "&.divider-box": {
              
            },
            "&.sign-up-box": {

            },
          },
        },
        "@media(min-width: 768px)": {
          "&.emar-logo": {
            maxWidth: '150px',
          },
          "&.input-label": {
            fontSize: "12px",
          },
          ".MuiBox-root": {
            "&.flex-center": {
              "&.sm-flex-col": {
                flexDirection: "row",
              },
            },
            "&.form-container": {
              "&.ml-10": {
                marginLeft: "10px"
              },
              "&.mr-10": {
                marginRight: "10px"
              },
            },
            "&.link-holder": {
              margin: "5px 0 10px 0",
            },
            "&.divider-box": {
              margin: "5px 0 10px 0",
            },
            "&.sign-up-box": {
              marginTop: "10px",
            },
          },
        },
        "@media(min-width: 900px)": {
          "&.emar-logo": {
            maxWidth: '160px',
          },
          "&.input-label": {
            fontSize: "12px",
          },
          ".MuiBox-root": {
            "&.link-holder": {
              margin: "5px 0 10px 0",
            },
            "&.divider-box": {
              margin: "5px 0 15px 0",
            },
            "&.sign-up-box": {
              marginTop: "15px",
            },
          },
        },
        "@media(min-width: 1080px)": {
          "&.emar-logo": {
            maxWidth: '180px',
          },
          "&.input-label": {
            fontSize: "12px",
          },
          ".MuiBox-root": {
            "&.link-holder": {
              margin: "5px 0 15px 0",
            },
            "&.divider-box": {
              margin: "10px 0 20px 0",
            },
            "&.sign-up-box": {
              marginTop: "20px",
            },
          },
        },
        "@media(min-width: 1260px)": {
          "&.emar-logo": {
            maxWidth: '200px',
          },
          "&.input-label": {
            fontSize: "12px",
          },
          ".MuiBox-root": {
            "&.link-holder": {
              margin: "5px 0 15px 0",
            },
            "&.divider-box": {
              margin: "10px 0 20px 0",
            },
            "&.sign-up-box": {
              marginTop: "20px",
            },
          },
        },
        "@media(min-width: 1800px)": {
          "&.emar-logo": {
            maxWidth: '300px',
          },
          "&.input-label": {
            fontSize: "16px",
          },
          ".MuiBox-root": {
            "&.link-holder": {
              margin: "5px 0 30px 0",
            },
            "&.divider-box": {
              margin: "20px 0 30px 0",
            },
            "&.sign-up-box": {
              marginTop: "30px",
            },
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.MuiInputBase-input": {

          },
          margin: "15px 0 25px 0",
          "@media(min-width: 480px)": {
  
          },
          "@media(min-width: 768px)": {
            margin: "10px 0 10px 0",
          },
          "@media(min-width: 900px)": {
            margin: "10px 0 10px 0",
          },
          "@media(min-width: 1080px)": {
            margin: "10px 0 10px 0",
          },
          "@media(min-width: 1260px)": {
            margin: "10px 0 15px 0",
          },
          "@media(min-width: 1800px)": {
            margin: "15px 0 25px 0",
            "&.MuiInputBase-input": {

            },
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          ...commonCss,
          cursor: "pointer",
          "&.link": {
            fontSize: "12px",
            textDecoration: "none",
            color: colorPalette.grey900,
            "@media(min-width: 480px)": {
              fontSize: "12px",
              "&.sign-up": {
                fontSize: "12px",
              },
            },
            "@media(min-width: 768px)": {
              fontSize: "12px",
            },
            "@media(min-width: 900px)": {
              fontSize: "12px",
            },
            "@media(min-width: 1080px)": {
              fontSize: "12px",
            },
            "@media(min-width: 1260px)": {
              fontSize: "12px",
            },
            "@media(min-width: 1800px)": {
              fontSize: "14px",
            },
          },
          "&.sign-up": {
            marginLeft: "5px",
            color: "#029358",
            marginRight: "5px",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {

        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {

        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {

        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          "&:hover": {
              
          },
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
            
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {

        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
            
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          ...commonCss,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          ...commonCss,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          margin: "10px 0 10px 0",
          width: "100%",
          textTransform: "none",
          padding: "13px 15px",
          transition: "none",
          border: "1px solid rgba(0, 0, 0, 0.23)",
          "&.auth-btn": {
            background: "linear-gradient(90deg, rgba(6,150,88,1) 0%, rgba(6,150,88,1) 35%, rgba(56,198,78,1) 100%)",
            "&.input-label": {
              color: "white",
            },
          },
          ".MuiSvgIcon-root": {
            marginRight: "10px",
          },
          ...commonCss,
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
          },
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
          },
        },
        {
          props: { variant: "outlined", color: "error" },
          style: {

          },
        },
      ],
    },
    MuiIconButton:
      {
        styleOverrides: {
          root:
          {
          },
        },
      },
    MuiToolbar: {
      styleOverrides: {
        root: {
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          marginBottom: "15px"
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {

        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root:  {
        },
      },
    },
    MuiSwitch: {
       
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
            
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {

        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        popper: {
    
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {

        },
      },
    },
  },
  typography: {
    // eslint-disable-next-line quotes
    fontFamily: `Poppins`,
    fontSize: 14,
  },
});