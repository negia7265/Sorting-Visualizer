export function getMergeSortAnimation(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxilaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxilaryArray, animations);
  return animations;
}
function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}
function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    animations.push([i, i]);

    animations.push([i, i]);

    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    animations.push([j, j]);

    animations.push([j, j]);

    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}

export function bubbleSortAnimation(array) {
  const temporary = array.slice();
  const animations = [];
  for (let i = 0; i < temporary.length - 1; i++) {
    for (let j = 0; j < temporary.length - i - 1; j++) {
      animations.push([j, j + 1, 0]);

      if (temporary[j] > temporary[j + 1]) {
        animations.push([j, j + 1, 1]);
        let temp = temporary[j];
        temporary[j] = temporary[j + 1];
        temporary[j + 1] = temp;
      }
      animations.push([j, j + 1, 2]);
    }
  }
  return animations;
}
