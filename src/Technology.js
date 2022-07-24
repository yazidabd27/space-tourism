import { useEffect, useState } from "react";
import data from "./myData.json"

const Technology = () => {

    const[name, setName]=useState(data.technology[0].name);
    const[description, setDescription]=useState(data.technology[0].description);
    const[landscapeImage, setlandscapeImage]=useState(data.technology[0].images.landscape);
    const[portraitImage, setportraitImage]=useState(data.technology[0].images.portrait);
    const[active, setActive]=useState(0);

    const handleClick=(tech, index)=>{
        setName(tech.name);
        setDescription(tech.description);
        setlandscapeImage(tech.images.landscape);
        setportraitImage(tech.images.portrait);
        setActive(index);
    };

    return (
        <div className="technology">
            <h6>
                <span>03</span>
                space launch 101
            </h6>
            <div className="details">
                <div className="bullets">
                    {data.technology.map((tech, index)=>(
                        <span key={index} onClick={()=>handleClick(tech, index)} className={index===active ? 'active' : null}>{index+1}</span>
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