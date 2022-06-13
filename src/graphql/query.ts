import {gql} from 'graphql-tag'

export const GET_MISSION_SPACE = gql`
query GetSpaceMission($limit: Int!){ 
   launchesPast(limit: $limit) {
    mission_name
    rocket {
      rocket_name
    }
    links {
      flickr_images
    }
    launch_site {
      site_name_long
    }
    details
  }
}
`;
