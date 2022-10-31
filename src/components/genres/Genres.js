import { useState, useEffect } from "react"

export const Genres = ({album}) => {
    const [currentAlbum, setCurrentAlbum] = useState({
        title: "",
        artist: "",
        year: "",
        coverArt: "",
        notes: "",
        userId: "",
        id: "",
        genres: []
    })
    const [genres, setGenres] = useState([])
    const [albumGenres, setAlbumGenres] = useState([])

    useEffect(
        () => {
            setCurrentAlbum(album)
        }
        , []
    )

    useEffect(
        () => {
            fetch("http://localhost:8088/genres")
            .then(res => res.json())
            .then((genreData) => {setGenres(genreData)})
        }
        , []
    )

    useEffect(
        () => {
            fetch("http://localhost:8088/albumGenres?_expand=album&_expand=genre")
            .then(res => res.json())
            .then((albumGenreData) => {setAlbumGenres(albumGenreData)})
        }
        , []
    )

    useEffect(
        albumGenres.find(() => {
            currentAlbum.id === albumGenres.albumId
        })
        , [ ]
    )

    const genreIdList = album.albumGenres.map(genre => {(genre.genreId)})


    const genreFinder = () => {
        genreIdList.forEach(genre => {
            genres.find((genre) => { genre.id === albumGenre.genreId })
            }
    }
    
    return <>
        <ul>
            {
            currentAlbum.genres.map(genre => <li>${genre.name}</li>)}
        </ul>
    </>
}