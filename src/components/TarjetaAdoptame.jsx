import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const TarjetaAdoptame = ({ adoptame }) => {
  return (
    <Card style={{ width: '18rem' }}>
        {console.log("quiero ver", adoptame.image)}
      <Card.Img variant="top" src={adoptame.imagen} alt={`foto de ${adoptame.nombre}`} />
      <Card.Body>
        <Card.Title>{adoptame.nombre}</Card.Title>
        <Card.Text>
          {adoptame.desc_personalidad}
          <br />
          Edad: {adoptame.edad} - {adoptame.genero}
        </Card.Text>
        <Button variant="primary">Adoptar</Button>
      </Card.Body>
    </Card>
  );
};





// return (
//     <div className="card" style={{ width: "18rem" }}>
//         <img src={adoptame.image} className="card-img-top" alt={`foto de ${adoptame.nombre}`} />
//         <div className="card-body">
//             <h5 className="card-title">{adoptame.nombre}</h5>
//             <p className="card-text">ID: {adoptame.id}</p>
//             <p className="card-text">Edad: {adoptame.edad} - {adoptame.genero}</p>
//             <p className="card-text">Descripción: {adoptame.desc_personalidad}</p>
//         </div>
//     </div>
// );