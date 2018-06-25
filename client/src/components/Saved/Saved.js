import React from "react";

const Saved = (props) => {
    return (
        <div className="panel panel-default border border-secondary">
            <div className="panel-heading p-4 border-bottom border-secondary">Saved Articles:</div>

            <div className="panel-body result-heading" id="wellSection">
                {props.saved.map((article) => {
                    return (
                        <div className="well" key={article._id}>
                            <h5 id="section">
                                <button
                                    onClick={() => props.handleDelete(article._id)}
                                    className="delete-btn">
                                    <i className="far fa-trash-alt"></i> Delete
                                </button>
                                {article.date}
                            </h5>

                            <a href={article.url} target="_blank" id="title">
                                {article.title}
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

export default Saved;