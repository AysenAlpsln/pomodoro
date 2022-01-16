import { useState } from 'react'

function Form() {

    const initialTimes = { status: "", focusTime: 0, shortBreakTime: 0, longBreakTime: 0, shortBreakCount: 0 }

    const [times, setTimes] = useState(initialTimes);

    const handleFocusTimeChange = (e) => {
        setTimes(values => ({...values, focusTime: e.currentTarget.value}));
    }
    const handleShortBreakTimeChange = (e) => {
        // setShortBresetTimesakTime(e.currentTarget.value);
        setTimes(values => ({...values, shortBreakTime: e.currentTarget.value}));
    }
    const handleLongBreakTimeChange = (e) => {
        // setTimes(e.currentTarget.value);
        setTimes(values => ({...values, longBreakTime: e.currentTarget.value}));
    }
    const handleShortBreakTimeCountChange = (e) => {
        // setTimes(e.currentTarget.value);
        setTimes(values => ({...values, shortBreakCount: e.currentTarget.value}));
    }

    return (
        <form >
            <div>
                <input name="focusTime" placeholder='Odaklanma Süresi' value={times.focusTime} onChange={handleFocusTimeChange} />
            </div>

            <div>
                <input name="shortBreakTime" placeholder='Kısa Mola Süresi' value={times.shortBreakTime} onChange={handleShortBreakTimeChange} />
            </div>

            <div>
                <input name="longBreakTime" placeholder='Uzun Mola Süresi' value={times.longBreakTime} onChange={handleLongBreakTimeChange} />
            </div>

            <div>
                <input name="shortBreakCount" placeholder='Kısa Mola Aralığı' value={times.shortBreakCount} onChange={handleShortBreakTimeCountChange} />
            </div>

            <div className='btnAdd'>
                <button>ADD</button>
            </div>
        </form>
    )
}

export default Form
