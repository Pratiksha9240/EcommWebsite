import Home from "./Home"
import { Outlet } from "react-router-dom"

const RootOutlet = () => {
    return(
        <><Home></Home><main>
            <Outlet></Outlet>
        </main></>
    )
}

export default RootOutlet;