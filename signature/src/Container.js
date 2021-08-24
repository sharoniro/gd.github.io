import React, { useState } from 'react'
import Canvas from './Canvas'
import UserInput from './UserInput'

const Container = () => {
  const today = new Date();
  const [inputs, setInputs] = useState({
    name: '김싸피',
    month: today.getMonth() + 1,
    date: today.getDate(),
    attendMonth: today.getMonth(),
    totalDays: 1,
    attendDays: 1,
    location: '서울',
    classNum: 6,
  })

  return (
    <div className="container">
      <div>
        <Canvas inputs={inputs} />
      </div>
      <UserInput inputs={inputs} setInputs={setInputs} />
    </div>
  )
}

export default Container
