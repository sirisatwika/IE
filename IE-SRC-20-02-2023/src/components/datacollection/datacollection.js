import React from 'react';
import { Grid } from "@mui/material";
import DeviceCategory from './DeviceCategory';

function Datacollection() {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
            <div className='p_title'>
              <h1>Data Collection</h1>
            </div>
          <DeviceCategory />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
export default Datacollection;