// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

using System;

    public class Kata
    {
        public static int[] Get_size(int w,int h,int d)
        {
            return new int [] {(2*w*h)+(2*h*d)+(2*w*d), w*h*d};
        }
    }