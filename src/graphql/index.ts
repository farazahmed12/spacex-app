import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GET_MISSION_SPACE } from './query'

export const apolloClient = new ApolloClient({
    uri: "http://api.spacex.land/graphql/",
    cache: new InMemoryCache()
})

class SpaceService{
    async getSpaceMission(limit = 10) {
        try {
            const response = await apolloClient.query({
                query: GET_MISSION_SPACE,
                variables: {limit}
            })
            if(!response || !response.data) throw new Error("Cannot get Rocket launches List")
            return response.data.launchesPast
        } catch(err){
            throw err
        }
    }
}


export default new SpaceService();