import { useState, useEffect } from "react"
import "./Collection.css"

export const CollectionSearch = ({ setterFunction, setSearchParameter }) => {

    return (
    <>
        <div className="search-container">
            <form className="form-container">
                <fieldset>
                    <select className="search-selection"
                    onChange={(event) => setSearchParameter(parseInt(event.target.value))}>
                        <option value="0">Search by...</option>
                        <option value="1">Artist</option>
                        <option value="2">Album Title</option>
                        <option value="3">Year</option>
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