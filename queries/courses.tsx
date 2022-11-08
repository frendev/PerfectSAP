import gql from "graphql-tag";

export const GET_ALL_COURSES = gql`
  query GetAllCourses {
    courses: perfectSapCoursesCollection {
      items {
        title
        slug
        description {
          json
        }
        sys {
          id
          publishedAt
        }
      }
    }
  }
`;
