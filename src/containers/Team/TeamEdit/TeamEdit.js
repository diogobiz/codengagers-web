import React, { Component } from 'react'

import { graphql, compose } from 'react-apollo'

import { ALL_TEAMS_QUERY, FIND_TEAM_QUERY, UPDATE_TEAM_MUTATION } from '../../../graphql'

class TeamEdit extends Component {
  state = {
    name: ''
  }

  async update() {
    // const postedById = localStorage.getItem(GC_USER_ID)

    // if (!postedById) {
    //   console.error('No user logged in')
    //   return
    // }

    const { name } = this.state

    await this.props.mutate({
      variables: {
        id: this.props.match.params.id,
        name,
        // postedById
      },
      update: (store, { data: { updateTeam } }) => {
        const data = store.readQuery({ query: ALL_TEAMS_QUERY })

        data.allTeams = data.allTeams.map((team) => {
          if (team.id === updateTeam.id) {
            team.name = updateTeam.name
          }

          return team
        })

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
    const { data: { loading, error, Team } } = this.props

    if (!loading && !error && !Team) {
      this.back()
    }

    if (Team && !this.state.name) {
      this.setState({
        name: Team.name
      })
    }

    return (
      <div>
        <div>
          <h1>Edit Team!</h1>
          <a onClick={() => this.back()}>voltar</a>
          <hr />
        </div>

        {loading &&
          <div>Loading...</div>}

        {error &&
          <div>Error</div>}

        {!loading && !error && <div className="row">
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
                  <button type="button" className="btn btn-default" onClick={() => this.update()}>Save Team</button>
                </div>
              </div>
            </div>
          </div>
        </div>}
      </div>
    )
  }
}

export default compose(
  graphql(FIND_TEAM_QUERY, {
    options: (props) => ({
      variables: {
        id: props.match.params.id
      }
    })
  }),
  graphql(UPDATE_TEAM_MUTATION)
)(TeamEdit)
