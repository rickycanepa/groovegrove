import { useState, useEffect } from "react"
import "./Collection.css"

export const Collection = ({ searchTermState }) => {
    const [collection, setCollection] = useState([])
    
    useEffect(
        () => {
            fetch('http://localhost:8088/albums')
            .then(res => res.json())
            .then((collectionData) => {setCollection(collectionData)})
        }
        , []
    )

    return <>
        <form>
            <fieldset>
                <select className="sort-selection">
                    <option value="0">Sort by...</option>
                    <option value="1">Artist</option>
                    <option value="2">Year</option>
                    <option value="3">Genre</option>
                </select>
            </fieldset>
        </form>
        <section className="collection-container">
            { collection.map(album => {
                return (
                    <div className="album-item" key={album.id}>
                        <ul className="product-item">
                            <li className="title">{album.title}</li>
                            <li className="artist">{album.artist}</li>
                            <li className="album-year">{album.year}</li>
                            <li className="album-notes">{album.notes}</li>
                        </ul>
                        <div className="cover-art">
                            <img src={album.coverArt} alt={album.title}/>
                        </div>
                    </div>
                )
            })}

        </section>
    </>
}