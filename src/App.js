import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Repo from "./Repo";
import Starred from "./Starred";

// construtor
class App extends Component {
  constructor() {
    super();
    this.state = {
      github: {
        url: "https://api.github.com/users",
        client_id: "1cf7eda1e0888346b13d",
        client_secret: "6b43811da37946a034690022f0f8ccfd8bc82d73 ",
        count: "",
        sort: "created: asc"
      },
      user: [],
      repos: [],
      starred: [],
      search: ""
    };
  }

  getUser = e => {
    const user = e.target.value;
    const { url, client_id, client_secret, count, sort } = this.state.github;

    axios
      .get(
        `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`
      )
      .then(({ data }) => this.setState({ user: data }));

    axios
      .get(
        `${url}/${user}/repos?per_page=${count}&sort=${sort}&client_id=${client_id}&client_secret=${client_secret}`
      )
      .then(({ data }) => this.setState({ repos: data }));

    axios
      .get(
        `${url}/${user}/starred?per_page=${count}&sort=${sort}&client_id=${client_id}&client_secret=${client_secret}`
      )
      .then(({ data }) => this.setState({ starred: data }));
  };
  // render dos repositórios e repositórios mais visitados
  renderProfile = () => {
    const { user, repos, starred } = this.state;
    return (
      <div className="row">
        <div className="col-md-12">
          <Profile user={user} />
        </div>
        <div className="col-md-6">
          <label><b>REPOSITÓRIOS</b></label>
          {repos.map(repo => (
            <Repo repo={repo} key={repo.name} />
          ))}
          
        </div>
        <div className="col-md-6">
          <div>
          <label><b>STARREDS</b></label>
          {starred.map(starred => (
            <Starred starred={starred} key={starred.name} />
          ))}
        </div>
        </div>
        
      </div>
    );
  };
  // barra de pesquisa
  render() {
    const { user, repos, starred } = this.state;
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="search card card-body mb-3">
            <h1>Pesquisar Usuários do GitHub</h1>
            <p className="lead">
              Digite um nome para encontrar usuários e repositórios
            </p>
            <input
              onChange={this.getUser}
              className="form-control"
              placeholder="Digite o nome de um usuário..."
              required
            />
          </div>
          {user.length !== 0 ? this.renderProfile() : null}
        </div>
      </div>
    );
  }
}



export default App;
