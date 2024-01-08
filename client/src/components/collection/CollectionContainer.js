import { useState } from "react"
import { CollectionSearch } from "./CollectionSearch"
import { Collection } from "./Collection"

export const CollectionContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")
    const [searchParameter, setSearchParameter] = useState(0)

    return (
        <>
            < CollectionSearch setterFunction={setSearchTerms} setSearchParameter={setSearchParameter}/>
            < Collection searchTermState={searchTerms} searchParameter={searchParameter}/>
        </>
    )
}