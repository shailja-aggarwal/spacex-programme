import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPrograms } from "../../action/programs";
import { Loading } from '../../common';
import ProgramItem from '../ProgramItem';
import Filter from '../Filter';

const m = ({ programs }) => ({ programs });
class Programs extends Component {

  static fetching ({ dispatch }) {
    return [dispatch(fetchPrograms())];
  }
    componentDidMount() {
      this.props.fetchPrograms();
    }

    render() {
      const { programs: { isFetching, data } } = this.props;

      return(
        <div className="container">
            <header>
                <h1>
                    SpaceX Launch Programs
                </h1>
            </header>
            <main>

			{!isFetching ? (
				<aside className="filter__container">
				   <Filter/>
				</aside>
			) : ''}

              {isFetching?
              (
				 <div className="programs__container">
  				 <Loading/>
  				</div>
              )
              :
              (

			 	<div className="programs__container">
				 	{data.map((item, i) => <ProgramItem	{...item} key = {i}/>)}
			 	</div>

              )}
			  <footer>
			  	<span><strong>Developed by:</strong> Shailja Aggarwal</span>
			  </footer>
            </main>
        </div>

      );
    }
  };
  export default connect(m, { fetchPrograms })(Programs);
