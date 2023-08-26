import { createContext, useContext } from 'react';

const PostContext = createContext();

export const usePost = () => {
    return useContext(PostContext);
};

export default PostContext;