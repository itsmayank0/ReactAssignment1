import React from 'react';
import { useState, useEffect } from "react";
import Card from "../card/Card";

export default function ReadLater() {
    const [news, setnews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/News").then(res => res.json()).then(data => setnews(data));
    }, []);

    return (
        <div className="container">
            <h2 className="text-center py-3">Your Read Later</h2>
             {
                    news.map(item => <Card  title={item.title} Poster={item.Poster} author={item.author} description={item.description} />)
             } 
        </div>
    )
}
