using System;
using System.Linq;

public static class Kata
{
    public static int GetVowelCount(string str)
    {
        int vowelCount = 0;
        string vowels = "aeiou";
        foreach (char c in str)
        {
            bool isVowel = vowels.Contains(c);
            if(isVowel)
            {
                vowelCount++;
            }
        }
        return vowelCount;
    }
}
