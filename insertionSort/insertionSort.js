function insertionSort(array){
    let lenght = array.length;
    for(i = 1; i < length; i++){
        let current = array[i];
        let j = i - 1;

        while(j >= 0 && array[j] > current){
            array[j + 1] = array[j];
            j--
        }

        array[j] = current;
    }

    return array;
}

