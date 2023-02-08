import React, { useState } from 'react';
import { connect } from 'react-redux';
import { BLOG_CREATE } from '../../action/types';
import { createQuotations } from '../../action/index';
import { Container } from './styles';


const BlogForm = ({dispatch}) => {
    const handleBlogForm = () => {
        dispatch({type: BLOG_CREATE, data: false})
    }

    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        // e.preventDefault();
        console.log("hellloooo!")
        dispatch(createQuotations({content}));
    }
    return (
        <Container>
            <div className='formBody'>
                 <h1>Create Blog</h1><span onClick={handleBlogForm}>X</span>
                 <form onSubmit={handleSubmit}>
                    <label htmlFor='content'>Content</label>
                    <textarea cols={30} rows={5} onChange={(e) => setContent(e.target.value)} value={content}></textarea>
                    <input type="submit" value="Post" />
                 </form>
            </div>
        </Container>
    )
}

export default connect()(BlogForm);