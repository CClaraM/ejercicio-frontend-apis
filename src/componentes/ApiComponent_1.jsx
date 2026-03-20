import { useEffect, useState } from "react"
import { Container, Table } from 'react-bootstrap';

export default function ApiComponent1(){
    const [user, setUser]=useState([])
    useEffect(()=>{
        cargarDatos()
    },[]);
    const cargarDatos=()=>{
        console.log("Cargar funcion");
        // Estructura de fetch
        fetch("https://dummyjson.com/users")
        .then(res=>res.json())
        .then(data=>{
            setUser(data.users)
        })
        // Se trae la informacion del endpoint, se espera esta estructura
        //  DATA{users{{},{},{},......}}
        //  no hay Try catch,
    }
    return(
        <Container className="mt-4" >
            <h1 className="mb-4 text-centre">Lstado de usuarios</h1>
            <Table striped bordered hover responsive className="shadow-sm align-middle">
                <thead className="table-dark">
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Direccion</th>
                    </tr>
                </thead>
                <tbody>
                    {/** Se recorre el arregolo y se insertan los datos ejemplo: row<dato,dato,dato> */}
                    {user.map((u)=>(
                        <tr key={u.id}>
                        
                            <td>{u.id}</td>
                            <td>{u.firstName} {u.lastName}</td>
                            <td>{u.email}</td>
                            <td>{u.username}</td>
                            <td>{u.address.address}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}