import { useState } from 'react'
import Settings from './Settings/Settings'
import './style.css'

function Main() {
    

    return (
        <div className='clock'>
            <h2 id='header'>Pomodoro Timer</h2>

            <Settings />


        </div>
    )
}

export default Main
