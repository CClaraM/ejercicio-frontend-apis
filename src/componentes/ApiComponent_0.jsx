import { useEffect, useState } from "react"
import { Container, Row, Col } from 'react-bootstrap';
import CardItem from "./CardItem";

export default function ApiComponent0(){
    const [product, setProduct] = useState([])
    
    useEffect(()=>{
        loading()
    })

    const loading=()=>{
        fetch('https://dummyjson.com/products')
        .then(r => r.json())
        .then(data =>{
        setProduct(data.products)
        // Se trae la informacion del endpoint, se espera esta estructura
        //  DATA{productos{{},{},{},......}}
        //  no hay Try catch,
    });
    }
    return(
        

        <Container className="mt-4"> {/*  Se crea el contenedor para las tarjetas */ }
            <Row>
                {/** Se recorre el arreglo y se insertan los campos de tarjetas */}
                {product.map((p) => (
                <Col key={p.id} md={4} className="mb-4">
                    <CardItem
                    title={p.title}
                    description={p.description}
                    image={p.thumbnail}
                    price={p.price}
                    category={p.category}
                    />
                </Col>
                ))}
            </Row>
        </Container>
    )
}