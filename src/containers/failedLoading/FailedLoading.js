import React from 'react'
import './FailedLoading.css'
export default function FailedLoading({ err }) {
    console.warn(`ERROR: ${err}`)
    return (
        <div class='centerContent'>
            <h2>{`${err}`}</h2>
        </div>
    )
}
