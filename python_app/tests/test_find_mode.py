from python_app.app import find_mode

def test_find_mode_basic():
  """
  Test that the find mode is correctly identified as 1
  """
  input = [1,1,3,4,5,6,7,8]

  assert find_mode(input) == 1

def test_find_mode_none():
  """
  Test that the find mode is correctly identified as none
  """
  input = [1,2,3]

  assert find_mode(input) is None

def test_find_mode_negative():
  """
  Test that the find mode is correctly identified as -4
  """
  input = [-4,2,4,3,234,-5,-41,-4,-5,-5,5,-4,-23,-4]
  assert find_mode(input) == -4


def test_find_mode_string():
  """
  Test that the find mode is correctly identified as google
  """
  input = ['google', 'facebook', 'apple', 'amazon', 'google', 'apple', 'google']
  assert find_mode(input) == "google"