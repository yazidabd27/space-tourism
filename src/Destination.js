import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const Destination = () => {

    const {data:destinations}=useFetch('http://localhost:8000/destinations');

    const[image, setImage]=useState('');
    const[name, setName]=useState('');
    const[description, setDescription]=useState('');
    const[distance, setDistance]=useState('');
    const[travel, setTravel]=useState('');

    
    const[active, setActive]=useState(0);

    const handleClick=(destination,index)=>{
        setImage(destination.images.png);
        setName(destination.name);
        setDescription(destination.description);
        setDistance(destination.distance);
        setTravel(destination.travel);
        setActive(index)
    };

    useEffect(()=>{
        if(destinations){
            handleClick(destinations[0], 0)
        }
    },[destinations]);

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
                    {destinations && destinations.map((destination, index) =>(
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