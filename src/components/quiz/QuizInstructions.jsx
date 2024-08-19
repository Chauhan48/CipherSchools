import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const QuizInstructions = () => (
      <Fragment>
        <Helmet><title>Quizz Instructions - Quizz App</title></Helmet>
        <div>
          <h1>How to play the game</h1>
        </div>
        <div>
          <span><Link to="/">No take me back</Link></span>
          <span><Link to="/play/quiz">Okay let's do this</Link></span>
        </div>
      </Fragment>
  );

export default QuizInstructions;
