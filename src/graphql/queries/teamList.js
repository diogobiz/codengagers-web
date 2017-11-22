import gql from 'graphql-tag'

export default gql`
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