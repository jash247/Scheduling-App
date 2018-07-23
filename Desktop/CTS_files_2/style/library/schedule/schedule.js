import react, { component } from 'react';
import Gradiant from '../gradiant';

class Schedule extends component {
    render() {
        return (
            <div className="schedule">
                <h1 className="schedule_title">My Schedule</h1>
                <Gradiant/>
            </div>
        )
    }
}

export default Schedule;