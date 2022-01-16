import React, { useState, Component, useEffect } from 'react'

function Timer({
    focusTime,
    shortBreakTime,
    longBreakTime,
    shortBreakTimeCount,
    setFocusTime,
    isStatus,
    setStatus }) {

    const [seconds, setSeconds] = useState(0);
    const [displayMessage, setDisplayMessage] = useState("Focus Time!");

    const [count, setCount] = useState(0)

    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval)

            if (seconds === 0) {
                if (focusTime !== 0) {
                    setSeconds(59)
                    setFocusTime(focusTime - 1)
                } else {
                    if (shortBreakTimeCount >= count) {
                        if (isStatus === "focus") {
                            let minutes = shortBreakTime - 1
                            setFocusTime(minutes)
                            setStatus("shortBreak")
                            setDisplayMessage("Short Break Time!")
                        }
                        else {
                            let minutes = focusTime
                            setFocusTime(minutes)
                            setStatus("focus")
                            setDisplayMessage("Focus Time")
                            setCount(count + 1)
                        }
                        let seconds = 59
                        setSeconds(seconds)


                    }
                    else {
                        let minutes = longBreakTime - 1
                        let seconds = 59
                        if (isStatus === "focus") {
                            setStatus("longBreak")
                            setDisplayMessage("Long Break Time!")
                        }
                        else {
                            setStatus("focus")
                            setDisplayMessage("Focus Time")
                        }

                        setSeconds(seconds)
                        setFocusTime(minutes)
                        setCount(0)
                    }
                }
            } else {
                setSeconds(seconds - 1)
            }
        }, 1000)
    }, [seconds])


    return (
        <div className='countdown-timer'>
            <div className='message'>
                {displayMessage}
            </div>
            <div className='countdown'>
                <div>
                    {focusTime < 10 ? `0${focusTime}` : focusTime}:{seconds < 10 ? `0${seconds}` : seconds}
                </div>
            </div>

        </div>
    )


}

export default Timer
