function search(arr, x)
{
    var i = 0;
    var count = arr.length;
    while (i < count)
    {
        if (arr[i] == x)
            return i;
        i++;
    }
    return null;
}

// { autofold
module.exports = {
  search: search
};
// }

