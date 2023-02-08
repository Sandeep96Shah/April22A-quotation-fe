import React, {useEffect, useDispatch, useState} from "react";
import { connect } from 'react-redux';
import { Container } from "./styles";
import {data} from '../../DemoData';
import BlogForm from "../blogForm";
import { userDetails, quotations } from '../../action/index';

const LeftSection = (props) => {
  const { dispatch, user, allQuotations, type, isCreate } = props;
  useEffect(() => {
    dispatch(userDetails());
    dispatch(quotations());
  }, []);

  return (
    <Container>
      {isCreate ? <BlogForm /> : null}
      { type === 'posted' ?
      <>
      {user.quotaions?.length > 0 ? user.quotaions.map((quotation) => (
            <div className="quotation" key={quotation.id}>
            <p className="content">
             {quotation.content}
            </p>
            <p className="by">{quotation.by}</p>
          </div>
        )): (<h1>You haven't added any quotations!</h1>)}
      </> : 
      <>
         {allQuotations.quotations?.length > 0 ? allQuotations.quotations.map((quotation) => (
            <div className="quotation" key={quotation.id}>
            <p className="content">
             {quotation.content}
            </p>
            <p className="by">{quotation.by}</p>
          </div>
        )): (<h1>You haven't added any quotations!</h1>)}
      </>
}
        
      
    </Container>
  );
};

const matStateToProps = (state) => {
  const { user, quotations, type, isCreate } = state;
  return {
    user: user,
    allQuotations: quotations,
    type: type,
    isCreate: isCreate
  }
}

export default connect(matStateToProps)(LeftSection);
