import { useState, useEffect } from "react"

export const Genres = ({album}) => {
    const [albumGenres, setAlbumGenres] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/albumGenres?albumId=${album.id}&_expand=genre`)
            .then(res => res.json())
            .then((albumGenreData) => {setAlbumGenres(albumGenreData)})
        }
        , [ album ]
    )
    
    return <>
        <ul>
        {
        albumGenres.map(albumGenre => <li key={albumGenre.id}>{albumGenre?.genre.name}</li>)
        }
        </ul>
    </>
}