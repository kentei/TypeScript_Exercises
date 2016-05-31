/**
 * ランダム乱数を配列につめて返す関数。
 * @param num: number 乱数の個数
 * @param range: number 生成乱数の範囲 0～rangeまで
 * @param duplication: boolean 乱数の重複を許す(true)か許さない(false)か
 */
let createRandomNumArray = function(num: number, range: number, duplication: boolean){
  if (num > range && !duplication) {
    // 個数が範囲より大きいかつ重複を許していない場合
    console.log("引数の指定が不正です。num <= rangeとなるようにしてください。(重複を許せばその限りではありません)");
    return [];
  }
  let array: number[] = [];
  for (let i = 0 ; i < num ; i++) {
    let rand = Math.floor( Math.random() * range );
    if (duplication) {
      // 重複認める
      array.push(rand);
    } else {
      // 重複認めない
      let flag: boolean = array.some(function(elem, index, array){
        return rand === elem;
      });

      if (!flag) {
        array.push(rand);
      } else {
        // 戻さないと数値の個数が合わなくなる
        --i;
      }
    }
  }

  return array;
};

/**
 * テスト用カウンター
 */
let counter: number = 0;

/**
 * バブルソート実施
 */
let bubbleSort = function(unSortedArray: number[]){
  let targetArray: number[] = unSortedArray.concat();
  for (let i = 0; i < targetArray.length; i++) {
    for (let j = 1; j < targetArray.length - i; j++) {
      if (targetArray[j] < targetArray[j - 1]) {
        const temp: number = targetArray[j];
        targetArray[j] = targetArray[j - 1];
        targetArray[j - 1] = temp;
        counter++;
      }
    }
  }
  return targetArray;
};

/**
 * バブルソートテスト
 */
let bubbleSortTest = function() {
  let unSortedArray: number[] = createRandomNumArray(100, 100, false);
  let SortedArray: number[] = bubbleSort(unSortedArray);
  console.log(unSortedArray);
  console.log(SortedArray);
  console.log("交換数:" + counter + "回");
};

// 一時的に値を持たせておく配列
let temp = [];

/**
 * マージソート
 */
let margeSort = function(unSortedArray: number[], left: number, right: number){
  if (left >= right) { return; }

  let mid: number = Math.floor((left + right) / 2);
  let i: number, j: number, k: number;

  // バラバラにするために再帰呼び出し
  margeSort(unSortedArray, left, mid);
  margeSort(unSortedArray, mid + 1, right);

  for (let i = left; i <= mid; i++) {
    temp[i] = unSortedArray[i];
  }

   for (let i = mid + 1, j = right; i <= right; i++, j--) {
     temp[i] = unSortedArray[j];
   }

   i = left;
   j = right;

   for (k = left; k <= right; k++) {
     // ソート処理
     if (temp[i] <= temp[j]) {
       unSortedArray[k] = temp[i++];
       counter++;
     } else {
       unSortedArray[k] = temp[j--];
     }
   }
};

/**
 * クイックソートテスト
 */
let margeSortTest = function() {
  let unSortedArray: number[] = createRandomNumArray(100, 100, false);
  let targetArray: number[] = unSortedArray.concat();
  margeSort(targetArray, 0, unSortedArray.length - 1);
  console.log(unSortedArray);
  console.log(targetArray);
  console.log("交換数:" + counter + "回");
};

// bubbleSortTest();
margeSortTest();
