
exports.min = function min (array) {
  if (array===undefined) return 0;
  if (array.length === 0) return 0;
  let littleNum=array[0];
  for (i=0;i<array.length;i++){
    if (littleNum>array[i]){
        littleNum=array[i];
    }
}
return littleNum;
}
exports.max = function max (array) {
  if (array===undefined) return 0;
  if (array.length === 0) return 0;
  let bigNum=array[0];
  for (i=0;i<array.length;i++){
    if (bigNum<array[i]){
        bigNum=array[i];
    }
}
return bigNum;
}
exports.avg = function avg (array) {
    if (array===undefined) return 0;
    if (array.length === 0) return 0;
    let sum=0;
    for (i=0;i<array.length;i++){
        sum+=array[i];
    }
    let middleSum=sum/array.length;
    return middleSum;
}