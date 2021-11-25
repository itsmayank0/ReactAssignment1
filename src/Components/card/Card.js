import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';

const Card = (props) => {
    const title = props.title;
    const Poster =props.Poster;
    const author = props.author;
    const description = props.description;
    const maxLenghtOfdescription = 150;
    const AddNewsHandler = () => {
        props.AddFunction({ id: uuidv4(), title,Poster,author,description });
    }

    return (
        // <div className="col-md-3 text-dark">
            <div className="card float-right bg-dark text-white border-warning mb-3 " >
            <div class="row ">
                    <div className="col-sm-5">
                        <img src={props.Poster} className="d-block w-100" alt="..." />
                    </div>
                    <div className="col-sm-7">
                        <div className="card-block pt-3">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.author}</p>
                            <p className="card-text">{
                                        props.description > maxLenghtOfdescription
                                            ? `${props.description.substring(0, maxLenghtOfdescription)}...`
                                            :
                                            props.description }   
                            
                            </p>
                            <a href="#" className="btn btn-warning mt-3" onClick={AddNewsHandler}>ReadLater</a>
                        </div>
                    </div>
            </div>                   
        </div>
        
    )
};
export default Card;
