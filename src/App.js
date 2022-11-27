import Grid from "@mui/material/Grid";
import { Provider } from "react-redux";
import MyForm from "./components/MyForm";
import store from "./store";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline, Switch } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import EnhancedTable from "./components/MyTable";

const App = () => {
  const [toggleDark, settoggleDark] = React.useState(false);
  const myTheme = createTheme({
    palette: {
      type: toggleDark ? "dark" : "light",
    },
  });

  const handleModeChange = () => {
    settoggleDark(!toggleDark);
  };

  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              React Coding Test-Gaurav Wagh
            </Typography>
            <Switch
              checked={toggleDark}
              onChange={handleModeChange}
              name="toggleDark"
              color="default"
            />
          </Toolbar>
        </AppBar>
      </Box>

      <br />
      <Provider store={store}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} md={4} lg={6}>
            <MyForm />
          </Grid>
          <Grid item xs={12} md={8} lg={6}>
            <EnhancedTable />
          </Grid>
        </Grid>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
