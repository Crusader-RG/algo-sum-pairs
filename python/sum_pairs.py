def sum_pairs(arr, num):
    ans_lst = []
    for i in range(len(arr)):
        for j in range(i + 1, len(arr)):
            if arr[i] + arr[j] == num:
                ans_lst.append([arr[i], arr[j]])
                
    if ans_lst == []:
        return "unable to find pairs"
    else:
        return ans_lst
    
print(sum_pairs([3, 1, 5, 8, 2], 27))

