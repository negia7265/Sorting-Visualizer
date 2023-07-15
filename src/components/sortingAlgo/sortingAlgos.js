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
export function selectionSortAnimation(arr) {
  const len = arr.length;
  const temporary = arr.slice();
  const animations = [];
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    animations.push([i, i, 0, 0]);
    for (let j = i + 1; j < len; j++) {
      animations.push([i, j, 0, 0]);
      animations.push([j, j, 2, 0]);
      if (temporary[j] < temporary[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      animations.push([i, minIndex, 0, 1]);
      animations.push([i, minIndex, 1, 0]);
      [temporary[i], temporary[minIndex]] = [temporary[minIndex], temporary[i]];
    }
    animations.push([i, i, 2]);
  }

  return animations;
}
export function insertionSortAnimation(arr) {
  const len = arr.length;
  const temporary = arr.slice();
  const animations = [];

  for (let i = 1; i < len; i++) {
    //animations.push([i, i, 0]);
    let currentValue = temporary[i];
    let j = i - 1;
    while (j >= 0 && temporary[j] > currentValue) {
      //animations.push([j + 1, j, 0]);
      animations.push([j + 1, j, 1]);
      //animations.push([j + 1, j, 2]);
      temporary[j + 1] = temporary[j];
      j--;
    }
    //animations.push([j + 1, i, 0]);
    animations.push([j + 1, i, 1]);
    //animations.push([j + 1, i, 2]);
    temporary[j + 1] = currentValue;
    //animations.push([i, i, 2]);
  }
  return animations;
}
