let canvas;
let ctx;
let strokeColor = "black";
let font = "serif";
let fontSize = "48px";
let canvasWidth = 400;
let canvasHeight = 200;

const initCanvas = () => {
  canvas = document.getElementById("signCanvas");
  canvas.setAttribute("width", canvasWidth);
  canvas.setAttribute("height", canvasHeight);
  ctx = canvas.getContext("2d");
  ctx.lineWidth = 1;
  ctx.strokeStyle = strokeColor;
  ctx.fillStyle = "rgba(255, 255, 255, 1)";
  ctx.save();
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  canvas.addEventListener("mousedown", e => mouseDown(e), false);
  canvas.addEventListener("mousemove", e => mouseMove(e), false);
  canvas.addEventListener("mouseup", () => mouseUp(), false);
  canvas.addEventListener("mouseout", () => mouseOut(), false);
}

const initPalette = () => {
  let palette = [
    [
      "#FF0000",
      "#FF5E00",
      "#FFBB00",
      "#FFE400",
      "#ABF200",
      "#1DDB16",
      "#00D8FF",
      "#0054FF",
      "#0100FF",
      "#5F00FF",
      "#FF00DD",
      "#FF007F",
      "#000000",
      "#FFFFFF"
    ],
    [
      "#FFD8D8",
      "#FAE0D4",
      "#FAECC5",
      "#FAF4C0",
      "#E4F7BA",
      "#CEFBC9",
      "#D4F4FA",
      "#D9E5FF",
      "#DAD9FF",
      "#E8D9FF",
      "#FFD9FA",
      "#FFD9EC",
      "#F6F6F6",
      "#EAEAEA"
    ],
    [
      "#FFA7A7",
      "#FFC19E",
      "#FFE08C",
      "#FAED7D",
      "#CEF279",
      "#B7F0B1",
      "#B2EBF4",
      "#B2CCFF",
      "#B5B2FF",
      "#D1B2FF",
      "#FFB2F5",
      "#FFB2D9",
      "#D5D5D5",
      "#BDBDBD"
    ],
    [
      "#F15F5F",
      "#F29661",
      "#F2CB61",
      "#E5D85C",
      "#BCE55C",
      "#86E57F",
      "#5CD1E5",
      "#6799FF",
      "#6B66FF",
      "#A566FF",
      "#F361DC",
      "#F361A6",
      "#A6A6A6",
      "#8C8C8C"
    ],
    [
      "#CC3D3D",
      "#CC723D",
      "#CCA63D",
      "#C4B73B",
      "#9FC93C",
      "#47C83E",
      "#3DB7CC",
      "#4374D9",
      "#4641D9",
      "#8041D9",
      "#D941C5",
      "#D9418C",
      "#747474",
      "#5D5D5D"
    ],
    [
      "#980000",
      "#993800",
      "#997000",
      "#998A00",
      "#6B9900",
      "#2F9D27",
      "#008299",
      "#003399",
      "#050099",
      "#3F0099",
      "#990085",
      "#99004C",
      "#4C4C4C",
      "#353535"
    ],
    [
      "#670000",
      "#662500",
      "#664B00",
      "#665C00",
      "#476600",
      "#22741C",
      "#005766",
      "#002266",
      "#030066",
      "#2A0066",
      "#660058",
      "#660033",
      "#212121",
      "#191919"
    ]
  ];
  let tag = "";
  for (i = 0; i < palette.length; i++) {
    for (j = 0; j < palette[i].length; j++) {
      tag +=
        "<div id=" + palette[i][j] +
        " class='colorBox' onclick='colorSet(this)'></div>";
    }
  }
  document.getElementById("paletteBox").innerHTML = tag;
  let colorBox = document.getElementsByClassName("colorBox");
  for (i = 0; i < colorBox.length; i++) {
    colorBox[i].style.background = colorBox[i].id;
  }
};

// Palette's onclick event
let beforeColor;
const colorSet = target => {
  strokeColor = target.id;
  strokeColor = target.id;
  if (beforeColor != undefined && beforeColor != null) {
    document.getElementById(beforeColor).className = document
      .getElementById(beforeColor)
      .className.replace(" active", "");
  }
  document.getElementById(target.id).className += " active";
  beforeColor = target.id;
};

// Initialize body
const init = () => {
  initCanvas();
  initPalette();
};

let cursorX = cursorY = 0;
let isDrawing = false;

function draw(x, y) {
  ctx.beginPath();
  ctx.moveTo(cursorX, cursorY);
  ctx.lineTo(x, y);
  ctx.stroke();
}

function mouseDown(e) {
  ctx.strokeStyle = strokeColor;
  cursorX = e.offsetX;
  cursorY = e.offsetY;
  isDrawing = true;
}

function mouseUp() {
  isDrawing = false;
}

function mouseMove(e) {
  if (!isDrawing)
    return;
  let x = e.offsetX, y = e.offsetY;
  draw(x, y);
  cursorX = x;
  cursorY = y;
}

function mouseOut() {
  isDrawing = false;
}

// Movement
const moveResolution = 5;

const moveLeft = () => {
  const data = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
  canvasReset();
  ctx.putImageData(data, -moveResolution, 0);
};

const moveRight = () => {
  const data = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
  canvasReset();
  ctx.putImageData(data, moveResolution, 0);
};

const moveUp = () => {
  const data = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
  canvasReset();
  ctx.putImageData(data, 0, -moveResolution);
};

const moveDown = () => {
  const data = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
  canvasReset();
  ctx.putImageData(data, 0, moveResolution);
};

const canvasReset = () => {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
};

const copy = () => {
  canvas.toBlob(function(blob) {
    const item = new ClipboardItem({ "image/png": blob });
    navigator.clipboard.write([item]);
  });

  // let image = new Image();
  // image.src = canvas.toDataURL();
  // document.body.appendChild(image);
};

const insertText = embossed => {
  const text = document.getElementById("inputText").value;

  let objFontSize = document.getElementById("fontSize");
  fontSize = objFontSize.options[objFontSize.selectedIndex].value;

  ctx.font = fontSize + " " + font;
  ctx.fillStyle = strokeColor;
  ctx.textBaseline = "hanging";

  if (embossed) ctx.fillText(text, 10, 50);
  else ctx.strokeText(text, 10, 50);
};

const download = () => {
  let link = document.createElement("a");
  link.download = "my_sign.png";
  link.href = canvas.toDataURL();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/*
  렌더링 : https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
  addEventListener : https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener
  마우스 이벤트 : https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event
  복사 : https://stackoverflow.com/questions/27863617/is-it-possible-to-copy-a-canvas-image-to-the-clipboard
*/
