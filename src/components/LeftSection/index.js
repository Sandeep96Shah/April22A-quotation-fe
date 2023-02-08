import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './styles';
import { connect } from 'react-redux';
import { TYPE } from '../../action/types';

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
    return(
        <Container>
            <div className='all' onClick={handleAll}>All</div>
            <div className='posted' onClick={handlePosted}>Posted</div>
            <div className='logout' onClick={handleLogOut}>Logout</div>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps)(LeftSection);