import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navigation from './componentes/NavBar.jsx'
import ApiComponent0 from './componentes/ApiComponent_0.jsx'
import ApiComponent1 from './componentes/ApiComponent_1.jsx'
function App() {

  return (
    <>
      {/* Se crea un contenedor fuido para poder utilizar el navbar lateral */}
      <Container fluid className="p-0">
        <Row>
          <Col xs={12} md={2} lg={2} className=" vh-100">
            <Navigation />
          </Col>
          <Col xs={12} md={9} lg={10} className='pt-3'>
            {/* Se crean las rutas del frontend */ }
            <Routes>
              <Route path="/" element={<ApiComponent0 />} /> 
              <Route path="/api1" element={<ApiComponent1 />} />  
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
