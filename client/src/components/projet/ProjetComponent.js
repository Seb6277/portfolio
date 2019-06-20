import React from 'react'
import {UncontrolledCarousel} from 'reactstrap'
import axios from 'axios'

class ProjetComponent extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    axios.get('/api/projects/get').then(response => {
      this.setState({projects: response.data})
    })
  }

  render() {
    return(
        <div className="projet_frame col-sm-12 col-md-8 offset-md-2">
          <h1>Projets</h1>
          <p>
            Ci-dessous vous trouverez un bréve description de chaque projet ainsi que la liste des liens direct vers ses derniers.
          </p>
          <UncontrolledCarousel items={this.state.projects} interval={0} autoPlay={false}/>
          <div className="button_link">
            {this.state.projects.map((project) => (
              <a key={project._id} className="btn btn-secondary" href={project.url}>{project.header}</a>
            ))}
          </div>
        </div>
    )
  }
}

export default ProjetComponent