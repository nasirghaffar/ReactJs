import React, {Component} from 'react';

class InputFile extends Component{
    continue= e=> {
        e.preventDefault();
        this.props.nextStep();
    }
    render(){
        const {handleChange,txtBox}=this.props;
        return (
        <>
<h2> Enter Your Data: </h2>
<label>
    <input type="text"
            name="textBox"
            placeholder="Text Area"
            value={txtBox}
            onChange={handleChange("textBox")} />
</label>
<button className="Next" onClick={this.continue}> Next »</button>
            </>
        );
    }
}
export default InputFile;