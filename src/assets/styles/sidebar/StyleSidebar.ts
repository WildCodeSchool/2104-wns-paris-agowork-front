import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import styled from "styled-components";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
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
      overflowY: "hidden",
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

export const Logo = styled.div`
  margin-bottom: 20px;
  padding: 1rem;
  border-radius: 10px;
  .esc {
    width: 100%;
    margin-right: 1rem;
  }
`;

export const SocialOpen = styled.div`
  margin-top: 140%;
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
  .power {
    color: white;
    background-color: #0845bc;
    border-radius: 100%;
    font-size: 250%;
    padding: 10%;
    margin-right: 1rem;
  }
  a {
    color: white;
  }
  .facebook {
    background-color: #1877f2;
    &:hover {
      border-radius: 10px;
      padding: 5px;
      background-color: #1877f2;
      box-shadow: inset 0 -3.25em 0 0 var(--hover);
    }
  }
  .twitter {
    background-color: #38a1f2;
    &:hover {
      border-radius: 10px;
      padding: 5px;
      background-color: #38a1f2;
      box-shadow: inset 0 -3.25em 0 0 var(--hover);
    }
  }
  .linkedin {
    background-color: #2366c2;
    &:hover {
      border-radius: 10px;
      padding: 5px;
      background-color: #2366c2;
      box-shadow: inset 0 -3.25em 0 0 var(--hover);
    }
  }
  .youtube {
    background-color: #f40106;
    &:hover {
      border-radius: 10px;
      padding: 5px;
      background-color: #f40106;
    }
  }
`;

export const SocialClose = styled.div`
  margin-top: 250%;
  margin-right: 1rem;
  padding: 20%;
  border-radius: 10px;
  div {
    color: white;
    display: flex;
    justify-content: space-around;
  }
  .social {
    font-size: 150%;
  }
  .power {
    color: white;
    background-color: #0845bc;
    border-radius: 100%;
    padding: 10%;
    margin-top: 1rem;
  }
  a {
    color: white;
  }
  .facebook {
    background-color: #1877f2;
    &:hover {
      border-radius: 10px;
      padding: 5px;
      background-color: #1877f2;
      box-shadow: inset 0 -3.25em 0 0 var(--hover);
    }
  }
  .twitter {
    background-color: #38a1f2;
    margin-top: 1rem;
    &:hover {
      border-radius: 10px;
      padding: 5px;
      background-color: #38a1f2;
      box-shadow: inset 0 -3.25em 0 0 var(--hover);
    }
  }
  .linkedin {
    background-color: #2366c2;
    margin-top: 1rem;
    &:hover {
      border-radius: 10px;
      padding: 5px;
      background-color: #2366c2;
      box-shadow: inset 0 -3.25em 0 0 var(--hover);
    }
  }
  .youtube {
    background-color: #f40106;
    margin-top: 1rem;
    &:hover {
      border-radius: 10px;
      padding: 5px;
      background-color: #f40106;
    }
  }
`;
