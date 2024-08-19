import React from 'react'

const Score = () => {
  return (
    <div>
      <h4 className='text-center'><b>Read the Instructions Carefully</b></h4>
      <ol className="font-monospace border border-3 rounded-3 instructions">
        <li>There is no negative marking.</li>
        <li>For every correct answer, you will earn 1 point.</li>
        <li>Correct answers will highlight the option in green.</li>
        <li>Incorrect answers will highlight the option in red.</li>
        <li>To skip a question, press the "Next" button.</li>
        <li>To revisit a previously answered question, click the "Previous" button.</li>
        <li>To view your results, simply press the "Submit" button.</li>
      </ol>
    </div>
  )
}

export default Score
