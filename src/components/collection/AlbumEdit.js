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

    const deleteAlbum = () => {
        const confirmation = window.confirm("Are you sure you want to delete this album?")
        if (confirmation) {
            return fetch(`http://localhost:8088/albums/${album.id}`,
            { method: "DELETE" })
            .then(navigate("/"))
        }}
    
    useEffect(
        () => {
            fetch(`http://localhost:8088/albums?id=${albumId}`)
            .then(res => res.json())
            .then((data) => {
                const singleAlbum = data[0]
                updateAlbum(singleAlbum)})
            }, []
            
            )
            
    useEffect(() => {
    if (feedback !== "") {
        // Clear feedback to make entire element disappear after 3 seconds
        setTimeout(() => setFeedback(""), 3000);
    }}, [feedback])

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