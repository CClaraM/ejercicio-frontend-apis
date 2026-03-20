import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CardItem = ({ title, description, image, price, category }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={image}
        style={{ height: '500px', objectFit: 'cover' }}
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>

        <Card.Text style={{ fontSize: '0.9rem' }}>
          {description?.slice(0, 80)}...
        </Card.Text>

        <div className="mt-auto">
          {category && (
            <span className="badge bg-secondary mb-2">
              {category}
            </span>
          )}

          {price && (
            <h5 className="text-primary">${price}</h5>
          )}

          <Button variant="primary" className="w-100">
            Ver más
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardItem;