// 8 kyu
// Find the position!
// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

public class Kata
{
  public static string Position(char alphabet)
  {
    const string alphabets = "abcdefghijklmnopqrstuvwxyz";
    int position = alphabets.IndexOf(alphabet) + 1; 
    return $"Position of alphabet: {position}"; 
  }
}