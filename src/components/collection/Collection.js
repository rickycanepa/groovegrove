import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Genres } from "../genres/Genres"
import "./Collection.css"

export const Collection = ({ searchTermState, searchParameter }) => {
    const [collection, setCollection] = useState([])
    const [filteredAlbums, setFilteredAlbums] = useState([])
    const [collectionSortedByArtist, setCollectionSortedByArtist] = useState([])
    const [collectionSortedByTitle, setCollectionSortedByTitle] = useState([])
    const [collectionSortedByYear, setCollectionSortedByYear] = useState([])
    const [sortOption, setSortOption] = useState(0)

    const localMelomaniaUser = localStorage.getItem("melomania_user")
    const melomaniaUserObject = JSON.parse(localMelomaniaUser)

    const navigate = useNavigate()
    
    useEffect(
        () => {
            fetch(`http://localhost:8088/albums?_embed=albumGenres&userId=${melomaniaUserObject.id}`)
            .then(res => res.json())
            .then((collectionData) => {setCollection(collectionData)})
        }
        , []
    )
    
    useEffect(
        () => {
            const sortByArtist = collection.map(album => ({...album}))
            sortByArtist.sort((a, b) => a.artist > b.artist ? 1 : -1,)
            
            setCollectionSortedByArtist(sortByArtist)
        }
        , [collection]
    )

    useEffect(
        () => {
            const sortByTitle = collection.map(album => ({...album}))
            sortByTitle.sort((a, b) => a.title > b.title ? 1 : -1,)
            
            setCollectionSortedByTitle(sortByTitle)
        }
        , [collection]
    )

    useEffect(
        () => {
            const sortByYear = collection.map(album => ({...album}))
            sortByYear.sort((a, b) => a.year - b.year)
            
            setCollectionSortedByYear(sortByYear)
        }
        , [collection]
    )

    

    useEffect(
        () => {
            if (sortOption === 1) {
                setFilteredAlbums(collectionSortedByArtist)}
            else if (sortOption === 2) {
                setFilteredAlbums(collectionSortedByTitle)}
            else if (sortOption === 3) {
                setFilteredAlbums(collectionSortedByYear)}
            else {
                setFilteredAlbums(collection)}
        }
        , [ sortOption, collection, searchTermState ]
    )

    /*
        Implement a useEffect that pulls info from
        collection and stores it into a new sorted array
    */

    useEffect(
        () => {
            if (searchParameter === 1) {
                const searchedAlbumsByArtist = filteredAlbums.filter(album =>
                    album.artist.toLowerCase().startsWith(searchTermState.toLowerCase()))
                setFilteredAlbums(searchedAlbumsByArtist)}
            else if (searchParameter === 2) {
                const searchedAlbumsByTitle = filteredAlbums.filter(album =>
                    album.title.toLowerCase().startsWith(searchTermState.toLowerCase()))
                setFilteredAlbums(searchedAlbumsByTitle)}
            else if (searchParameter === 3) {
                const searchedAlbumsByYear = filteredAlbums.filter(album =>
                    album.year.startsWith(parseInt(searchTermState)))
                setFilteredAlbums(searchedAlbumsByYear)}
            else {
                setFilteredAlbums(collection)}

        },
        [ searchTermState , searchParameter ]
    )

    return <>
        <form>
            <fieldset>
                <select className="sort-selection"
                    onChange={(event) => setSortOption(parseInt(event.target.value))}>
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
                                <li className="album-genres"><Genres album={album}/></li>
                                <li className="album-notes">{album.notes}</li>
                            </ul>
                        </div>
                        <button 
                            onClick={() => navigate(`/edit/${album.id}`)}
                            className="edit-delete-button">
                            Edit/Delete
                        </button>
                    </div>
                )
            })}

        </section>
    </>
}