import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Select from './Components/Header/Select'
import Upload from './Components/Header/Upload'
import Header from './Components/Header/Header'
import AddIcon from '@mui/icons-material/Add';
import Gallery from './Components/Header/Gallery'
import Button from '@mui/material/Button';


import Modal from 'react-modal';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    // 'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function App() {
  const [value, setValue] = React.useState(0);
  const [showModal, setShowModal] = React.useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onOpen = () => {

    setShowModal(true)
    console.log(showModal)
  }
  return (
    <>
      <Header />
      <div style={{backgroundColor:'#CFCFCF', display:'flex', justifyContent:'center'}}>
        <div style={{border:'1px solid #CFCFCF', height:400, width:700, backgroundColor:'#FFF',
         display: 'flex',margin:20 ,padding:10}}>
            <div >
              <div>
                <h4>Set up your WorkPerk</h4>
                <p>Work perks set up will only take a minute</p>

                <strong >Image</strong>
                <div
                  style=
                  {{
                    marginTop: 10, border: '1px solid  #CFCFCF', height: '50px', width: '50px', backgroundColor: 'lighblue',
                    justifyContent: 'center', alignItems: 'center', flex: 1, display: 'flex', padding: 10
                  }}>
                  <AddIcon color="disabled"/>
                  </div>

              </div>
              <Button variant='contained'  style={{backgroundColor:"3a7ca5", padding:5,marginTop:'50px',bottom:0,left:0}}
                onClick={onOpen}>Next</Button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        height='20px'
      >
        <Box sx={{width:'50%', backgroundColor: '#FFFF', margin: 10 }}>
          <h4>Select Images</h4>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Gallery" {...a11yProps(0)} />
              <Tab label="Upload" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Gallery />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Upload />
          </TabPanel>
          <div style={{padding:15,bottom:0, right:0,display:'flex',justifyContent:'flex-end', borderTop:'1px solid #CFCFCF'}}>
            <Button style={{backgroundColr:'#CFCFCF',marginRight:5}} variant='inherit' onClick={() => setShowModal(false)}>Close</Button>
            <Button variant='contained'>Select</Button>
          </div>
        </Box>
      </Modal>
    </>
  );
}
