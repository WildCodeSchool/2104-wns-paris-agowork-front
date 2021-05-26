import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import styled from "styled-components";

const drawerWidth = 250;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
      },
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      background: "white",
      color: "white",
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
      background: "#bdbdbd",
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  })
);

export default useStyles;

export const Initial = styled.div`
  margin-top: -2rem;
`;

export const BtnSwitch = styled.div`
  margin-top: -2rem;
  margin-bottom: 2rem;
`;

export const Logo = styled.div`
  padding: 1rem;
  border-radius: 10px;
  width: 15%;
  background-color: white;
  .esc {
    width: 100%;
    margin-right: 1rem;
  }
`;

export const SocialOpen = styled.div`
  margin-top: 30%;
  margin-bottom: 20%;
  padding: 5%;
  border-radius: 10px;
  div {
    color: white;
    display: flex;
    justify-content: space-around;
  }
  .social {
    pading-left: 20%;
    font-size: 200%;
    margin-top: 25%;
  }
  a {
    color: white;
  }
  .facebook {
    color: #0845bc;
    font-size: 18px;
    &:hover {
      color: #1877f2;
      border-radius: 10px;
      font-size: 18px;
    }
  }
  .twitter {
    color: #0845bc;
    font-size: 18px;
    &:hover {
      color: #38a1f2;
      border-radius: 10px;
      font-size: 18px;
    }
  }
  .linkedin {
    color: #0845bc;
    font-size: 18px;
    &:hover {
      color: #2366c2;
      border-radius: 10px;
      font-size: 18px;
    }
  }
  .youtube {
    color: #0845bc;
    font-size: 18px;
    &:hover {
      color: #f40106;
      border-radius: 10px;
      font-size: 18px;
    }
  }
`;

export const SocialClose = styled.div`
  margin-top: 20%;
  margin-right: 1rem;
  padding: 20%;
  border-radius: 10px;
  div {
    color: white;
    display: flex;
    justify-content: space-around;
  }
  a {
    color: white;
  }
  .facebook {
    color: #0845bc;
    font-size: 18px;
    &:hover {
      color: #1877f2;
      font-size: 18px;
    }
  }
  .twitter {
    color: #0845bc;
    margin-top: 1rem;
    font-size: 18px;
    &:hover {
      color: #38a1f2;
      font-size: 18px;
    }
  }
  .linkedin {
    color: #0845bc;
    margin-top: 1rem;
    font-size: 18px;
    &:hover {
      color: #2366c2;
      font-size: 18px;
    }
  }
  .youtube {
    color: #0845bc;
    margin-top: 1rem;
    font-size: 18px;
    &:hover {
      color: #f40106;
      font-size: 18px;
    }
  }
`;
