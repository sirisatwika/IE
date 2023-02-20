import React from 'react'
import { Card, Grid } from "@mui/material";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PieChartzone from '../datacollection/chart-zone';
import PieChartsubnet from '../datacollection/chart-subnet';
import Deviceprotocol  from '../datacollection/chart-protocol';
import EnhancedTable from '../page/Table';
import Dropdownselect from '../page/dropdownselect';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other} >
      {value === index && (
        <Box sx={{ p: 3 }}>
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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function DeviceCategory() {

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <div className='config-tab'>
            <Dropdownselect/>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='tabs-configuration'>
              <Tab label="General" {...a11yProps(0)} />
              <Tab label="Devices" {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={value} index={0}>
            <div style={{ paddingBottom: '15px' }}>
              <Grid container spacing={2}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Card className='card-configuration'>
                    <h2 class="card_title">IOT Device List</h2>
                    <EnhancedTable />
                  </Card>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Card className='card-configuration' >
                    <h2 class="card_title">IOT Device Categorization</h2>
                    <Grid container spacing={1}>
                      <Grid item lg={4} md={4} sm={12} xs={12}>
                        <h3 className='text-center devicecat'>Zones</h3>
                        <PieChartzone />
                      </Grid>
                      <Grid item lg={4} md={4} sm={12} xs={12}>
                      <h3 className='text-center devicecat'>Subnet</h3>
                        <PieChartsubnet />
                      </Grid>
                      <Grid item lg={4} md={4} sm={12} xs={12}>
                      <h3 className='text-center devicecat'>Protocol</h3>
                       <Deviceprotocol/>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              </Grid>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              Devices Details will be updated...!
            </TabPanel>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
export default DeviceCategory;