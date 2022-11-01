import { useState, useEffect } from "react"
import { Genres } from "../genres/Genres"
import "./Collection.css"

export const UserCollection = ({ userId }) => {
    const [collection, setCollection] = useState([])
    const [filteredAlbums, setFilteredAlbums] = useState([])
    const [collectionSortedByArtist, setCollectionSortedByArtist] = useState([])
    const [collectionSortedByTitle, setCollectionSortedByTitle] = useState([])
    const [collectionSortedByYear, setCollectionSortedByYear] = useState([])
    const [sortOption, setSortOption] = useState(0)

    useEffect(
        () => {
            fetch(`http://localhost:8088/albums?userId=${userId}`)
            .then(res => res.json())
            .then((collectionData) => {
                const userCollection = collectionData
                setCollection(userCollection)})
        }, []
    )

    useEffect(
        () => {
            const sortByArtist = collection?.map(album => ({...album}))
            sortByArtist.sort((a, b) => a.artist > b.artist ? 1 : -1,)
            
            setCollectionSortedByArtist(sortByArtist)
        }
        , [collection]
    )

    useEffect(
        () => {
            const sortByTitle = collection?.map(album => ({...album}))
            sortByTitle.sort((a, b) => a.title > b.title ? 1 : -1,)
            
            setCollectionSortedByTitle(sortByTitle)
        }
        , [collection]
    )

    useEffect(
        () => {
            const sortByYear = collection?.map(album => ({...album}))
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
        , [ sortOption, collection ]
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
                    </div>
                )
            })}
        </section>
    </>
}