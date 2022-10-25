import { Route, Routes, Outlet } from "react-router-dom"
import { CollectionContainer } from "../collection/CollectionContainer"

export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/" element={
                <>
                    <Outlet />
                </>
        }>
            <Route index path="collection" element={< CollectionContainer />} />
            </ Route >
        </Routes>
    </>
}