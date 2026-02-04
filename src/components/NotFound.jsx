import { useRouteError } from "react-router-dom"
function NotFound(){
    const err=useRouteError()
    return (
        <>
            <h1>ERROR</h1>
            <h2>{err.status}</h2>
            <h2>{err.data}</h2>
        </>
    )
}

export default NotFound