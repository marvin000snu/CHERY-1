// @flow
export const html = `<!DOCTYPE html>
<html>

<head>
    <style>
        html,
        body {
            margin: 0;
        }

        #drawing-area {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
    </style>
    </style>
</head>

<body>
    <canvas id="drawing-area" class="drawing-area">
    </canvas>
    <script>
        var width
        function setCanvasHeightAuto() {
            var documentWidth = document.documentElement ? document.documentElement.clientWidth : 0;
            var documentHeight = document.documentElement ? document.documentElement.clientHeight : 0;
            var innerWidth = window.innerWidth;
            var innerHeight = window.innerHeight;
            var screenWidth = screen.width;
            var screenHeight = screen.height;

            width = [[realWidth]]
            var height = screen.height * window.devicePixelRatio;

            var setWidth = documentWidth && documentWidth > innerWidth ? documentWidth : innerWidth;
            var setHeight = documentHeight && documentHeight > innerHeight ? documentHeight : innerHeight;

            if (setWidth > width) {
                width = setWidth;
                height = setHeight;
            }

            document.getElementById("drawing-area").width = width;
            document.getElementById("drawing-area").height = 3000;
        }

        setCanvasHeightAuto();

        // =============
        // == Globals ==
        // =============
        const imgSrc = '[[imgSrc]]'
        const canvas = document.getElementById("drawing-area");
        const canvasContext = canvas.getContext("2d");

        const state = {
            mousedown: false,
        };
        var img = new Image();
        img.src = imgSrc
        var height1
        img.onload = function(){
            canvasContext.drawImage(img,10,10,width-20,(width-20)*img.naturalHeight/img.naturalWidth)
            height1 = (width-20)*img.naturalHeight/img.naturalWidth
        }
        document.getElementById("drawing-area").height = 3000
        // ===================
        // == Configuration ==
        // ===================
        const lineWidth = [[LINE_WIDTH]];
        const strokeStyle = '[[COLOR]]';

        canvasContext.lineCap = "round";
        canvasContext.lineWidth = lineWidth;
        canvasContext.strokeStyle = strokeStyle;

        let points = [];
        let allPoints = [];

        let addPointsThrottle = null;

        // =====================
        // == Event Listeners ==
        // =====================
        canvas.addEventListener("mousedown", handleWritingStart);
        canvas.addEventListener("mousemove", handleWritingInProgress);
        canvas.addEventListener("mouseup", handleDrawingEnd);
        canvas.addEventListener("mouseout", handleDrawingEnd);

        canvas.addEventListener("touchstart", handleWritingStart);
        canvas.addEventListener("touchmove", handleWritingInProgress);
        canvas.addEventListener("touchend", handleDrawingEnd);

        // ====================
        // == Event Handlers ==
        // ====================
        function handleWritingStart(event) {
            event.preventDefault();

            const mousePos = getMosuePositionOnCanvas(event);

            canvasContext.beginPath();

            canvasContext.moveTo(mousePos.x, mousePos.y);

            points.push({
                x: mousePos.x,
                y: mousePos.y,
                c: canvasContext.strokeStyle,
            });

            canvasContext.fill();

            state.mousedown = true;
        }

        function handleWritingInProgress(event) {
            event.preventDefault();

            if (state.mousedown) {
                const mousePos = getMosuePositionOnCanvas(event);

                points.push({
                    x: mousePos.x,
                    y: mousePos.y,
                    c: canvasContext.strokeStyle,
                });
                if(points.lengt===1){

                }else if(points.length===2){

                }else{
                    var xc = (points[points.length-1].x+points[points.length-2].x)/2
                    var yc = (points[points.length-1].y+points[points.length-2].y)/2;
                    canvasContext.quadraticCurveTo(points[points.length-2].x,points[points.length-2].y,xc,yc)
                    canvasContext.stroke();
                }
            }
        }

        function redrawAllLines() {
            const existingStrokeStyle = canvasContext.strokeStyle;
            canvasContext.clearRect(0, 0, canvas.width, canvas.height);

            for (let allPt of allPoints) {
                canvasContext.strokeStyle = allPt[0].c;
                canvasContext.beginPath();
                canvasContext.moveTo(allPt[0].x, allPt[0].y);
                canvasContext.fill();

                for (let pt of allPt) {
                    canvasContext.lineTo(pt.x, pt.y);
                    canvasContext.stroke();
                }

                canvasContext.closePath();
            }

            canvasContext.strokeStyle = existingStrokeStyle;
        }

        function setColor(colour) {
            canvasContext.strokeStyle = colour;
        }

        function setStrokeWidth(width) {
            canvasContext.lineWidth = width;
        }

        function undoLines() {
            allPoints.pop();
            redrawAllLines();
        }

        function clearDrawing() {
            points = [];
            allPoints = [];
            var img = new Image();
            img.src = imgSrc
            img.onload = function(){
                canvasContext.clearRect(0, 0, canvas.width, canvas.height);
                canvasContext.drawImage(img,100,100)
    
            }
        }

        function handleDrawingEnd(event) {
            event.preventDefault();

            if (state.mousedown) {
                canvasContext.stroke();
            }
            state.mousedown = false;
            if (points.length > 0) {
                allPoints.push(points);
                points = [];
            }

            canvasContext.closePath();
        }
        
        function sendData(){
            setTimeout(()=>{

                window.ReactNativeWebView.postMessage(JSON.stringify({
                    allPoints:allPoints,
                    move :"front"
                }));
            },200)

        }
        function test(){
            window.ReactNativeWebView.postMessage(JSON.stringify({
                allPoints:allPoints
            }));
        }
        
        function sendPrevData(){
            setTimeout(()=>{

                window.ReactNativeWebView.postMessage(JSON.stringify({
                    allPoints:allPoints,
                    move :"back"
                }));
            },200)
        }
        
        function alert1(){
            alert(2)
        }

        // ======================
        // == Helper Functions ==
        // ======================
        function getMosuePositionOnCanvas(event) {
            const clientX = event.clientX || event.touches[0].clientX;
            const clientY = event.clientY || event.touches[0].clientY;
            const { offsetLeft, offsetTop } = event.target;
            const canvasX = clientX - offsetLeft;
            const canvasY = clientY - offsetTop;

            return { x: canvasX, y: canvasY };
        }

    </script>
</body>

</html> `;
