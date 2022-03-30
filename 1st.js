function sumPair(A , size , x) {
    for (i = 0; i < (size - 1); i++) {
        for (j = (i + 1); j < size; j++) {
            if (A[i] + A[j] == x) {
                document.write("Pair with a given sum " + x + " is (" + A[i] + ", " + A[j] + ")");

                return true;
            }
        }
    }

    return false;
}

    var A = [ 0, 1, 3, 8, 9 ];
    var x = 10;
    var size = A.length;

    if (sumPair(A, size, x)) {
        document.write("<br/>Valid pair exists");
    } else {
        document.write("<br/>No valid pair exists for " + x);
    }