import gql from 'graphql-tag'

export default gql`
  mutation UpdateTeamMutation($id: ID!, $name: String!) {
    updateTeam(
      id: $id
      name: $name
    ) {
      id
      name
      createdAt
    }
  }
`