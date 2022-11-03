import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import "./Collection.css"

export const AlbumEdit = () => {
    const { albumId } = useParams()
    const localMelomaniaUser = localStorage.getItem("melomania_user")
    const melomaniaUserObject = JSON.parse(localMelomaniaUser)
    const [feedback, setFeedback] = useState("")
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
    const [editedAlbumGenreArray, updateEditedAlbumGenreArray] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/albums?id=${albumId}`)
                .then(res => res.json())
                .then((data) => {
                    const singleAlbum = data[0]
                    updateAlbum(singleAlbum)
                })

            fetch(`http://localhost:8088/albumGenres?albumId=${albumId}`)
                .then(res => res.json())
                .then((genreObj) => {
                    genreObj.map(genre =>
                        updateAlbumGenreArray(previousState => [...previousState, genre.genreId]))
                })
        }, [])

    useEffect(
        () => {
            updateEditedAlbumGenreArray(albumGenreArray)
        }, [albumGenreArray]
    )
    //    albumGenreArray : [2, 4, 6]
    //    editedAlbumGenreArray : [4, 7]
    
    // double for loop?

    //    if albumGenreArray includes editedAlbumGenreArray genreId then do nothing
    //    if albumGenreArray does not include editedAlbumGenreArray then delete
    //    "POST", "DELETE", or nothing based on array comparison
    //     Promise.all

    const promiseHelper = (albumData) => {
        const promiseArray = albumGenreArray.map(genre => {
            return fetch('http://localhost:8088/albumGenres', {
                method: "PUT",
                headers:
                {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    { albumId: albumData.id, genreId: genre })
            }
            )
        })
        return promiseArray
    }

    const deleteAlbum = () => {
        const confirmation = window.confirm("Are you sure you want to delete this album?")
        if (confirmation) {
            return fetch(`http://localhost:8088/albums/${album.id}`,
                { method: "DELETE" })
                .then(() => {
                    navigate("/")
                })
        }
    }


    useEffect(() => {
        if (feedback !== "") {
            // Clear feedback to make entire element disappear after 3 seconds
            setTimeout(() => setFeedback(""), 3000);
        }
    }, [feedback])

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        return fetch(`http://localhost:8088/albums/${album.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(album)
        })
            .then(response => response.json())
            .then(() => {
                setFeedback("Employee profile successfully saved")
            })
            .then(() => {
                navigate("/")
            })
    }

    const genreDelete = (evt) => {
        debugger
        const copy = [...editedAlbumGenreArray]
        const index = copy.indexOf(parseInt(evt.target.value))
        if (index > -1) {
            copy.splice(index, 1)
            updateEditedAlbumGenreArray(copy)
        }
    }

    return (
        <>
            <div className={`${feedback.includes("Error") ? "error" : "feedback"} ${feedback === "" ? "invisible" : "visible"}`}>
                {feedback}
            </div>
            <form className="albumForm">
                <h2 className="albumForm-title">Edit an Album in your Collection</h2>
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
                                    const copy = { ...album }
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
                                    const copy = { ...album }
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
                                    const copy = { ...album }
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
                                    const copy = { ...album }
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
                                    const copy = { ...album }
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
                            <label htmlFor="1">Rock</label>
                            <input
                                id="1"
                                type="checkbox"
                                className="form-control"
                                value="1"
                                checked={editedAlbumGenreArray.includes(1)}
                                onChange={
                                    (evt) => {
                                        if (!editedAlbumGenreArray.includes(parseInt(evt.target.value))) {
                                            updateEditedAlbumGenreArray(previousState => [...previousState, parseInt(evt.target.value)])
                                        } else {
                                            genreDelete(evt)
                                        }
                                    }
                                } />
                        </div>
                        <div className="genre-form">
                            <label htmlFor="2">Blues</label>
                            <input
                                id="2"
                                type="checkbox"
                                className="form-control"
                                value="2"
                                checked={editedAlbumGenreArray.includes(2)}
                                onChange={
                                    (evt) => {
                                        if (!editedAlbumGenreArray.includes(parseInt(evt.target.value))) {
                                            updateEditedAlbumGenreArray(previousState => [...previousState, parseInt(evt.target.value)])
                                        } else {
                                            genreDelete(evt)
                                        }
                                    }
                                } />
                        </div>
                        <div className="genre-form">
                            <label htmlFor="3">Jazz</label>
                            <input
                                id="3"
                                type="checkbox"
                                className="form-control"
                                value="3"
                                checked={editedAlbumGenreArray.includes(3)}
                                onChange={
                                    (evt) => {
                                        if (!editedAlbumGenreArray.includes(parseInt(evt.target.value))) {
                                            updateEditedAlbumGenreArray(previousState => [...previousState, parseInt(evt.target.value)])
                                        } else {
                                            genreDelete(evt)
                                        }
                                    }
                                } />
                        </div>
                        <div className="genre-form">
                            <label htmlFor="4">Country</label>
                            <input
                                id="4"
                                type="checkbox"
                                className="form-control"
                                value="4"
                                checked={editedAlbumGenreArray.includes(4)}
                                onChange={
                                    (evt) => {
                                        if (!editedAlbumGenreArray.includes(parseInt(evt.target.value))) {
                                            updateEditedAlbumGenreArray(previousState => [...previousState, parseInt(evt.target.value)])
                                        } else {
                                            genreDelete(evt)
                                        }
                                    }
                                } />
                        </div>
                        <div className="genre-form">
                            <label htmlFor="5">Soul</label>
                            <input
                                id="5"
                                type="checkbox"
                                className="form-control"
                                value="5"
                                checked={editedAlbumGenreArray.includes(5)}
                                onChange={
                                    (evt) => {
                                        if (!editedAlbumGenreArray.includes(parseInt(evt.target.value))) {
                                            updateEditedAlbumGenreArray(previousState => [...previousState, parseInt(evt.target.value)])
                                        } else {
                                            genreDelete(evt)
                                        }
                                    }
                                } />
                        </div>
                        <div className="genre-form">
                            <label htmlFor="6">Funk</label>
                            <input
                                id="6"
                                type="checkbox"
                                className="form-control"
                                value="6"
                                checked={editedAlbumGenreArray.includes(6)}
                                onChange={
                                    (evt) => {
                                        if (!editedAlbumGenreArray.includes(parseInt(evt.target.value))) {
                                            updateEditedAlbumGenreArray(previousState => [...previousState, parseInt(evt.target.value)])
                                        } else {
                                            genreDelete(evt)
                                        }
                                    }
                                } />
                        </div>
                        <div className="genre-form">
                            <label htmlFor="7">Classical/Soundtrack</label>
                            <input
                                id="7"
                                type="checkbox"
                                className="form-control"
                                value="7"
                                checked={editedAlbumGenreArray.includes(7)}
                                onChange={
                                    (evt) => {
                                        if (!editedAlbumGenreArray.includes(parseInt(evt.target.value))) {
                                            updateEditedAlbumGenreArray(previousState => [...previousState, parseInt(evt.target.value)])
                                        } else {
                                            genreDelete(evt)
                                        }
                                    }
                                } />
                        </div>
                        <div className="genre-form">
                            <label htmlFor="8">Reggae</label>
                            <input
                                id="8"
                                type="checkbox"
                                className="form-control"
                                value="8"
                                checked={editedAlbumGenreArray.includes(8)}
                                onChange={
                                    (evt) => {
                                        if (!editedAlbumGenreArray.includes(parseInt(evt.target.value))) {
                                            updateEditedAlbumGenreArray(previousState => [...previousState, parseInt(evt.target.value)])
                                        } else {
                                            genreDelete(evt)
                                        }
                                    }
                                } />
                        </div>
                        <div className="genre-form">
                            <label htmlFor="9">Metal</label>
                            <input type="checkbox"
                                id="9"
                                className="form-control"
                                value="9"
                                checked={editedAlbumGenreArray.includes(9)}
                                onChange={
                                    (evt) => {
                                        if (!editedAlbumGenreArray.includes(parseInt(evt.target.value))) {
                                            updateEditedAlbumGenreArray(previousState => [...previousState, parseInt(evt.target.value)])
                                        } else {
                                            genreDelete(evt)
                                        }
                                    }
                                } />
                        </div>
                    </div>
                </fieldset>
                <div className="btn-container">
                    <button
                        onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                        className="edit-button">
                        Submit Album Changes
                    </button>
                    <button
                        type="button"
                        onClick={() => deleteAlbum()}
                        className="delete-button">
                        Delete
                    </button>
                </div>
            </form>
        </>
    )
}