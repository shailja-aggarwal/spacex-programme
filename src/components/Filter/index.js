import React from 'react'
import {FILTER_YEAR_TAGS} from "../../constants"
import { connect } from 'react-redux';
import { fetchPrograms } from "../../action/programs";

class FilterContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            year:null,
            land_success:null,
            launch_success:null,
        }
    }
        handleYearChange(event){
            this.setState({year:event},this.filterCall);
        }
        handleSuccessfulLaunch(event){
            if(event==="launch_success_true"){
                this.setState({land_success:true},this.filterCall);
            }
            else{
                this.setState({land_success:false},this.filterCall);
            }
        }
        handleSuccessfulLanding(event){
            if(event==="land_success_true"){
                this.setState({launch_success:true},this.filterCall);
            }
            else{
                this.setState({launch_success:false},this.filterCall);
            }
        }
        filterCall(){
            let ApiArgumentString="";
            if(this.state.year!==null){
                ApiArgumentString+="&launch_year="+this.state.year;
            }
            if(this.state.land_success!==null){
                if(this.state.land_success){
                    ApiArgumentString+="&land_success=true";
                }
                else{
                    ApiArgumentString+="&land_success=false";
                }
            }
            if(this.state.launch_success!==null){
                if(this.state.launch_success){
                    ApiArgumentString+="&launch_success=true";
                }
                else{
                    ApiArgumentString+="&launch_success=false";
                }
            }
            this.props.fetchPrograms(ApiArgumentString);
        }

    render(){
        return (
            <React.Fragment>
                <div className="filter__Header">
                    <h3>Filters</h3>
                </div>

                <div className="filter__data">
                    <div className="filter__category">
                    <div className="filter__label">
                        <p>
                    Launch Year
                    </p>
                    </div>
                    <div className="filter__tagsWrapper">
                        {FILTER_YEAR_TAGS.map((tag)=>(
                    <button className="filter__tags" key={tag} onClick={this.handleYearChange.bind(this,tag)}>
                        {tag}
                    </button>
                    ))}
                    </div>
                </div>
                <div className="filtercategory">
                    <div className="filter__label">
                        <p>
                    Successful Launch
                    </p>
                    </div>
                    <div className="filter__tagsWrapper">
                    <button className="filter__tags" name="launch_success_true" onClick={this.handleSuccessfulLaunch.bind(this,"launch_success_true")}>
                        True
                    </button>
                    <button className="filter__tags" name="launch_success_false" onClick={this.handleSuccessfulLaunch.bind(this,"launch_success_false")}>
                        False
                    </button>
                    </div>
                </div>
                <div className="filtercategory">
                    <div className="filter__label">
                        <p>
                    Successful Landing
                    </p>
                    </div>
                    <div className="filter__tagsWrapper">
                    <button className="filter__tags" name="land_success_true" onClick={this.handleSuccessfulLanding.bind(this,"land_success_true")}>
                        True
                    </button>
                    <button className="filter__tags" name="land_success_false" onClick={this.handleSuccessfulLanding.bind(this,"land_success_false")}>
                        False
                    </button>
                    </div>
                </div>
                </div>

            </React.Fragment>
        )
    }
}
export default connect(null, { fetchPrograms })(FilterContainer);
