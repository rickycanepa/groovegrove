import { useState, useEffect } from "react"
import "./Collection.css"

export const CollectionSearch = ({ setterFunction, setSearchParameter }) => {
    const [searchOption, setSearchOption] = useState(0)

    useEffect(
        () => {
            if (searchOption === 1) {
                setSearchParameter(1)}
            else if (searchOption === 2) {
                setSearchParameter(2)}
            else if (searchOption === 3) {
                setSearchParameter(3)}
            else {
                setSearchParameter(0)}
        }
        , [ searchOption ]
    )

    return (
    <>
        <div className="search-container">
            <form className="form-container">
                <fieldset>
                    <select className="search-selection"
                    onChange={(event) => setSearchOption(parseInt(event.target.value))}>
                        <option value="0">Search by...</option>
                        <option value="1">Artist</option>
                        <option value="2">Album Title</option>
                        <option value="3">Year</option>
                        <option value="4">Genre</option>
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