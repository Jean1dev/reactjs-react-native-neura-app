import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography, Button } from "@material-ui/core/";
import FirebaseService from '../../services/FirebaseService';
import { privateUrls } from '../../utils/url';
import { Link } from 'react-router-dom'

export const DataTable = ({ data }) => {

    const remove = (id) => {
        FirebaseService.remove(id, 'users');
    };

    return <React.Fragment>
        <Typography variant="headline" component="h2">Add New</Typography>
        <Table selectable={false}>
            <TableHead>
                <TableRow>
                    <TableCell>Key</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Password</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    data.map((item, index) =>
                        <TableRow key={index}>
                            <TableCell>{item.key}</TableCell>
                            <TableCell>
                                {item.email}
                            </TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.password}</TableCell>
                            <TableCell>
                                <Button
                                    onClick={() => remove(item.key)}>
                                    Remove
                                </Button>
                                <Button component={props =>
                                    <Link to={privateUrls.edit.pathWithouParam + item.key}
                                        {...props} />}>
                                    Edit
                                </Button>
                            </TableCell>
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
    </React.Fragment>
};