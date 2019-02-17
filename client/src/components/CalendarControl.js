import React from "react";

class ListControl extends React.Component {

    state = {
        currentYear: null,
        currentMonth: null,
        selectedMonth: null,
        selectedDays: []
    }

    monthStrings = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    constructor(props) {
        super(props);
        this.state.selectedDays = props.days;
        let currentDate = new Date();
        this.state.currentYear = currentDate.getFullYear();
        this.state.currentMonth = currentDate.getMonth();
        this.state.selectedMonth = this.state.currentMonth;
    }

    get daysInMonth() {
        let now = new Date(this.state.currentYear, this.state.selectedMonth + 1, 0);
        return now.getDate();
    }

    get selectedMonthString() {
        return this.monthStrings[this.state.selectedMonth];
    }

    get totalBlocks() {
        let day = new Date(this.state.currentYear, this.state.selectedMonth, 1).getDay();
        return day + this.daysInMonth;
    }

    get startDay() {
        let day = new Date(this.state.currentYear, this.state.selectedMonth, 1).getDay();
        return day;
    }

    increaseMonth(e) {
        e.preventDefault();
        if (this.state.selectedMonth < 11) this.setState({ selectedMonth: this.state.selectedMonth + 1 });
    }

    decreaseMonth(e) {
        e.preventDefault();
        if (this.state.selectedMonth > this.state.currentMonth) this.setState({ selectedMonth: this.state.selectedMonth - 1 });
    }

    get renderedCalendar() {
        let calendar = [];
        let start = this.startDay;
        for (let i = 1; i <= this.totalBlocks; i++) {
            let date = new Date(this.state.currentYear, this.state.selectedMonth, i - start);
            if (i <= start) {
                calendar.push(<div key={i} className="cld"></div>);
            }
            else if (this.props.readOnly) {
                calendar.push(<div key={i} className={this.isSelected(date) ? "cld cld-day cld-selected" : "cld cld-day"}>
                    <span key={i}>{i - start}</span>
                </div>);
            }
            else {
                calendar.push(<button key={i} onClick={e => this.dayClickHandler(e, i - start)} className={this.isSelected(date) ? "cld cld-day cld-selected" : "cld cld-day"}>
                    <span key={i}>{i - start}</span>
                </button>);
            }
        }

        return calendar;
    }

    dayClickHandler = function (e, day) {
        e.preventDefault();
        let date = new Date(this.state.currentYear, this.state.selectedMonth, day);
        let selected = this.state.selectedDays.map(Number).indexOf(+date);

        if (selected < 0) this.state.selectedDays.push(date);
        else this.state.selectedDays.splice(selected, 1);

        this.setState({ selectedDays: this.state.selectedDays });
    }

    isSelected = function (date) {
        let selected = this.state.selectedDays.map(Number).indexOf(+date);
        if (selected < 0) return false;
        else return true;
    }

    get calendarReadOnly() {
        if (this.props.readOnly) return "calendar read-only";
        else return "calendar";
    }

    render() {
        return (
            <div className={this.calendarReadOnly}>
                <div className="cld-header">
                    <button onClick={this.decreaseMonth.bind(this)}>&lt;</button>
                    <h3 className="text-center">{this.selectedMonthString}</h3>
                    <button onClick={this.increaseMonth.bind(this)}>&gt;</button>
                </div>
                <div className="cld text-center">
                    <span>Su</span>
                </div>
                <div className="cld text-center">
                    <span>Mo</span>
                </div>
                <div className="cld text-center">
                    <span>Te</span>
                </div>
                <div className="cld text-center">
                    <span>We</span>
                </div>
                <div className="cld text-center">
                    <span>Th</span>
                </div>
                <div className="cld text-center">
                    <span>Fr</span>
                </div>
                <div className="cld text-center">
                    <span>Sa</span>
                </div>
                {this.renderedCalendar.map(item => item)}
            </div>
        );
    }
}

export default ListControl;

// to use this Control import item

// <CalendarControl days={this.state.yourDaysArrar} />

// the days property should one of the properties in the state 
// to be able to track the changes in the control in the parent's state 

// add the readOnly property to make the component read only.