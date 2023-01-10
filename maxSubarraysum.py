#leetcode 53


def maxSubArray( nums):
        nl = len(nums)
        msum=0
        maxS=nums[0]
        for i in range(nl):
            if(msum<0):
                msum=0
            msum=msum+nums[i]
            maxS=max(maxS,msum)
        return maxS

print(maxSubArray([1,-4,2,-9,77]))