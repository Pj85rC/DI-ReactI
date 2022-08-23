import React from "react";


    const Card = ({title, picture, description}) => {
        return (
            <> 
                <img src={picture} className="card-img-top" alt={title} />
                <h2>{title}</h2>
                <h5>{description}</h5>
            </>
        )
    }


export default Card;
