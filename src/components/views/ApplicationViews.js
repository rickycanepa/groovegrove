import { Route, Routes, Outlet } from "react-router-dom"
import { CollectionContainer } from "../collection/CollectionContainer"
import { UsersList } from "../users/UsersList"
import { AddAlbumForm } from "../collection/AddAlbumForm"
import { AlbumEdit } from "../collection/AlbumEdit"
import { UserCollectionContainer } from "../users/UserCollectionContainer"

export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/" element={
                <Outlet/>}>
                <Route index path="collection" element={< CollectionContainer />} />
                <Route path="edit/:albumId" element={< AlbumEdit />} />
                <Route path="add" element={< AddAlbumForm />} />
                <Route path="users" element={< UsersList />} />
                <Route path="users/:userId" element={ < UserCollectionContainer /> } />
            </Route>
        </Routes>
    </>
}