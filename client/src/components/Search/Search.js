
import React from "react";

const Search = (props) => {
    return (
        <div>
            <div className="panel panel-default border border-secondary mb-5 p-5">
                <div className="panel-body">
                    <div className="input-group">
                        <div className="panel-heading mr-3">Search:  </div>
                        <input
                            type="text"
                            className="form-control mr-3"
                            onChange={props.handleSearchInput}
                            value={props.search}
                        />
                        <div className="panel-heading mr-3">Start Year (YYYYMMDD):</div>
                        <input
                            type="text"
                            className="form-control mr-3"
                            onChange={props.handleStartInput}
                            value={props.startYear}
                        />
                        <div className="panel-heading mr-3">End Year (YYYYMMDD):</div>
                        <input
                            type="text"
                            className="form-control"
                            onChange={props.handleEndInput}
                            value={props.endYear}
                        />

                        <span className="input-group-btn ml-3">
                            <button
                                className="btn text-light bg-secondary"
                                id="search-btn"
                                type="button"
                                onClick={props.handleSubmit}
                            ><i className="fa fa-search"></i>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Search;