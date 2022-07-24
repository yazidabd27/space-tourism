import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const Crew = () => {

    const {data:crew}=useFetch('http://localhost:8000/crew');

    const[role, setRole]=useState('');
    const[name, setName]=useState('');
    const[bio, setBio]=useState('');
    const[image, setImage]=useState('');

    const[active, setActive]=useState('');

    const handleClick=(c, index)=>{
        setRole(c.role);
        setName(c.name);
        setBio(c.bio);
        setImage(c.images.png);
        setActive(index);
    }

    useEffect(()=>{
        if(crew){
            handleClick(crew[0], 0)
        }
    },[crew]) 

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
                    {crew && crew.map((c,index)=>(
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