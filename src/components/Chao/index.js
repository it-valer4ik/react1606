import { Component } from "react";

class Chao extends Component {
    render() {
        //console.log(this.props.name)
        const { name, photo } = this.props;
        //return <h2> Text! {3+2*3}!</h2>
        return <>
            <h2> Hi! {name}!</h2>
            <img src={photo} alt={name} />
        </>
    }
}

export default Chao;