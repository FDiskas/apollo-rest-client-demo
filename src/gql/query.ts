import gql from 'graphql-tag';

export const GET_POSTS = gql`
  query getPosts($input: Any, $query: String! = "") {
    postList(input: $input)
      @rest(type: "postList", method: "GET", path: "/posts", query: $query) {
      id
      title
    }
  }
`;
