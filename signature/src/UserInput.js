import React from 'react'
import { Input } from 'semantic-ui-react'
import "./App.css"
const UserInput = (props) => {


  const onChange = (e) => {
    const { value, name } = e.target
    props.setInputs({
      ...props.inputs,
      [name]: value
    })

  }
  return (
    <div className="userInput">
      <div className="input-box input-once">
        <p>몇월 교육 지원금 인가요?</p>
        <Input size='mini' name="attendMonth" onChange={onChange} placeholder="달" defaultValue={props.inputs.attendMonth} /> <br />
      </div>
      <div className="input-box  input-once">
        <p>이름</p>
        <Input size='mini' name="name" onChange={onChange} placeholder="이름" /> <br />
      </div>
      <div className="input-box">
        <p>지역 / 반(숫자만)</p>
        <div className="input-flex">
          <Input size='mini' name="location" onChange={onChange} placeholder="지역" />
          <span>/</span>
          <Input size='mini' name="classNum" onChange={onChange} placeholder="반" className="second-input" />
        </div>
      </div>
      <div className="input-box">
        <p>총 출석일 / 총 수업일</p>
        <div className="input-flex">
          <Input size='mini' name="attendDays" onChange={onChange} placeholder="총 출석일" />
          <span>/</span>
          <Input size='mini' name="totalDays" onChange={onChange} placeholder="총 수업일" className="second-input" />
        </div>
      </div>


      <div className="input-box">
        <p>제출일 ( 월 / 일 )</p>
        <div className="input-flex">
          <Input size='mini' name="month" onChange={onChange} placeholder="몇월" defaultValue={props.inputs.month} />
          <span>/</span>
          <Input size='mini' name="date" onChange={onChange} placeholder="몇일" defaultValue={props.inputs.date} className="second-input" />
        </div>
      </div>



    </div>
  )
}

export default UserInput
