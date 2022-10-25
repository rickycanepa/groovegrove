import "./Collection.css"

export const CollectionSearch = ({ setterFunction }) => {
    return (
    <>
        <div className="search-container">
            <form className="form-container">
                <fieldset>
                    <select className="search-selection">
                        <option value="0">Search by...</option>
                        <option value="1">Artist</option>
                        <option value="2">Year</option>
                        <option value="3">Genre</option>
                    </select>
                </fieldset>
                <fieldset>
                    <input
                    className="search-box"
                    type="text"
                    placeholder="Search..."
                    onChange={
                        (event) => {
                            setterFunction(event.target.value)
                        }}/>
                </fieldset>
            </form>
        </div>
    </>)
}