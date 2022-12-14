import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { Box } from "@mui/material";
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
    }
    return (
        <>
            <TabContext value={value}>
                <AppBar position="static" style={{ backgroundColor: '#0a0124' }}>
                    <Tabs centered indicatorColor="primary" onChange={handleChange}>
                        <Tab label="Todas as postagens" value="1" />
                        <Tab label="Sobre mim" value="2" />
                    </Tabs>
                </AppBar>
                <TabPanel value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-mim</Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Desenvolvedor Web Júnior formado pela Generation Brasil com muita garra e vontade de aprender! Esse projeto foi desenvolvido como task no bootcamp da Gen, mas utilizo ele para estudar React, Typescript e CSS.</Typography>
                </TabPanel>
            </TabContext>
        </>
    );
}
export default TabPostagem;