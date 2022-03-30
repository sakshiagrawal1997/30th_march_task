function swap(arr,i,j)
    {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
      function Rearrange(arr,n)
    {
        for (let i = 0; i < n - 1; i = i + 2) {
            if (arr[i] > arr[i + 1])
                swap(arr, i, i + 1);
        }
   // If length is odd
        if ((n & 1) > 0) {
            for (let i = n - 1; i > 0; i = i - 2)
                if (arr[i] > arr[i - 1])
                    swap(arr, i, i - 1);
        }
    }
    // Driver Method
    let arr=[9, 6, 8, 3, 7];
    document.write("Before rearranging<br>");
    for(let i=0;i<arr.length;i++)
    {
        document.write(arr[i]+" ");
    }
     
    document.write("<br>")
    Rearrange(arr, arr.length); 
    document.write("After rearranging<br>");
    for(let i=0;i<arr.length;i++)
    {
        document.write(arr[i]+" ");
    }
     