import React, { Component } from 'react'

class HogTile extends Component {

  state = {
    toggled: false
  }

  // an easy way to toggle a true/false state
  handleToggled = () => {
    this.setState({toggled: !this.state.toggled})
  }

  // we're keeping the details here so we don't have to do a bunch of work in the render method
  renderDetails = () => {
    // example of deconstruction
    const {name, specialty, weight, greased} = this.props.hog

    return (
      <div>
        <p>Specialty: {specialty}</p>
        <p>Weight: {weight}</p>
        <p>Greased: {greased.toString()}</p>
        {/* deconstruction won't work well for these weird keys that are strings */}
        <p>Highest Medal Achieved: {this.props.hog["highest medal achieved"]}</p>
      </div>
    )
  }

  render() {
    // more examples of deconstruction, otherwise we'd have to call things like this.state.toggled
    const {state, renderDetails} = this
    const {toggled} = state

    const {name, specialty, weight, greased} = this.props.hog

    // we parse our img file path here for readability
    const imgFile = `/hog-imgs/${name.toLowerCase().split(' ').join('_')}.jpg`
    // very importantly, I moved them to the public folder since that's where html will look for image paths
    // otherwise we'd have to import the images which is fine but not helpful here

    return(
      <div onClick={this.handleToggled}
      className="ui eight wide column">

        <img src={imgFile} alt={name} />
        <p>Name: {name}</p>

        {/* an example of logical operator shortcuts, you can read more here: */}
        {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators */}
        {toggled && renderDetails()}

      </div>
    )
  }
}

export default HogTile
