using DepInJ_NoWeb_Example.Parts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DepInJ_NoWeb_Example
{

    class Program
    {
        static void Main(string[] args)
        {
            if (false)
                runWithoutDI();
            else
                runWithDI();

            Console.ReadKey();
        }

        public static void runWithoutDI()
        {
            Car_No_DI car = new Car_No_DI();
            car.getSpecs();
        }

        public static void runWithDI(){

           Engine engine1 = new Engine("23214","12");
           Tires tires = new Tires("Michelin");
           Battery battery = new Battery("Duralast Platinum Battery");

           Car_With_DI car = new Car_With_DI(engine1, tires, battery);
           car.getSpecs();

           Console.WriteLine("");
           Console.WriteLine("");

           //Change car engine
           Engine engine2 = new Engine("1231224", "8");
           car.engine = engine2;
           car.getSpecs();

        }


    }
}
