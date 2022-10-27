import { useState, useEffect } from "react"
import { CollectionSearch } from "./CollectionSearch"
import { Collection } from "./Collection"

export const CollectionContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return (
        <>
            < CollectionSearch setterFunction={setSearchTerms}/>
            < Collection searchTermState={searchTerms}/>
        </>
    )
}