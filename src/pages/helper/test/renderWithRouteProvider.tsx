import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

export const renderWithRouteProvider = (component: JSX.Element) => {
    render(<BrowserRouter>
        {component}
    </BrowserRouter>)
}