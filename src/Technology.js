import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const Technology = () => {

    const {data:technologies}=useFetch('http://localhost:8000/technology');

    const[name, setName]=useState('');
    const[description, setDescription]=useState('');
    const[landscapeImage, setlandscapeImage]=useState('');
    const[portraitImage, setportraitImage]=useState('');

    const[active, setActive]=useState('');

    const handleClick=(technology, index)=>{
        setName(technology.name);
        setDescription(technology.description);
        setlandscapeImage(technology.images.landscape);
        setportraitImage(technology.images.portrait);
        setActive(index);
    }

    useEffect(()=>{
        if(technologies){
            handleClick(technologies[0], 0);
        };
    },[technologies]);

    return (
        <div className="technology">
            <h6>
                <span>03</span>
                space launch 101
            </h6>
            <div className="details">
                <div className="bullets">
                    {technologies && technologies.map((technology, index)=>(
                        <span key={index} onClick={()=>handleClick(technology, index)} className={index===active ? 'active' : null}>{index+1}</span>
                    ))}
                </div>
                <div className="terminology">THE TERMINOLOGY…</div>
                <div className="name">{name}</div>
                <p className="description">{description}</p>
            </div>
            <div className="tech-img">
                <img src={landscapeImage} alt="" className="landscape-image"></img>
                <img src={portraitImage} alt="" className="portrait-image"></img>
            </div>
        </div>
    );
};

export default Technology;