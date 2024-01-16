import React from 'react'

export default class StateProps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            makanan : 'Bakso'
        }
    }

    render() {
        return (
            <div>
                <h2>{this.state.makanan}</h2>
                <button onClick={() => this.setState({ makanan: "Soto"})}>Ganti Makanan</button>
            </div>
        )
    }
}