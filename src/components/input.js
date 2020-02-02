import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getSeriesData } from '../actions/input';

class DataInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSeriesId: undefined,
            previousSeriesId: undefined,
            loading: false,
            error: false
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            loading: nextProps.loading, 
            error: nextProps.error, 
            previousSeriesId: 
            this.props.currentSeriesId
        })
      }
    
    doChange = (event) => this.setState({currentSeriesId: event.target.value});

    doSubmit = (event) => {
        // Only make a request when not loading, have numeric input, and the input is not the same as last.
        if (!this.state.loading && this.state.currentSeriesId !== undefined && this.state.currentSeriesId !== this.state.previousSeriesId) {
            const id = this.state.currentSeriesId;
            if (isNaN(id)) {
                this.setState({error: true});
            }
            else {
                this.props.getSeriesData(id);
            }
        }
        event.preventDefault();
    }

    render() {
        return (
            <div id="input">
                <form onSubmit={this.doSubmit}>
                    <div className="seriesId">
                        <label htmlFor="seriesId">Series Id:</label>
                        <input id="seriesId" onChange={this.doChange} value={this.state.seriesId}/>
                        <button type="submit" class="submit-button">GET SERIES DATA</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentSeriesId: state.currentSeriesId,
    loading: state.loading,
    error: state.error
});

const mapDispatchToProps = dispatch => ({
    getSeriesData: (seriesId) => {
        dispatch(getSeriesData(seriesId));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(DataInput);