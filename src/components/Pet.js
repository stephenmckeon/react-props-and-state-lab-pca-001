import React from 'react'

class Pet extends React.Component {
  adoptedTest() {
    if (this.props.pet.isAdopted) {
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button onClick={() => this.props.onAdoptPet(this.props.pet.id)} className="ui primary button">Adopt pet</button>
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            Gender: {this.props.pet.gender === "female" ? '♀' : '♂'}
            Name: {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">Type: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">{this.adoptedTest()}</div>
      </div>
    )
  }
}

export default Pet
