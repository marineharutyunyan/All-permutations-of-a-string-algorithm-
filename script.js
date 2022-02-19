const arr = ["A","B","C"];
const size = arr.length -1;

function swap(a,b,arr)
{
	let temp=arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}

function possibleCombinations(fixedIndex, swapCount, arr, size)
{
	while(++swapCount <= size)
	{
		swap(fixedIndex, swapCount,arr);
		if (fixedIndex < size-1) 
		{
			possibleCombinations(++fixedIndex,--fixedIndex, arr,size);
		}
		if(fixedIndex === size-1)
		{
			console.log(arr);
		}
		swap(swapCount, fixedIndex, arr);
	}
}

possibleCombinations(0,-1,arr, size);