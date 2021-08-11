import React, { useEffect, useState } from "react"
import PortfolioList from '../portfolioList/PortfolioList';
import "./portfolio.scss";
import {
    babyClassPortfolio,
    middleClassPortfolio,
    topClassPortfolio
} from "../../data"

export default function Portfolio() {
    const [selected,setSelected] = useState("baby");
    const [data,setData] = useState([]);

    const list = [
        {id:"baby",title:"Baby Class"},
        {id:"middle",title:"Middle Class"},
        {id:"top",title:"Top Class"}
         
    ]

    useEffect(() => {
        switch(selected){
            case "baby":
                setData(babyClassPortfolio);
                break;
                case "middle":
                setData(middleClassPortfolio);
                break;
                case "top":
                setData(topClassPortfolio);
                break;
                default:
                    setData(babyClassPortfolio);
        }
    },[selected])
    return (
        <div className="portfolio" id="portfolio">
            <h1>Who we Teach </h1>
            <ul>
                {
                    list.map((item) => (
                        <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id }/>
                    ))
                }
            </ul>
            <div className ="container">
                {data.map(d=>(
                <div className="item">
                <img src= {d.img}  alt="app"/>
                <h3>{d.title}</h3>
                </div>

))}
            </div>
            
        </div>
    )
}
