import React, { Component } from 'react'

import { graphql } from 'react-apollo'

import { ALL_USERS_QUERY } from '../../graphql'

import { CoworkersList } from '../../components/Coworkers'

class Coworkers extends Component {
  render() {
    const { data: { loading, error, allUsers } } = this.props

    return (
      <div>
        <h2>Coworkers</h2>
        <hr />

        {loading &&
          <div>Loading...</div>}

        {error &&
          <div>Error</div>}

        {allUsers &&
          <CoworkersList coworkers={allUsers} />}
      </div>
    )
  }
}

export default graphql(ALL_USERS_QUERY)(Coworkers)