import React, {Component} from 'react';

class DisplayData extends Component{
    back= e=> {
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        const { textBox,labelBox1, scoreBox1 } = this.props;
        return(
            <>
            <h2>

                Entered Information! 
            </h2>
            Text : <b> {textBox}</b><br/><br/>
        Label : <b> {labelBox1}</b><br/><br/>
        Score : <b> {scoreBox1}</b><br/><br/>
        <button className="Back" onClick={this.back}>« Back</button>
            </>
        );
    }
}
export default DisplayData;