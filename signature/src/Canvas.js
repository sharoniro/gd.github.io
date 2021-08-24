import React, { useEffect, useRef } from 'react'
import img from './지원금.PNG'
import "./App.css"
import { Button } from 'semantic-ui-react'
const Canvas = (props) => {

  console.log(props.inputs.month)
  const canvasRef = useRef();
  const canvasRefFont = useRef();
  const canvasRefSubmit = useRef();
  let canvas, canvasFont, canvasSubmit;
  let ctx, ctxFont, ctxSubmit;
  let image;

  function draw() {

    canvasFont = canvasRefFont.current;
    ctxFont = canvasFont.getContext('2d')
    ctxFont.clearRect(0, 0, 1039, 990);
    ctxFont.font = '30px serif';

    if ((props.inputs.attendMonth + '').length === 2) {
      ctxFont.font = 'bold 38px serif';
      ctxFont.fillText(props.inputs.attendMonth, 543, 40)
      ctxFont.fillText(props.inputs.attendMonth, 395, 333)
    } else {
      ctxFont.font = 'bold 50px serif';
      ctxFont.fillText(props.inputs.attendMonth, 555, 42) // 
      ctxFont.font = '30px serif';
      ctxFont.fillText(props.inputs.attendMonth, 395, 333)
    }
    ctxFont.font = '30px serif';
    ctxFont.fillText(props.inputs.location, 230, 183)
    ctxFont.fillText(props.inputs.classNum, 480, 183)
    ctxFont.fillText(props.inputs.name, 840, 190)
    ctxFont.font = 'bold  40px serif';
    ctxFont.fillText(props.inputs.name, 210, 330)
    ctxFont.font = '30px serif';

    ctxFont.font = '27px serif';
    console.log((props.inputs.totalDays + '').length)
    if ((props.inputs.totalDays + '').length === 1) {
      ctxFont.fillText(props.inputs.totalDays, 600, 330)
    } else {
      ctxFont.fillText(props.inputs.totalDays, 590, 330)
    }
    ctxFont.fillText(props.inputs.attendDays, 900, 330)
    ctxFont.fillText(props.inputs.month, 840, 764)
    if ((props.inputs.date + '').length === 1) {
      ctxFont.fillText(props.inputs.date, 945, 764)
    } else {
      ctxFont.fillText(props.inputs.date, 935, 764)
    }
    ctxFont.fillText(props.inputs.name, 740, 890)
    ctxFont.font = 'italic 30px serif';
    ctxFont.fillText(props.inputs.name, 900, 890)
  }

  function clearCanvas() {
    canvas = canvasRef.current;
    canvasFont = canvasRefFont.current;
    ctx = canvas.getContext('2d')
    ctxFont = canvasFont.getContext('2d')
    image = new Image();
    image.onload = () => {
      ctx.drawImage(image, 0, 0)
    }
    image.src = img
  }


  function downloadCanvas() {

    canvas = canvasRef.current;
    canvasFont = canvasRefFont.current;
    canvasSubmit = canvasRefSubmit.current;
    ctx = canvas.getContext('2d')
    ctxFont = canvasFont.getContext('2d')
    ctxSubmit = canvasSubmit.getContext('2d')

    ctxSubmit.drawImage(canvas, 0, 0);
    ctxSubmit.drawImage(canvasFont, 0, 0);

    let link = document.createElement('a');
    const fileName = '' + props.inputs.location + '_' + props.inputs.classNum + '반_' + props.inputs.name
    link.download = fileName + ".JPG";
    link.href = canvasSubmit.toDataURL();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }



  useEffect(() => {
    clearCanvas()
  })






  return (
    <>
      <div style={{ position: 'relative', width: '1039px', height: '990px' }}>
        <canvas
          id="canvasTop"
          ref={canvasRef}
          width={1039}
          height={990}
        />
        <canvas
          id="canvasBottom"
          ref={canvasRefFont}
          width={1039}
          height={990}
        />
        <canvas
          style={{ display: 'none' }}
          id="canvasSubmit"
          ref={canvasRefSubmit}
          width={1039}
          height={990}
        />
      </div>


      <div className="button-group">
        <Button primary onClick={draw}>결과 미리 보기</Button>
        <Button secondary onClick={downloadCanvas}>다운로드</Button>
      </div>

    </>
  )
}

export default Canvas
