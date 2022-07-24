import { useEffect, useState } from "react";
import data from "./myData.json"

const Crew = () => {

    const[role, setRole]=useState(data.crew[0].role);
    const[name, setName]=useState(data.crew[0].name);
    const[bio, setBio]=useState(data.crew[0].bio);
    const[image, setImage]=useState(data.crew[0].images.png);
    const[active, setActive]=useState(0);

    const handleClick=(c, index)=>{
        setRole(c.role);
        setName(c.name);
        setBio(c.bio);
        setImage(c.images.png);
        setActive(index);
    } 

    return (
        <div className="crew">
            <h6>
                <span>02</span>
                meet your crew
            </h6>
            <div className="details">
                <div className="role">{role}</div>
                <div className="name">{name}</div>
                <p className="bio">{bio}</p>
                <div className="bullets">
                    {data.crew.map((c,index)=>(
                        <span key={index} onClick={()=>handleClick(c, index)} className={active===index ? 'active' : null}></span>
                        ))
                    }
                </div>
            </div>
            <div className="crew-img">
                <img src={image} alt=""></img>
            </div>
        </div>
    );
}
 
export default Crew;