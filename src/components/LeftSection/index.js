import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './styles';
import { connect } from 'react-redux';
import { TYPE, BLOG_CREATE } from '../../action/types';

const LeftSection = (props) => {
    const { dispatch } = props;
    const navigate = useNavigate();
    const handleLogOut = () => {
        localStorage.removeItem('token');
        navigate('/');
    }
    const handleAll = () => {
        dispatch({type: TYPE, data: "all"});
    }

    const handlePosted = () => {
        dispatch({type: TYPE, data: 'posted'});
    }
    const handleBlogForm = () => {
        dispatch({type: BLOG_CREATE, data: true})
    }
    return(
        <Container>
            <div className='all' onClick={handleAll}>All</div>
            <div className='posted' onClick={handlePosted}>Posted</div>
            <div onClick={handleBlogForm}>Create</div>
            <div className='logout' onClick={handleLogOut}>Logout</div>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps)(LeftSection);