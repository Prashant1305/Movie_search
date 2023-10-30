import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    const error = useRouteError();
    return (
        <div>{error.error.message}</div>
    )
}

export default Error