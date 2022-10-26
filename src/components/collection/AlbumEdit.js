import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Collection.css"

export const AlbumEdit = () => {
    const [album, updateAlbum] = useState({
        title: "",
        artist: "",
        year: "",
        coverArt: "",
        notes: ""
    })

    const navigate = useNavigate()

    const localMelomaniaUser = localStorage.getItem("melomania_user")
    const melomaniaUserObject = JSON.parse(localMelomaniaUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        const dataToSendToAPI = {
            title: album.title,
            artist: album.artist,
            year: album.year,
            coverArt: album.coverArt,
            notes: album.notes
        }

        return fetch('http://localhost:8088/albums', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataToSendToAPI)
        })
        .then(response => response.json())
        .then(() => {
            navigate("/collection")
        })

    }

    return (
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
            <div className="btn-container">
                <button 
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="edit-button">
                    Submit Album Changes
                </button>
                <button 

                className="delete-button">
                    Delete
                </button>
            </div>
        </form>
    )
}