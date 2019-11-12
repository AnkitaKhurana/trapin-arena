
// Find the next Bezir curve X coordinate 
let findX = (time, points) => {
    return (1 - time) * (1 - time) * (1 - time) * points[0].x + 3 * (1 - time) * (1 - time) * time * points[1].x + 3 * (1 - time) * time * time * points[2].x + time * time * time * points[3].x;
}

// Find the next Bezir curve y coordinate 
let findY = (time, points) => {
    return (1 - time) * (1 - time) * (1 - time) * points[0].y + 3 * (1 - time) * (1 - time) * time * points[1].y + 3 * (1 - time) * time * time * points[2].y + time * time * time * points[3].y;
}

//  Bezier Curve animation for 4 point animation
//  Formula used 
// P = (1−t)3P1 + 3(1−t)2tP2 +3(1−t)t2P3 + t3P4
export let BezierCurveAnimation = (rootContainer, points, app, timeStamp = 0.005) => {

    if (points.length != 4) {
        return;
    }

    let startTime = 0, startPoint = points[0], endPoint = points[points.length - 1];
    rootContainer.x = startPoint.x;
    rootContainer.y = startPoint.y;

    app.ticker.add(() => {
        if (startTime <= 1) {
            rootContainer.x = findX(startTime, points);
            rootContainer.y = findY(startTime, points);
            startTime += timeStamp;
        }
        else {
            rootContainer.visible = false;
        }
    });
};

