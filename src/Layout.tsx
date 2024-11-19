import { Component } from "react"
import Navbar from "./Components/Navbar/Navbar"
import { Outlet } from "react-router-dom"
import Tooltips from "./Components/Tooltips"

class Layout extends Component {
    render() {
        return (
            // <section className="d-flex h-100 w-100 flex-fill align-items-center">
            <>
                <Navbar />
                <Outlet />
                <Tooltips />
            </>
            // </section>
        )
    }
}

export default Layout