import * as React from "react";

import TableCell, { tableCellClasses } from "@mui/material/TableCell";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { categoryData } from "../../constants/categoryData";
import { makeStyles } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import { theme as thm } from "../../theme";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: theme.palette.common.white,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({

  "&:nth-of-type(1)": {
    backgroundColor: thm.palette.error.main,
  },
  ":nth-of-type(4)": {
    backgroundColor: thm.palette.warning.main,
  },
  "&:nth-of-type(7)": {
    backgroundColor: thm.palette.success.main,
  },
  "&:nth-of-type(10)": {
    backgroundColor: thm.palette.primary.main,
  },
  "&:nth-of-type(13)": {
    backgroundColor: thm.palette.secondary.main,
  },

  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(percentiles: number[]): any[] {
  const tableData: any[] = [];

  for (const data of categoryData) {
    const EMPTY: string = "";

    if (data.isOcean) {
      tableData.push({
        category: data.category + " (" + data.categoryAbbr + ")",
        aspect: EMPTY,
        percentile: "22%",
      });
    } else {
      tableData.push({
        category: EMPTY,
        aspect: data.category + " (" + data.categoryAbbr + ")",
        percentile: "22%",
      });
    }
  }

  return tableData;
}

const rows = createData([22, 33]);

const LabelTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Big 5 Trait</StyledTableCell>
            <StyledTableCell align="left">Aspect</StyledTableCell>
            <StyledTableCell align="left">Percentile</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.category}>
              <StyledTableCell component="th" scope="row">
                <strong>{row.category}</strong>
              </StyledTableCell>
              <StyledTableCell align="left">{row.aspect}</StyledTableCell>
              <StyledTableCell align="left">{row.percentile}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LabelTable;
