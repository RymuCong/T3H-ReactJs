function timMax(arr) {
    let max = arr[0];
    for (const x of arr) {
        if (x > max) {
            max = x;
        }
    }
    return max;
}

function tinhTB(arr) {
    let sum = 0;
    for (const x of arr) {
        sum += x;
    }
    return sum / arr.length;
}

function timMin(arr) {
    let smallestPositive = Infinity;
    for (const x of arr) {
        if (x > 0 && x < smallestPositive) {
            smallestPositive = x;
        }
    }
    return smallestPositive;
}

function tinhTBC(arr) {
    let sum = 0;
    let count = 0;
    for (const x of arr) {
        if (x > 0) {
            sum += x;
            count++;
        }
    }
    return count > 0 ? sum / count : 0;
}

const arr = [2, 3, -4, 5, 6, 7, 8, 9, 10];

alert(`Số lớn nhất trong mảng là: ${timMax(arr)}`);
alert(`Trung bình cộng các phần tử trong mảng là: ${tinhTB(arr)}`);
alert(`Số dương nhỏ nhất trong mảng là: ${timMin(arr)}`);
alert(`Trung bình cộng các số dương trong mảng là: ${tinhTBC(arr)}`);
