from p_217_contains_duplicate import Solution

solution = Solution()

def test_problem1():
    assert solution.containsDuplicate([1,2,1]) == True

def test_problem2():
    assert solution.containsDuplicate([1,2,3]) == False

def test_problem3():
    assert solution.containsDuplicate([0,7,334,8945, 234]) == False
