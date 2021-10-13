import React, { useState} from 'react';
import Tarjeta from 'react-tinder-card';

function Inicio() {
    const [persona, setPersona] = useState([]);


    return (
        <div className="tarjeta_H">
            <div className="tarjeta_C">
                {persona.map(persona=>(
                    <Tarjeta
                        className="swipe"
                        key={persona.name}
                        preventSwipe={['up', 'down']}
                    >   
                    <div
                    className="tarjeta_P"
                    >
                    <h2> {persona.nombre} </h2>

                    </div>


                    </Tarjeta>
                ))}

            </div>
            
        </div>
    )
}

export default Inicio
