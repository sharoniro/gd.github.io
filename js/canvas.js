let canvas;
let ctx;
let strokeColor = "black";
let insertColor = "black";
let font = "serif";
let fontSize = "48px";
let width = 400;
let height = 200;

function initCanvas() {
	canvas = document.getElementById("signCanvas");
	canvas.setAttribute("width", width);
	canvas.setAttribute("height", height);
	ctx = canvas.getContext("2d");
	ctx.lineWidth = 1;
	ctx.strokeStyle = strokeColor;
	ctx.fillStyle = "white";
	ctx.save();
	ctx.fillRect(0, 0, 400, 200);

	canvas.addEventListener("mousedown", e => mouseDown(e), false);
	canvas.addEventListener("mousemove", e => mouseMove(e), false);
	canvas.addEventListener("mouseup", () => mouseUp(), false);
	canvas.addEventListener("mouseout", () => mouseOut(), false);
}

const initPalette = () => {
	let pallet = [
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
	var tag = "";
	for (i = 0; i < pallet.length; i++) {
		for (j = 0; j < pallet[i].length; j++) {
			tag +=
				"<div id=" +
				pallet[i][j] +
				" class='colorBox' onclick='colorSet(this)'></div>";
		}
	}
	document.getElementById("palletBox").innerHTML = tag;

	var colorBox = document.getElementsByClassName("colorBox");
	for (i = 0; i < colorBox.length; i++) {
		colorBox[i].style.background = colorBox[i].id;
	}
};

// onclick event
let beforeColor;
const colorSet = target => {
	strokeColor = target.id;
	if (beforeColor != undefined && beforeColor != null) {
		document.getElementById(beforeColor).className = document
			.getElementById(beforeColor)
			.className.replace(" active", "");
	}
	document.getElementById(target.id).className += " active";
	beforeColor = target.id;
};

const init = () => {
	initCanvas();
	initPalette();
};

let cursorX = (cursorY = 0);
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
	if (!isDrawing) return; // 마우스가 눌러지지 않았으면 리턴
	let x = e.offsetX,
		y = e.offsetY;
	draw(x, y);
	cursorX = x;
	cursorY = y;
}

function mouseOut() {
	isDrawing = false;
}

const moveLeft = () => {
	const data = ctx.getImageData(0, 0, width, height);
	reset();
	ctx.putImageData(data, -5, 0);
};

const moveRight = () => {
	const data = ctx.getImageData(0, 0, width, height);
	reset();
	ctx.putImageData(data, 5, 0);
};

const moveUp = () => {
	const data = ctx.getImageData(0, 0, width, height);
	reset();
	ctx.putImageData(data, 0, -5);
};

const moveDown = () => {
	const data = ctx.getImageData(0, 0, width, height);
	reset();
	ctx.putImageData(data, 0, 5);
};

const reset = () => {
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, 400, 200);
};

const copy = () => {

	let image = new Image();
	image.src = canvas.toDataURL();
	document.body.appendChild(image);
	ctx.drawImage(image, 0, 0, width, height);
    var imageData = ctx.getImageData(0,0, width, height);
    var pixel = imageData.data;

    var r=0, g=1, b=2,a=3;
    for (var p = 0; p<pixel.length; p+=4)
    {
      if (
          pixel[p+r] == 255 &&
          pixel[p+g] == 255 &&
          pixel[p+b] == 255) // if white then change alpha to 0
      {pixel[p+a] = 0;}
    }

  ctx.putImageData(imageData,0,0);
	canvas.toBlob(function(blob){
    var item = new ClipboardItem({ "image/png": blob });
    navigator.clipboard.write([item]);
});

};

const insertText = embossed => {
	const text = document.getElementById("inputText").value;

	let objFontSize = document.getElementById("fontSize");
	fontSize = objFontSize.options[objFontSize.selectedIndex].value;

	ctx.font = fontSize + " " + font;
	ctx.fillStyle = insertColor;
	ctx.textBaseline = "hanging";

	if (embossed) ctx.fillText(text, 10, 50);
	else ctx.strokeText(text, 10, 50);
	// ctx.restore();
};

const download = () => {
	const link = document.createElement("a");
	link.download = "sign.png";
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
