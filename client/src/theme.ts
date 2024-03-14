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
};

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
    MuiLink: {
      styleOverrides: {
        root: {
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
    MuiButton: {
      styleOverrides: {
        root: {
          marginBottom: "10px"
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
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
  },
});