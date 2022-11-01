import { Route, Routes, Outlet } from "react-router-dom"
import { CollectionContainer } from "../collection/CollectionContainer"
import { UsersList } from "../users/UsersList"
import { AddAlbumForm } from "../collection/AddAlbumForm"
import { AlbumEdit } from "../collection/AlbumEdit"
import { UserCollectionContainer } from "../users/UserCollectionContainer"
import { NavBar } from "../nav/NavBar"

export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/" element={
            <>
                <section className="header-container">
                <header id="header">MeloMania</header>
                <div id="subheader">Your album collection: digitized!</div>
                </section>

                <NavBar />
                < Outlet />
            </>
             }>
                <Route index element={< CollectionContainer />} />
                <Route path="edit/:albumId" element={< AlbumEdit />} />
                <Route path="add" element={< AddAlbumForm />} />
                <Route path="users" element={< UsersList />} />
                <Route path="users/:userId" element={ < UserCollectionContainer /> } />
            </Route>
        </Routes>
    </>
}