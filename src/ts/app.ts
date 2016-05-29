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

bubbleSortTest();