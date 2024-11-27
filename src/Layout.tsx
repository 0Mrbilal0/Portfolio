import { Component } from "react"
import Navbar from "./Components/Navbar/Navbar"
import { Outlet } from "react-router-dom"
import Tooltips from "./Components/Tooltips"
import Footer from "./Components/Footer"

class Layout extends Component {
    render() {
        return (
            <section className="layout bg-dark bg-gradient">
                <Navbar />
                <section className="content">
                    <Outlet />
                </section>
                <Footer />
                <Tooltips />
            </section>
        )
    }
}

export default Layout