import { useState, useEffect } from 'react'
import Button from '../Button/Button'
import Timer from '../Timer/Timer'

function Settings() {

    const [focusTime, setFocusTime] = useState(20);
    const [shortBreakTime, setShortBreakTime] = useState(5);
    const [longBreakTime, setLongBreakTime] = useState(15);
    const [shortBreakTimeCount, setShortBreakTimeCount] = useState(3);

    const [isStatus, setStatus] = useState("initial");

    if (isStatus === "initial") {
        return (
            <div className='times'>
                <div className='setting-timers'>
                    <div id='counter'>
                        <label>Focus Time</label>
                        <div>
                            <button onClick={() => setFocusTime(focusTime + 1)}>+</button>
                            <div className='val'>
                                {focusTime}
                            </div>
                            <button onClick={() => setFocusTime(focusTime - 1)}>-</button>
                        </div>
                    </div>
                    <div id='counter'>
                        <label>Short Break Time</label>
                        <div>
                            <button onClick={() => setShortBreakTime(shortBreakTime + 1)}>+</button>
                            <div className='val'>
                                {shortBreakTime}
                            </div>
                            <button onClick={() => setShortBreakTime(shortBreakTime - 1)}>-</button>
                        </div>
                    </div>
                    
                    <div id='counter'>
                        <label>Long Break Time</label>
                        <div>
                            <button onClick={() => setLongBreakTime(longBreakTime + 1)}>+</button>
                            <div className='val'>
                                {longBreakTime}
                            </div>
                            <button onClick={() => setLongBreakTime(longBreakTime - 1)}>-</button>
                        </div>
                    </div>
                    <div id='counter'>
                        <label>Break Interval</label>
                        <div>
                            <button onClick={() => setShortBreakTimeCount(shortBreakTimeCount + 1)}>+</button>
                            <div className='val'>
                                {shortBreakTimeCount}
                            </div>
                            <button onClick={() => setShortBreakTimeCount(shortBreakTimeCount - 1)}>-</button>
                        </div>
                    </div>
                </div>

                <Button
                    focusTime={focusTime}
                    shortBreakTime={shortBreakTime}
                    longBreakTime={longBreakTime}
                    shortBreakTimeCount={shortBreakTimeCount}
                    setFocusTime={setFocusTime}
                    setShortBreakTime={setShortBreakTime}
                    setLongBreakTime={setLongBreakTime}
                    setShortBreakTimeCount={setShortBreakTimeCount}
                    isStatus={isStatus}
                    setStatus={setStatus} />
            </div>
        );

    }

    return <Timer
        focusTime={focusTime}
        shortBreakTime={shortBreakTime}
        longBreakTime={longBreakTime}
        shortBreakTimeCount={shortBreakTimeCount}
        setFocusTime={setFocusTime}
        setShortBreakTime={setShortBreakTime}
        setLongBreakTime={setLongBreakTime}
        setShortBreakTimeCount={setShortBreakTimeCount}
        isStatus={isStatus}
        setStatus={setStatus} />

}

export default Settings
