using System;

class Handling{
    static int division(int a, int b){
        if(b==0){
            throw new DivideByZeroException("cant divide it by zero");
        }
        return a/b;
    }
    static void Main()
    {
        try{
            int c= division(20,0);
            Console.Write(c);
        }
        catch(DivideByZeroException ex){
            Console.Write(ex.Message);
        }
    }
}


