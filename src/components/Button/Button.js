import React, { useState, useEffect } from 'react'

function Button({
    focusTime,
    shortBreakTime,
    longBreakTime,
    shortBreakTimeCount,
    setFocusTime,
    setShortBreakTime,
    setLongBreakTime,
    setShortBreakTimeCount,
    isStatus,
    setStatus }) {

    const saveSettings = () => {
        setFocusTime(focusTime)
        setShortBreakTime(shortBreakTime)
        setLongBreakTime(longBreakTime)
        setShortBreakTimeCount(shortBreakTimeCount)

        setStatus("focus")

    }


    if (isStatus === "initial") {
        return (
            <div>
                <button className='btnStart' onClick={saveSettings}>START</button>
            </div>
        )
    }
}

export default Button
