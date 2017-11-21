import React, { Component } from 'react'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import { ALL_TEAMS_QUERY } from '../TeamList/TeamList'

class TeamNew extends Component {
  state = {
    name: ''
  }

  async create() {
    // const postedById = localStorage.getItem(GC_USER_ID)

    // if (!postedById) {
    //   console.error('No user logged in')
    //   return
    // }

    const { name } = this.state

    await this.props.mutate({
      variables: {
        name,
        // postedById
      },
      update: (store, { data: { createTeam } }) => {
        const data = store.readQuery({ query: ALL_TEAMS_QUERY })

        data.allTeams.push(createTeam)

        store.writeQuery({
          query: ALL_TEAMS_QUERY,
          data
        })
      }
    })

    this.back()
  }

  back() {
    this.props.history.push(`/team`)
  }

  render() {
    return (
      <div>
        <div>
          <h1>Create Team!</h1>
          <a onClick={() => this.back()}>voltar</a>
          <hr />
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="form-horizontal">
              <div className="form-group">
                <label className="col-sm-2 control-label" htmlFor="teamName">Name</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    id="teamName"
                    name="teamName"
                    className="form-control"
                    placeholder="Team name"
                    value={this.state.name}
                    onChange={(e) => this.setState({ name: e.target.value })}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="button" className="btn btn-default" onClick={() => this.create()}>Create Team</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export const CREATE_TEAM_MUTATION = gql`
  mutation CreateTeamMutation($name: String!) {
    createTeam(
      name: $name
    ) {
      id
      name
      createdAt
    }
  }
`

export default graphql(CREATE_TEAM_MUTATION)(TeamNew)
