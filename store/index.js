import axios from 'axios'
export const state = () => ({
    movies: [],
    netflix: [],
    people: [
        {
            id: 1,
            name: 'Adrian Van Ladrillano',
            username: 'ivanladrillano',
            instagram: {
                description: 'Simple men',
                following: [],
                followers: [],
                stories: [],
                posts: [{ caption: 'Lorem Ipsum', likes: [1, 5, 6, 7, 8, 3, 4], comments: [{ user: 1, comment: 'lorem ipsum' }], images: ['https://64.media.tumblr.com/e1e7b97e99ffcc14dd3434bc8c9cee3f/7fd92ab732fe63b2-eb/s640x960/0b1bffd757d482ec2af5a9785260fffc38910350.jpg'] }],
                settings: {
                }
            }
        },
        {
            name: 'Adrian Van Ladrillano',
            username: 'ivanladrillano',
            instagram: {
                description: 'Simple men',
                following: [],
                followers: [],
                stories: [],
                posts: [{ caption: 'Lorem Ipsum', images: ['https://64.media.tumblr.com/e1e7b97e99ffcc14dd3434bc8c9cee3f/7fd92ab732fe63b2-eb/s640x960/0b1bffd757d482ec2af5a9785260fffc38910350.jpg'] }],
                settings: {
                }
            }
        }],
    groups: [],
    host: 'localhost'
})

export const getters = {

}

export const mutations = {
    // Groups
    SET_GROUPS(state, groups) {
        state.groups = groups
    },
    ADD_GROUPS(state, payload) {
        state.groups.push(payload)
        console.log(state.groups)
    },
    // Files
    SET_MOVIES(state, movies) {
        state.movies = movies
    },
    ADD_FILES(state, payload) {
        state.files.push(payload)
        console.log(state.files)
    },
    UPDATE_FILES(state, payload) {
        // let index = state.departments.map(el => el._id).indexOf(payload._id)
        // state.departments[index] = payload
        // console.log(state.departments)
    },
}

export const actions = {

    async get_netflix({ commit }) {
        axios
            .get(
                'https://api.themoviedb.org/3/list/1?api_key=2cba07250c68ac124f41fc4eb8d617b8'
            )
            .then(res => {
                commit('SET_MOVIES', res.data.items)

            })
            .catch(err => {
                console.error(err)
            })

    },

}