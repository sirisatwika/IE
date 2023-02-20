import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import '../page/table.css';

function createData(deviceId, deviceName, protocol, type, latitude, longitude, ipAddress, datacollected) {
  return {
    deviceId, deviceName, protocol, type, latitude, longitude, ipAddress, datacollected
  };
}

const rows = [
  createData('Device-01', 'Device Name-01', 'MQTT', 'Value-01', '82634876', '82634876', '2401:4900:607b', 'Temperature',),
  createData('Device-02', 'Device Name-02', 'REST', 'Value-02', '82634876', '82634876', '2401:4900:607b', 'Speed',),
  createData('Device-03', 'Device Name-03', 'Modbus', 'Value-03', '82634876', '82634876', '2401:4900:607b', 'Current',),
  createData('Device-04', 'Device Name-04', 'REST', 'Value-04', '82634876', '82634876', '2401:4900:607b', 'Temperature',),
  createData('Device-05', 'Device Name-05', 'Modbus', 'Value-05', '82634876', '82634876', '2401:4900:607b', 'Speed',),
  createData('Device-06', 'Device Name-06', 'REST', 'Value-06', '826348761', '826348761', '2401:4900:606b', 'Temperature',),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'deviceId',
    numeric: false,
    disablePadding: false,
    label: 'IOT Device ID',
  },
  {
    id: 'deviceName',
    numeric: true,
    disablePadding: false,
    label: 'IOT Device Name',
  },
  {
    id: 'protocol',
    numeric: false,
    disablePadding: false,
    label: 'Protocol',
  },
  {
    id: 'type',
    numeric: true,
    disablePadding: false,
    label: 'Type',
  },
  {
    id: 'latitude',
    numeric: true,
    disablePadding: false,
    label: 'Latitude',
  },
  {
    id: 'longitude',
    numeric: true,
    disablePadding: false,
    label: 'Longitude',
  },
  {
    id: 'ipAddress',
    numeric: true,
    disablePadding: false,
    label: 'IP Address',
  },
  {
    id: 'datacollected',
    numeric: false,
    disablePadding: false,
    label: 'Data Collected',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox color="primary" indeterminate={numSelected > 0 && numSelected < rowCount} checked={rowCount > 0 && numSelected === rowCount} onChange={onSelectAllClick} inputProps={{ 'aria-label': 'select all desserts' }} />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel active={orderBy === headCell.id} direction={orderBy === headCell.id ? order : 'asc'} onClick={createSortHandler(headCell.id)}>
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;
  return (
    <Toolbar className='e_toolbar'
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography className='e-rowselect' sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div" > {numSelected} selected
        </Typography>
      ) : (
        <Typography className='e_title' sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
          Total Device Connected: 890
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      ) : (
        <div className='table_top'>
          {/* <div className='t_label'>Add Label</div>
          <div className='t_refresh'>
            Last Data Refereshed <span>a min ago</span>
          </div> */}
          <Tooltip title="Filter list">
            <IconButton>
              <FilterListIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </div>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('serialNo');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  // const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.deviceId);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, deviceId) => {

    event.stopPropagation();

    const selectedIndex = selected.indexOf(deviceId);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, deviceId);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleRowClick = (event, id) => {
    console.log("row link");
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (deviceId) => selected.indexOf(deviceId) !== -1;

  return (

    <React.Fragment>
      <EnhancedTableToolbar numSelected={selected.length} />
      <TableContainer>
        <Table className='edge_table' aria-labelledby="tableTitle" >
          <EnhancedTableHead numSelected={selected.length} order={order} orderBy={orderBy} onSelectAllClick={handleSelectAllClick} onRequestSort={handleRequestSort} rowCount={rows.length} />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const isItemSelected = isSelected(row.deviceId);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow hover onClick={(event) => handleRowClick(event, row.deviceId)} role="checkbox" aria-checked={isItemSelected} tabIndex={-1} key={row.deviceId} selected={isItemSelected}>
                    <TableCell component='td' padding="checkbox" >
                      <Checkbox color="primary" onClick={(event) => handleClick(event, row.deviceId)} checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} />
                    </TableCell>
                    <TableCell component='td' size='small'> {row.deviceId}</TableCell>
                    <TableCell component='td' size='small'>{row.deviceName}</TableCell>
                    <TableCell component='td' size='small'>{row.protocol}</TableCell>
                    <TableCell component='td' size='small'>{row.type}</TableCell>
                    <TableCell component='td' size='small'>{row.latitude}</TableCell>
                    <TableCell component='td' size='small'>{row.longitude}</TableCell>
                    <TableCell component='td' size='small'>{row.ipAddress}</TableCell>
                    <TableCell component='td' size='small'>{row.datacollected}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination rowsPerPageOptions={[5, 10, 25]} component="div" count={rows.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} className="edgetable_pagination"/>
    </React.Fragment>
  );
}
export default EnhancedTable;