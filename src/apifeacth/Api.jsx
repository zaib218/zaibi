import React, { useEffect, useState } from 'react'
import "./show.css"
const Url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=0e71f66071814fc9967d80fe262cb508"

const Api = () => {
    const [news, setNews] = useState([]);

    const Featch = async () => {

        const response = await fetch(Url);
        const data = await response.json();
        setNews(data.articles)
        console.log(data)


    };
    useEffect(() => {
        Featch();
    }, [])

    const remove = (title) =>{
        const single = news.filter((mynews)=> mynews.title!==title)
        setNews(single);

    }
    return (
        <div> <h1 className=' display-3 text-center'>news</h1>
        <h1>headline: {news.length}</h1>
            <main  className='news'>
                {
                    news.map((Myapi) => {
                        return <div className=' headline'>
                           
                            <img src={Myapi.urlToImage} className='img-responsive img-fluid' alt="" />
                             <h5>{Myapi.title.substring(0,50)}...</h5>
                             <p className='para'>{Myapi.description}</p>
                            

                            <footer>
                                <h5>{Myapi.author}</h5>
                                <a href={Myapi.url} target='blank'>read more</a>
                            </footer>
                            <button className='btn btn-outline-primary btn-block' onClick={()=> remove(Myapi.title)}>remove</button>



                        </div>

                    })
                }


            </main>
        </div>
    )
}

export default Api