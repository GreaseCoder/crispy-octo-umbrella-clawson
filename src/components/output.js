import React, {Component} from 'react';
import { connect } from 'react-redux';


class DataOutput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadComponent: false,
            imageURL: null,
            seriesTitle: null,
            episodeList: null,
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            loadComponent: nextProps.loadComponent, 
            imageURL: nextProps.imageURL, 
            seriesTitle: nextProps.seriesTitle, 
            episodeList: nextProps.episodeList
        });
    }

    makeEpisodeList() {
        let items = [];
        this.state.episodeList.forEach(episode => {
            items.push(<li>{episode.episodeNumber + ". " + episode.episodeTitle}</li>);
        });
        return items;
    }

    render() {
        if (this.state.loadComponent) {
            return (
                <div className="series-container">
                    <div className="series-header">
                        <img className="seriesHeroArt" src={this.state.imageURL} alt="series art" />
                    </div>
                    <div className="series-data">
                        <div className="seriesTitle">
                            <span>{this.state.seriesTitle}</span>
                        </div>
                        <div className="episodeList">
                            <div className="list-container">
                                <span class="list-label">First Twenty (or less) Episodes:</span>
                                <span class="list-display"><ol>{this.makeEpisodeList()}</ol></span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (<div className="series-container"></div>)
        }
    }
    
}

const mapStateToProps = state => ({
    loadComponent: state.loadComponent,
    imageURL: state.imageURL,
    seriesTitle: state.seriesTitle,
    episodeList: state.episodeList
});

export default connect(mapStateToProps, null)(DataOutput);