import { Fragment } from 'react';
import ExpenseForm from '../Expense/ExpenseForm';

import VerifyEmailForm from '../VerifyEmail/VerifyEmailForm';
import classes from './StartingPageContent.module.css';

const StartingPageContent = () => {

  return (
    <Fragment>
    <section className={classes.starting}>
      
      <VerifyEmailForm/><br/>
      
      <ExpenseForm/>
    </section>
    
    </Fragment>
  );
};

export default StartingPageContent;