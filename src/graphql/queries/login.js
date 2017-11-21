import gql from 'graphql-tag'

export default gql`
  query LoginUserQuery($email: String!) {
    User(
      email: $email
    ) {
      id
      name
      email
      password
      teams {
        id
        name
      }
    }
  }
`