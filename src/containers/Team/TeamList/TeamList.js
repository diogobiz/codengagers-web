import React, { Component } from 'react'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

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
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {allTeams.map((team, index) => (
                <tr key={team.id}>
                  <td>
                    <a onClick={() => this.edit(team.id)}>{team.name}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>}
      </div>
    )
  }
}

export const ALL_TEAMS_QUERY = gql`
  query AllTeamsQuery {
    allTeams {
      id
      name,
      members {
        id
        name
      }
    }
    _allTeamsMeta {
      count
    }
  }
`

export default graphql(ALL_TEAMS_QUERY)(TeamList)
