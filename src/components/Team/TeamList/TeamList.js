import React from 'react'

const TeamList = ({ teams }) => (
  <table className="table table-striped table-hover">
    <thead>
      <tr>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      {teams.map((team, index) => (
        <tr key={team.id}>
          <td>
            <a onClick={() => this.edit(team.id)}>{team.name}</a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)

export default TeamList