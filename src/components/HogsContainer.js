import React, { Component } from 'react'
import HogsTile from './HogTile'
import FilterSearch from './FilterSearch'

class HogsContainer extends Component {

  state = {
    greasedState: false
  }

  // greaseHogsCallback acts as a switch, simply flipping greasedState true or false
  greaseHogsCallback = () => {
    this.setState({greasedState: !this.state.greasedState})
  }

  // renderHogs returns an array of components, in this case HogsTiles which are each linked to a different hog
  renderHogs = () => {
    // we create a variable here (which'll get passed into the map) based on whether we want only greased hogs or all of them
    const hogsToShow = this.state.greasedState ? this.props.hogs.filter(hog => hog.greased) : this.props.hogs

    // if you map then don't forget to include the return!
    return hogsToShow.map(hog => {
      return <HogsTile key={hog.name} hog={hog} />
    })

    /* --- here's an example of a different way we could have done this (including the filter) --- */

    // if (this.state.greasedState) {
    //   return this.props.hogs.filter(hog => hog.greased).map(hog => (
    //     <HogsTile key={hog.name} hog={hog} />
    //   ))
    // }
    //
    // return this.props.hogs.map(hog => (
    //   <HogsTile key={hog.name} hog={hog} />
    // ))

    /*--- ---*/

  } // end renderHogs

  render() {

    return (
      <div>
        {/* The filter is literally just there to flip the state for greasedState */}
        {/* it's also an example of passing a callback to a child component to change a parent's state */}
        <FilterSearch greaseHogs={this.greaseHogsCallback} />

        <div className="ui grid container">
          {/* since we have a helper function, all we need to do here is invoke renderHogs and it'll return an array of components to render */}
          {this.renderHogs()}
        </div>

      </div>
    )
  }
}

export default HogsContainer
