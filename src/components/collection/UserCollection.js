import "./Collection.css"

export const UserCollection = ({ userAlbums }) => {

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
            { userAlbums.map(album => {
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
                    </div>
                )
            })}
        </section>
    </>
}