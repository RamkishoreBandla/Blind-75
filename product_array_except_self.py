def productExceptSelf(nums):
        nl=len(nums)
        res=[0 for i in range(nl)];
        prefix=1
        for i in range(nl):
            res[i]=prefix
            prefix=prefix*nums[i]
        # print(res)
        pst=1
        for i in range(nl-1,-1,-1):
            res[i]=pst*res[i]
            pst=pst*nums[i]
        return res

print(productExceptSelf([1,4,5,2]))