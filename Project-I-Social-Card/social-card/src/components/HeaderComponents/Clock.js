import React from 'react';
import './Header.css';


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }


componentDidMount() {
    this.timerID = setInterval(
        () => this.tick(),
        1000
    );
}
componentWillUnmount() {
    clearInterval(this.timerID);
}

tick() {
    this.setState({
        date: new Date()
    });
}

    render() {
        return (
            <div className="header-title">
                <h1> Lambda School  </h1>
                <p className="lambda-at">@LambdaSchool {this.state.date.toDateString('month', 'day')} </p>
            </div>
        )
    }

}

// const HeaderTitle = () => {
//     return (
//         <div className= "header-title">
//             <h1> Lambda School  </h1>
//             <p className="lambda-at">@LambdaSchool </p>
           
//         </div>
//     )

// }

export default Clock;