import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { UserCollection } from "../collection/UserCollection"
import { UserDetails } from "./UserDetails"

export const UserCollectionContainer = () => {
    const { userId } = useParams()
    const [user, updateUser] = useState([])
    // const [userAlbums, updateUserAlbums] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/users/${userId}`)
            .then(res => res.json())
            .then((data) => {
                const singleUser = data
                updateUser(singleUser)})
        }, []
    )

    // useEffect(
    //     () => {
    //         fetch(`http://localhost:8088/albums?userId=${userId}`)
    //         .then(res => res.json())
    //         .then((collectionData) => {
    //             const userCollection = collectionData
    //             updateUserAlbums(userCollection)})
    //     }, []
    // )
    
    return <>
    < UserDetails user={ user }/>
    < UserCollection userId={ userId }/>
    </>
}