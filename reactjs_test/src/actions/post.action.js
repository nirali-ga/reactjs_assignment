import { getPosts } from "../services/post.service"
import { GET_POSTS, PAGE_CHANGE } from "../constants/actionTypes";

export const getPostsAction = (page)=>((dispatch)=>{
    getPosts(page).then((res)=>{
        if(res && res.status===200){
            dispatch({
                type:GET_POSTS,
                payload:res.data.hits
            })
        }
    }).catch((err)=>{
        console.log(err);
    })
});

export const pageChangeAction=(p)=>((dispatch)=>{
    dispatch({
        type:PAGE_CHANGE,
        payload:p
    })
})

