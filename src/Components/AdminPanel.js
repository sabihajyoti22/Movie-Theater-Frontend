import React from 'react'
import { Container, Table } from 'react-bootstrap'
import { RiDeleteBin6Line } from 'react-icons/ri'

export default function AdminPanel() {
    return (
        <>
            <Container className='pb-5'>
                <h1 style={{ color: '#3844CE' }} className='text-center py-5'>All Movies</h1>
                <Table striped bordered responsive hover className='my-5'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Duration</th>
                            <th>Release Date</th>
                            <th>Genre</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Location</th>
                            <th>Movie Image</th>
                            <th>Created On</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td className='text-center'>
                                <img src='Images/image1.jpg' alt='Movie' height="110" width="80" />
                            </td>
                            <td>@mdo</td>
                            <td className='text-center'><RiDeleteBin6Line /></td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    )
}
