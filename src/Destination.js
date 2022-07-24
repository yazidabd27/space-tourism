import { useEffect, useState } from "react";
import data from "./myData.json"

const Destination = () => {
    
    const[image, setImage]=useState(data.destinations[0].images.png);
    const[name, setName]=useState(data.destinations[0].name);
    const[description, setDescription]=useState(data.destinations[0].description);
    const[distance, setDistance]=useState(data.destinations[0].distance);
    const[travel, setTravel]=useState(data.destinations[0].travel);
    const[active, setActive]=useState(0);

    const handleClick=(destination,index)=>{
        setImage(destination.images.png);
        setName(destination.name);
        setDescription(destination.description);
        setDistance(destination.distance);
        setTravel(destination.travel);
        setActive(index)
    };

    return (
        <div className="destination">
            <h6>
                <span>01</span>
                Pick your destination
            </h6>
    
            <div className="destination-img">
                <img src={image} alt=""></img>
            </div>
            <div className="details">
                <ul>
                    {data.destinations.map((destination, index) =>(
                        <li key={index} onClick={()=>handleClick(destination, index)} className={active===index ? 'active' : null}>{destination.name}</li>
                        ))
                    }
                </ul>
                <h1>{name}</h1>
                <p className="description">{description}</p>
                <hr></hr>
                <div className="average-distance">
                    avg. distance
                    <div className="distance">{distance}</div>
                </div>
                <div className="travel-time">
                    est. travel time
                    <div className="time">{travel}</div>
                </div>
            </div>
    
        </div>
    );
}

export default Destination;