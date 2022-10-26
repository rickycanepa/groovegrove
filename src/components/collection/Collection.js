import { useState, useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import "./Collection.css"

export const Collection = ({ searchTermState }) => {
    const [collection, setCollection] = useState([])
    const [filteredAlbums, setFilteredAlbums] = useState([])
    const navigate = useNavigate()
    
    useEffect(
        () => {
            fetch('http://localhost:8088/albums?_sort=artist')
            .then(res => res.json())
            .then((collectionData) => {setCollection(collectionData)})
        }
        , []
    )
    useEffect(
        () => {
            setFilteredAlbums(collection)
        }
        , [collection]
    )

    useEffect(
        () => {
            const searchedAlbumsByTitle = collection.filter(album =>
                album.title.toLowerCase().startsWith(searchTermState.toLowerCase()))
            setFilteredAlbums(searchedAlbumsByTitle)
        },
        [ searchTermState ]
    )

    return <>
        <form>
            <fieldset>
                <select className="sort-selection">
                    <option value="0">Sort by...</option>
                    <option value="1">Artist</option>
                    <option value="2">Album Title</option>
                    <option value="3">Year</option>
                    <option value="4">Genre</option>
                </select>
            </fieldset>
        </form>
        <section className="collection-container">
            { filteredAlbums.map(album => {
                return (
                    <div className="album-container" key={album.id}>
                        <div className="album-data">
                            <div>
                                <img className="cover-art" src={album.coverArt} alt={album.title}/>
                            </div>
                            <ul className="album-list-details">
                                <li className="title">{album.title}</li>
                                <li className="artist">{album.artist}</li>
                                <li className="album-year">{album.year}</li>
                                <li className="album-notes">{album.notes}</li>
                            </ul>
                        </div>
                        <button 
                            onClick={() => navigate("/edit")}
                            className="edit-delete-button">
                            Edit/Delete
                        </button>
                    </div>
                )
            })}

        </section>
    </>
}