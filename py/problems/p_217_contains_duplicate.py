"""
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
"""
from typing import List

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        """
        Checks if a list contains a duplicate
        """

        # contains the numbers that are saved
        memory_cache = []
        
        for item in nums:
            # If we find the number in the cache
            if item in memory_cache:
                return True
            
            # Save the new number in the cache
            memory_cache.append(item)

        return False