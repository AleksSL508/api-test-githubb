import React from "react";


// exibe os repositórios
const Repo = ({ repo }) => (

  <div className="card card-body mb-2">
    <div className="row">
      <div className="col-md-6">
        <a href={repo.html_url} target="_blank" >
          {repo.name}
        </a>
      </div>
    </div>
  </div>


);


export default Repo;
