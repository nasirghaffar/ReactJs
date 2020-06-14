import React, {Component} from 'react';

class EvaluationFile extends Component{
    continue= e=> {
        e.preventDefault();
        this.props.nextStep();
    }
    back= e=> {
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        const {handleChange, labelBox1, scoreBox1}=this.props;
        return (
        <>
<h2> Labels and Score: </h2>
<p> Random Label 1 </p>
<p> Random Label 2 </p>
<p> Random Score 1</p>
<p> Random Score 2 </p>
<h2> Enter Your Labels and Score: </h2>

<label>
    <input type="text"
            name="labelBox1"
            placeholder="Label "
            value={labelBox1}
            onChange={handleChange("labelBox1")} />
</label>
<label>
    <input type="text"
            name="scoreBox1"
            placeholder="Score"
            value={scoreBox1}
            onChange={handleChange("scoreBox1")} />
</label>
<button className="Next" onClick={this.continue}> Next »</button>
<button className="Back" onClick={this.back}> « Back </button>

            </>
        );
    }
}
export default EvaluationFile;