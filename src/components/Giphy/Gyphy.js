import { useState } from "react"
import './Gyphy.css'

export const Gyphy = () =>{
    const [giphs, setGiphs] = useState([])
    const  [term, setTerm] = useState("")
    
    const onChangeHandler = (event) => {
        setTerm(event.target.value)
    };
    const onClickHandler = () => {
        let APIKEY = "uXlXaMIGfT5aHj9kiQP9XBEhCeiOUHk3"
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=12&q=${term}`)
        .then((response) => response.json())
        .then((data) => {
            setGiphs(data.data)
        })
    }
    return(
        <div className="container">
            <div className="searchbar">
                <label >Search Giphy</label>
                <input id="search" type="search" value={term} onChange={onChangeHandler} />
                <button id="btnSearch" onClick={onClickHandler}>Go</button>
            </div>
            <div id="results">
                {giphs.map(item => (
                    <div className="card"><img src={item.images.original.url} className="gif" alt="gif"/></div>
                ))}
            </div>
        </div>  
    )
}