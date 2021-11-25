import Card from "../card/Card";

import React,{ useState, useEffect } from 'react';
const Dashboard = () => {
  
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=in&apikey=c7fb3e12bd34490dac98a1d5408896fd')
            .then(res => res.json())
            .then((data1) => setNews(data1.articles));
    }, [])

    const AddNewsFunction = (addnews) => {
        fetch('http://localhost:3001/News', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addnews)
        })
        setNews([...news, addnews]);
    }

    return (
        <div>
            <h2 className="text-center py-3">Top Headlines</h2>
            <div data-testid="outerdiv" className="container">

                {
                    news.map(item => <Card AddFunction={AddNewsFunction} title={item.title} Poster={item.urlToImage} author={item.author} description={item.description} />)
                } 
           
            </div>
        </div>
    );
}

export default Dashboard;
