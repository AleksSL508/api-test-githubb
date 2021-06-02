import React from "react";


//exibe os repositorios marcados com estrelas (starred)
const Starred = ({ starred }) => (

    <div className="card card-body mb-2">
        <div className="row">
            <div className="col-md-6">
                <a href={starred.html_url} target="_blank">
                    {starred.name}
                </a>
            </div>
        </div>
    </div>

);

export default Starred;
