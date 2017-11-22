import gql from 'graphql-tag'

export default gql`
  query AllUsersQuery {
    allUsers {
      id
      name,
      email,
      teams {
        id
        name
      }
    }
    _allUsersMeta {
      count
    }
  }
`