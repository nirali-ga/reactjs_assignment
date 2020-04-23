import { GET_POSTS, PAGE_CHANGE } from "../constants/actionTypes"

const initialState = {
    posts: [],
    upcomingPosts: [],
    currentPosts: [],
    page: 0,
    selectedPage: 1,
    totalPages: 1
}

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_POSTS:
            let currentPosts = [];
            let posts = [];
            let upcomingPosts = [...state.upcomingPosts, ...action.payload];
            let page = state.page + 1;
            if (!state.currentPosts.length) {
                currentPosts = [...action.payload]
            } else {
            currentPosts = [...state.currentPosts];
            }
            posts = [...state.posts, ...upcomingPosts];
            return {
                ...state,
                currentPosts,
                posts,
                page,
                totalPages: page,
            }

        case PAGE_CHANGE:

        console.log(action.payload);
        
            let allPosts = [];
            let selectedPage = action.payload;
            let startIndex = (selectedPage - 1) * 20;
            let endIndex = selectedPage * 20;
            let totalPosts = [...state.posts];
            allPosts = totalPosts.slice(startIndex, endIndex);
            return {
                ...state,
                currentPosts:allPosts,
                selectedPage:action.payload
            }

        default:
            return {
                ...state,
            }
    }

}

export default rootReducer;