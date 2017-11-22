import React, { Component } from 'react'

import { graphql } from 'react-apollo'

import { ALL_TEAMS_QUERY } from '../../../graphql'

import { TeamList as TeamListComponent } from '../../../components/Team'

class TeamList extends Component {
  create() {
    this.props.history.push(`/team/new`)
  }

  edit(id) {
    this.props.history.push(`/team/edit/${id}`)
  }

  render() {
    const { data: { loading, error, allTeams } } = this.props

    return (
      <div>
        <div>
          <h1>Teams!</h1>
          <a onClick={() => this.create()}>new</a>
          <hr />
        </div>

        {loading &&
          <div>Loading...</div>}

        {error &&
          <div>Error</div>}

        {allTeams &&
          <TeamListComponent teams={allTeams} />}
      </div>
    )
  }
}

export default graphql(ALL_TEAMS_QUERY)(TeamList)
