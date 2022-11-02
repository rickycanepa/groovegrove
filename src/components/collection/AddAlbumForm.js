import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Collection.css"

export const AddAlbumForm = () => {
    const localMelomaniaUser = localStorage.getItem("melomania_user")
    const melomaniaUserObject = JSON.parse(localMelomaniaUser)
    const navigate = useNavigate()
    
    const [album, updateAlbum] = useState({
        title: "",
        artist: "",
        year: "",
        coverArt: "",
        notes: "",
        userId: melomaniaUserObject.id
    })

    const [albumGenreArray, updateAlbumGenreArray] = useState([])

    // create a helper function that will return an array of fetch calls
    // Take a parameter for the album id
    // 

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        const albumDataToSendToAPI = {
            title: album.title,
            artist: album.artist,
            year: album.year,
            coverArt: album.coverArt,
            notes: album.notes,
            userId: melomaniaUserObject.id
        }

        // // Don't do this yet
        // const genreDataToSendToAPI = 
        // albumGenreArray.map(genre => {
        //     const genreId = genre
        //     const albumId = 0
        // })

        // // Take this out of here, create a helper function
        // const promises = genreDataToSendToAPI.map(genre => fetch('http://localhost:8088/albumGenres', {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(genre)}))


        return fetch('http://localhost:8088/albums', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(albumDataToSendToAPI)
        })
        .then(response => response.json())
        .then((albumData) => {
            genreDataToSendToAPI.forEach(genreData => genreData.albumId = albumData.id)
        })
        .then(Promise.all(promises))
        .then(response => response.json())
        .then(() => {
            navigate("/")
        })
    }

    const genreDelete = (evt) => {
        const copy = [...albumGenreArray]
        copy.splice(evt.target)
        updateAlbumGenreArray(copy)
    }

    return (
        <form className="albumForm">
            <h2 className="albumForm-title">Add an Album to your Collection</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Album Title:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Album Title..."
                        value={album.title}
                        onChange={
                            (evt) => {
                                const copy = {...album}
                                copy.title = evt.target.value
                                updateAlbum(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="artist">Artist:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Artist..."
                        value={album.artist}
                        onChange={
                            (evt) => {
                                const copy = {...album}
                                copy.artist = evt.target.value
                                updateAlbum(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="year">Released:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter year..."
                        value={album.year}
                        onChange={
                            (evt) => {
                                const copy = {...album}
                                copy.year = parseInt(evt.target.value)
                                updateAlbum(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="coverArt">Album Art:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter URL..."
                        value={album.coverArt}
                        onChange={
                            (evt) => {
                                const copy = {...album}
                                copy.coverArt = evt.target.value
                                updateAlbum(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="notes">Notes:</label>
                    <input
                        required autoFocus
                        type="textarea"
                        className="form-control"
                        placeholder="Add anything you would like to say about this album, i.e. where and how you got it, is it rare or signed, etc..."
                        value={album.notes}
                        onChange={
                            (evt) => {
                                const copy = {...album}
                                copy.notes = evt.target.value
                                updateAlbum(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group genre-container" >
                    <h4 className="genre-header">Genres</h4>
                    <div className="genre-form">
                        <label htmlFor="rock">Rock</label>
                        <input
                            type="checkbox"
                            className="form-control"
                            value= "1"
                            onChange={
                                (evt) => {
                                    if (evt.target.checked && !albumGenreArray.includes(parseInt(evt.target.value))) {
                                        updateAlbumGenreArray(previousState => [...previousState, parseInt(evt.target.value)])
                                    } else if (evt.target.checked === false)
                                    {
                                        genreDelete(evt)
                                    }
                                }
                        } />
                    </div>
                    <div className="genre-form">
                        <label htmlFor="blues">Blues</label>
                        <input
                            type="checkbox"
                            className="form-control"
                            value= "2"
                            onChange={
                                (evt) => {
                                    if (evt.target.checked && !albumGenreArray.includes(parseInt(evt.target.value))) {
                                        updateAlbumGenreArray(previousState => [...previousState, parseInt(evt.target.value)])
                                    } else if (evt.target.checked === false)
                                    {
                                        genreDelete(evt)
                                    }
                                }
                        } />
                    </div>
                    <div className="genre-form">
                        <label htmlFor="jazz">Jazz</label>
                        <input
                            type="checkbox"
                            className="form-control"
                            value= "3"
                            onChange={
                                (evt) => {
                                    if (evt.target.checked && !albumGenreArray.includes(parseInt(evt.target.value))) {
                                        updateAlbumGenreArray(previousState => [...previousState, parseInt(evt.target.value)])
                                    } else if (evt.target.checked === false)
                                    {
                                        genreDelete(evt)
                                    }
                                }
                        } />
                    </div>
                    <div className="genre-form">
                        <label htmlFor="country">Country</label>
                        <input
                            type="checkbox"
                            className="form-control"
                            value= "4"
                            onChange={
                                (evt) => {
                                    if (evt.target.checked && !albumGenreArray.includes(parseInt(evt.target.value))) {
                                        updateAlbumGenreArray(previousState => [...previousState, parseInt(evt.target.value)])
                                    } else if (evt.target.checked === false)
                                    {
                                        genreDelete(evt)
                                    }
                                }
                        } />
                    </div>
                    <div className="genre-form">
                        <label htmlFor="soul">Soul</label>
                        <input
                            type="checkbox"
                            className="form-control"
                            value= "5"
                            onChange={
                                (evt) => {
                                    if (evt.target.checked && !albumGenreArray.includes(parseInt(evt.target.value))) {
                                        updateAlbumGenreArray(previousState => [...previousState, parseInt(evt.target.value)])
                                    } else if (evt.target.checked === false)
                                    {
                                        genreDelete(evt)
                                    }
                                }
                        } />
                    </div>
                    <div className="genre-form">
                        <label htmlFor="funk">Funk</label>
                        <input
                            type="checkbox"
                            className="form-control"
                            value= "6"
                            onChange={
                                (evt) => {
                                    if (evt.target.checked && !albumGenreArray.includes(parseInt(evt.target.value))) {
                                        updateAlbumGenreArray(previousState => [...previousState, parseInt(evt.target.value)])
                                    } else if (evt.target.checked === false)
                                    {
                                        genreDelete(evt)
                                    }
                                }
                        } />
                    </div>
                    <div className="genre-form">
                        <label htmlFor="classical-soundtrack">Classical/Soundtrack</label>
                        <input
                            type="checkbox"
                            className="form-control"
                            value= "7"
                            onChange={
                                (evt) => {
                                    if (evt.target.checked && !albumGenreArray.includes(parseInt(evt.target.value))) {
                                        updateAlbumGenreArray(previousState => [...previousState, parseInt(evt.target.value)])
                                    } else if (evt.target.checked === false)
                                    {
                                        genreDelete(evt)
                                    }
                                }
                        } />
                    </div>
                    <div className="genre-form">
                        <label htmlFor="reggae">Reggae</label>
                        <input
                            type="checkbox"
                            className="form-control"
                            value= "8"
                            onChange={
                                (evt) => {
                                    if (evt.target.checked && !albumGenreArray.includes(parseInt(evt.target.value))) {
                                        updateAlbumGenreArray(previousState => [...previousState, parseInt(evt.target.value)])
                                    } else if (evt.target.checked === false)
                                    {
                                        genreDelete(evt)
                                    }
                                }
                        } />
                    </div>
                    <div className="genre-form">
                        <label htmlFor="metal">Metal</label>
                        <input type="checkbox"
                            className="form-control"
                            value= "9"
                            onChange={
                                (evt) => {
                                    if (evt.target.checked && !albumGenreArray.includes(parseInt(evt.target.value))) {
                                        updateAlbumGenreArray(previousState => [...previousState, parseInt(evt.target.value)])
                                    } else if (evt.target.checked === false)
                                    {
                                        genreDelete(evt)
                                    }
                                }
                        } />
                    </div>
                </div>
            </fieldset>
            <button 
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
                Add To Collection
            </button>
        </form>
    )
}

// promise array promise.all

/*
promise.all([albumGenreArray])
*/