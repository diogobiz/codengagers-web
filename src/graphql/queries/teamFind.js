import gql from 'graphql-tag'

export default gql`
  query FindTeamQuery($id: ID!) {
    Team(
      id: $id
    ) {
      id
      name,
      members {
        id
        name
      }
    }
  }
`