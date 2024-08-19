import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import questions from "../../questions.json";
import { Link } from "react-router-dom";

class Play extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions,
      currentQuestion: {},
      nextQuestion: {},
      previousQuestion: {},
      answer: "",
      numberOfQuestions: questions.length,
      numberOfAnsweredQuestion: 0,
      currentQuestionIndex: 0,
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      selectedOption: null,
      isCorrect: null,
      nextButtonDisabled: false,
      previousButtonDisabled: true,
      quizFinished: false // New state to track if quiz is finished
    };
  }

  componentDidMount() {
    this.displayQuestions();
  }

  displayQuestions = () => {
    const { questions, currentQuestionIndex } = this.state;
    const currentQuestion = questions[currentQuestionIndex];
    const nextQuestion = questions[currentQuestionIndex + 1];
    const previousQuestion = questions[currentQuestionIndex - 1];

    this.setState({
      currentQuestion,
      nextQuestion,
      previousQuestion,
      answer: currentQuestion.answer,
      selectedOption: null,
      isCorrect: null,
    }, this.handleDisabledButtons);
  };

  handleOptionClick = (e) => {
    const selectedOption = e.target.innerHTML;
    const isCorrect = selectedOption.toLowerCase() === this.state.answer.toLowerCase();

    if (isCorrect) {
      this.correctAnswer();
    } else {
      this.wrongAnswer();
    }

    this.setState({ selectedOption, isCorrect });
  };

  handleNextButtonClick = () => {
    const { currentQuestionIndex, numberOfQuestions } = this.state;

    if (currentQuestionIndex + 1 < numberOfQuestions) {
      this.setState((previousState) => ({
        currentQuestionIndex: previousState.currentQuestionIndex + 1
      }), this.displayQuestions);
    } else {
      this.handleEndQuiz();
    }
  };

  handlePreviousButtonClick = () => {
    this.setState((previousState) => ({
      currentQuestionIndex: previousState.currentQuestionIndex - 1
    }), this.displayQuestions);
  };

  handleQuitButtonClick = () => {
    this.setState((previousState) => ({
        correctAnswer: previousState.correctAnswer
      }), this.displayQuestions);
  };

  correctAnswer = () => {
    this.setState((previousState) => ({
      score: previousState.score + 1,
      correctAnswers: previousState.correctAnswers + 1,
      numberOfAnsweredQuestion: previousState.numberOfAnsweredQuestion + 1,
    }));
  };

  wrongAnswer = () => {
    this.setState((previousState) => ({
      wrongAnswers: previousState.wrongAnswers + 1,
      numberOfAnsweredQuestion: previousState.numberOfAnsweredQuestion + 1,
    }));
  };

  handleEndQuiz = () => {
    this.setState({ quizFinished: true });
  };

  getOptionClass = (option) => {
    const { selectedOption, isCorrect } = this.state;
    if (selectedOption === option) {
      return isCorrect ? "text-success" : "text-danger";
    }
    return "";
  };

  handleDisabledButtons = () => {
    const { currentQuestionIndex, numberOfQuestions } = this.state;

    this.setState({
      previousButtonDisabled: currentQuestionIndex === 0,
      nextButtonDisabled: currentQuestionIndex >= numberOfQuestions - 1
    });
  }

  render() {
    const { currentQuestion, previousButtonDisabled, nextButtonDisabled, score, quizFinished } = this.state;

    if (quizFinished) {
      return (
        <Fragment>
          <Helmet>
            <title>Quiz Finished</title>
          </Helmet>
          <div className="quiz-end">
            <h2>Quiz Finished!</h2>
            <p>Your total score is: {score}</p>
            <button onClick={() => this.props.history.push('/')}>
              Go to Home
            </button>
          </div>
        </Fragment>
      );
    }

    return (
      <Fragment>
        <Helmet>
          <title>Quiz Page</title>
        </Helmet>
        <div className="question-card">
          <h4 style={{margin: "40px"}} className="text-dark"><i>{currentQuestion.question}</i></h4>
          <div className="container">
            <div className="row">
              <div className="col">
                <p
                  onClick={this.handleOptionClick}
                  className={`options ${this.getOptionClass(currentQuestion.optionA)}`}
                >
                  {currentQuestion.optionA}
                </p>
              </div>
              <div className="col">
                <p
                  onClick={this.handleOptionClick}
                  className={`options ${this.getOptionClass(currentQuestion.optionB)}`}
                >
                  {currentQuestion.optionB}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p
                  onClick={this.handleOptionClick}
                  className={`options ${this.getOptionClass(currentQuestion.optionC)}`}
                >
                  {currentQuestion.optionC}
                </p>
              </div>
              <div className="col">
                <p
                  onClick={this.handleOptionClick}
                  className={`options ${this.getOptionClass(currentQuestion.optionD)}`}
                >
                  {currentQuestion.optionD}
                </p>
              </div>
            </div>
            <div className="col">
              <button 
                onClick={this.handlePreviousButtonClick} 
                className="btn btn-primary"
                disabled={previousButtonDisabled}
              >
                Previous
              </button>
              <button
                onClick={this.handleNextButtonClick}
                className="btn btn-success"
                style={{ marginLeft: "10px" }}
                disabled={nextButtonDisabled}
              >
                Next
              </button>
              <button
                onClick={this.handleQuitButtonClick}
                className="btn btn-warning"
                style={{ marginLeft: "10px" }}
              >
                Submit
              </button>
              <Link
                className="btn btn-outline-info"
                style={{ marginLeft: "250px" }} to="/play/quiz/instructions">Read Instructions</Link>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Play;
