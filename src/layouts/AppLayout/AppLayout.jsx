import { Header } from "../../components/Header/Header"
import { Outlet } from "react-router"

export function AppLayout() {
    return(
        <>
            <Header/>
            <Outlet/>
        </>
    )
}