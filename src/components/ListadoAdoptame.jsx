//listado para llamar después a los animalitos
//import React from 'react';
import { TarjetaAdoptame } from './TarjetaAdoptame.jsx';
import { FetchAnimalitos } from '../hooks/FetchAnimalitos';

export const ListadoAdoptame = () => {
    const { animales, loading } = FetchAnimalitos(); // Llamada al hook personalizado

    if (loading) {
        return <p>Cargando...</p>;
    }

    return (
        <div className="container">
            <div className="row">
                {animales.map((adoptame) => (
                    <div key={adoptame.id} className="col-md-4 mb-3">
                        <TarjetaAdoptame adoptame={adoptame} />
                    </div>
                ))}
            </div>
        </div>
    );
};
