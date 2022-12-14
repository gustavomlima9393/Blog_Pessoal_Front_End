import Menu from "@material-ui/core/Menu";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@material-ui/core";
import { Box } from '@mui/material';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Navbar.css';
import { color } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
import { toast } from "react-toastify";

function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();
  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(""));
    toast.info("Usuário deslogado", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
    });
    navigate('/login')
  }

  var navbarComponent;

  if (token !== "") {
    navbarComponent = <AppBar position="static" style={{ backgroundColor: '#0a0124' }}>
      <Toolbar variant="dense">
        <Box className="cursor">
          <Typography variant="h5" color="inherit">
            Blog do Gustavo
          </Typography>
        </Box>

        <Box display="flex" justifyContent="start">
          <Link to="/home" className="text-decorator-none">
            <Box mx={2} className="cursor">
              <Typography variant="h6" color="inherit">
                Home
              </Typography>
            </Box>
          </Link>
          <Link to="/posts" className="text-decorator-none">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Postagens
              </Typography>
            </Box>
          </Link>
          <Link to="/temas" className="text-decorator-none">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Temas
              </Typography>
            </Box>
          </Link>
          <Link to="/formulariotema" className="text-decorator-none">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Cadastrar Tema
              </Typography>
            </Box>
          </Link>

          <Box mx={1} className="cursor" onClick={goLogout}>
            <Typography variant="h6" color="inherit">
              Logout
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  }
  return (
    <>
      {navbarComponent}
    </>
  );
}

export default Navbar;