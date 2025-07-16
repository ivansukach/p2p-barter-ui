import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable(props) {
    const leftAlignColumn = props.columns[0];
    const rightAlignColumns = props.columns.slice(1);
    console.log("Left Align Column", leftAlignColumn);
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>{leftAlignColumn.name}</TableCell>
                        {rightAlignColumns.map((column) => (
                        <TableCell align="right">{column.name}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows.map((row) => (
                        <TableRow
                            key={leftAlignColumn.key}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row[leftAlignColumn.key]}
                            </TableCell>
                            {rightAlignColumns.map((column) => (
                            <TableCell align="right">{row[column.key]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}