import gql from 'graphql-tag'

export default gql`
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