import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}
const Header = ({ darkMode, handleThemeChange }: Props) => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">SKI-SHOP</Typography>
        <Switch onChange={handleThemeChange} checked={darkMode} />
      </Toolbar>
    </AppBar>
  );
};
export default Header;
