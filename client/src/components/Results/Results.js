import React from "react";

const Results = (props) => {
    return (
        <div className="panel panel-default border border-secondary mb-5">
            <div className="panel-heading p-4 border-bottom border-secondary">Results:</div>

            <div className="panel-body result-heading" id="wellSection">
                {props.results.map((article) => {
                    return (
                        <div className="well" key={article._id}>
                            <h5 id="section">
                                <button
                                    onClick={() => props.handleSave(article.headline.main, article.web_url, article.pub_date, article.snippet)}
                                    className="save-btn">
                                    <i className="far fa-bookmark"></i> Save
                                </button>
                                {article.pub_date}
                            </h5>

                            <a href={article.web_url} target="_blank" id="title">
                                {article.headline.main}
                            </a>

                            <h5 id="summary">{article.snippet}</h5>
                            <br />
                            <hr />
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
};

export default Results;