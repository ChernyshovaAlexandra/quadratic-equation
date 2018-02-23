module.exports = function solveEquation(equation) {
    var D;
    var cur = [];
    var quadric = equation.split(' ');
    var param = [];

    param.push(
        +(quadric.slice(0, quadric.indexOf('*')).join('')),
        +(quadric.slice(quadric.indexOf('x^2') + 1, quadric.lastIndexOf('*')).join("")),
        +(quadric.slice(quadric.indexOf('x') + 1, quadric[-1])).join('')
    );

    D = Math.pow(param[1], 2) - (4 * param[0] * param[2]);
    if (D != 0) {
        D = D < 0 ? D * -1 : D;
        cur[0] = Math.round((-param[1] + Math.sqrt(D)) / (2 * param[0]));
        cur[1] = Math.round((-param[1] - Math.sqrt(D)) / (2 * param[0]));
        return cur.sort(compare);

    } else {
        cur = (-param[1] + Math.sqrt(D)) / (2 * param[0]);
        return cur;
    }
};

function compare(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}
