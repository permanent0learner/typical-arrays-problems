
exports.min = function min (array) {
  if (!Array.isArray(array) || !array.length)
  {
    return 0;
  }
  else {
  let res = array[0];
  for(let i= 0; i < array.length; i++)
  {
    if ((array[i]) < res)
    {
      res = array[i];
    }

  }
  return res;
  }
}

exports.max = function max (array) {
  if (!Array.isArray(array) || !array.length)
  {
    return 0;
  }
  else {
  let res = array[0];
  for (let i= 0; i < array.length; i++)
  {
    if ((array[i]) > res)
    {
      res = array[i];
    }

  }
  return res;
  }
     
}

exports.avg = function avg (array) {
  if (!Array.isArray(array) || !array.length)
  {
    return 0;
  }
  else{
  let res = 0;
  for(let i= 0; i < array.length; i++)
  {
    res += array[i]; 

  }
  return res/array.length;
  }
  
}