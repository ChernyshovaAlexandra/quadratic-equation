module.exports = function solveEquation(equation) {
 var D;
  var cur = [];
  var quadric = equation.split(' '); //это строка
  var param = [];

  param.push((quadric.slice(0, quadric.indexOf('*')).join('')), 
             (quadric.slice(quadric.indexOf('x^2')+1, quadric.lastIndexOf('*')).join("")),
             (quadric.slice(quadric.indexOf('x')+1, quadric[-1])).join(''));
for(var i = 0; i < param.length; i++){
  param[i]=== Number(param[i]);
}
  D = Math.pow(param[1], 2) - (4 * param[0] * param[2]);
 if(D > 0){
    cur[0] = (-param[1] + Math.sqrt(D)) / (2 *param[0]); 
    cur[1] = (-param[1] - Math.sqrt(D)) / (2* param[0]);
  return cur.sort();

  } else if(D < 0){
    D = D * (-1);
    cur[0] = (-param[1] + Math.round(Math.sqrt(D))) / (2 * param[0]);
    cur[1] = (-param[1] - Math.round(Math.sqrt(D))) / (2 * param[0]);
    return Math.round(cur[0]), Math.round(cur[1]);
  } else if(D === 0){
      cur = (-param[1] + Math.sqrt(D)) / (2 * param[0]);
      return cur.sort()
  }
}
