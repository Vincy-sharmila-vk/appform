import React, { useContext } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { multiStepContext } from '../StepContext'

function DisplayData() {

    const { oneData } = useContext(multiStepContext);
  return (
    <div>
        <TableContainer style={{display:'flex', justifyContent:'center'}}>
            <Table border="1" style={{width:'70%', justifyContent:'center'}} size='small' aria-label="Captain table">
                <TableHead>
                    <TableRow style={{backgroundColor:'burlywood',color:'aliceblue'}}>
                        <TableCell>First name</TableCell>
                        <TableCell>last name</TableCell>
                        <TableCell>phone number</TableCell>
                        <TableCell>Addtional phone number</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Qualification</TableCell>
                        <TableCell>Specialization</TableCell>
                        <TableCell>collage</TableCell>
                        <TableCell>gender</TableCell>
                        <TableCell>country</TableCell>
                        <TableCell>city</TableCell>


                    </TableRow>
                </TableHead>
                <TableBody>
                    {oneData.map((data) =>(
                        <TableRow key={data.email}>
                            <TableCell>{data.firstname}</TableCell>
                        <TableCell>{data.lastname}</TableCell>
                        <TableCell>{data.phonenumber}</TableCell>
                        <TableCell>{data.additional}</TableCell>
                        <TableCell>{data.address}</TableCell>
                        <TableCell>{data.degree}</TableCell>
                        <TableCell>{data.special}</TableCell>
                        <TableCell>{data.collage}</TableCell>
                        <TableCell>{data.gender}</TableCell>
                        <TableCell>{data.country}</TableCell>
                        <TableCell>{data.city}</TableCell>


                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default DisplayData