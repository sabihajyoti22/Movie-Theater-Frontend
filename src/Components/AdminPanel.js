import React, { useContext } from 'react'
import { Container, Table } from 'react-bootstrap'
import { RiDeleteBin6Line } from 'react-icons/ri'

import { UserContext } from '../UserContext'

export default function AdminPanel({ movies, onGetId }) {
    var i = 0;
    const { serverURL } = useContext(UserContext)

    const handleDelete = (id) => {
        onGetId(id)
    }

    const getStatus = (status) => {
        var colorTime = ""
        switch (status) {
            case "1": colorTime = "#55C8FF"
                break;
            case "2": colorTime = "#5BDF83"
                break;
            case "3": colorTime = "#FFD564"
                break;
            default:
                break;
        }
        return colorTime
    }

    return (
        <>
            <Container className='pb-5'>
                <h1 style={{ color: '#3844CE' }} className='text-center py-5'>All Movies</h1>

                <Table striped responsive hover className='my-5'>
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
                            <th>Hall</th>
                            <th>Movie Image</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((data) => {
                            const { _id, name, duration, releaseDate, genre, price, category, location, hall, image } = data
                            return <tr key={_id}>
                                <td>{++i}</td>
                                <td>{name}</td>
                                <td>{duration}</td>
                                <td>{releaseDate}</td>
                                <td>{genre}</td>
                                <td>{price}</td>
                                <td>{category}</td>
                                <td>
                                    <ul>
                                        {location.map((item, index) => {
                                            return <li key={index}>{item}</li>
                                        })}
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Hall 1
                                            <ul title='Show Times'>
                                                {hall.hall1.map((item, index) => {
                                                    return <li style={{ backgroundColor: getStatus(item.status) }} key={index} className="ps-2 rounded-pill mb-1">{item.day + " " + item.time}</li>
                                                })}
                                            </ul>
                                        </li>
                                        <li>Hall 2
                                            <ul title='Show Times'>
                                                {hall.hall2.map((item, index) => {

                                                    return <li style={{ backgroundColor: getStatus(item.status) }} key={index} className="ps-2 rounded-pill mb-1">{item.day + " " + item.time}</li>
                                                })}
                                            </ul>
                                        </li>
                                        <li>Hall 3
                                            <ul title='Show Times'>
                                                {hall.hall3.map((item, index) => {
                                                    return <li style={{ backgroundColor: getStatus(item.status) }} key={index} className="ps-2 rounded-pill mb-1">{item.day + " " + item.time}</li>
                                                })}
                                            </ul>
                                        </li>
                                        <li>Hall 4
                                            <ul title='Show Times'>
                                                {hall.hall4.map((item, index) => {
                                                    return <li style={{ backgroundColor: getStatus(item.status) }} key={index} className="ps-2 rounded-pill mb-1">{item.day + " " + item.time}</li>
                                                })}
                                            </ul>
                                        </li>
                                    </ul>
                                </td>
                                <td className='text-center'>
                                    <img src={serverURL + "/Uploads/Images/Movies/" + image} alt='Movie' height="110" width="80" />
                                </td>
                                <td className='text-center'>
                                    <RiDeleteBin6Line onClick={() => handleDelete(_id)} className="delete-design fs-3" />
                                </td>
                            </tr>
                        })}

                    </tbody>
                </Table>
            </Container>
        </>
    )
}
