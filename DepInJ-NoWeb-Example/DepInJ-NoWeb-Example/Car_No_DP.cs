using DepInJ_NoWeb_Example.Parts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DepInJ_NoWeb_Example
{
    class Car_No_DI
    {
        public Engine engine;
        public Tires tires;
        public Battery battery;

        public string type = "No DI";

        public Car_No_DI(){
            this.engine = new Engine("1233423", "8");
            this.tires = new Tires("Goodyear");
            this.battery = new Battery("Duralast Platinum Battery");

        }

        public void getSpecs(){
            Console.WriteLine("Car Specs:");
            Console.WriteLine("---------------");
            Console.WriteLine("Engine:" + this.engine.ID + " | Cylinders: " + this.engine.Cylinders);
            Console.WriteLine("Tires: " + this.tires.Name);
            Console.WriteLine("Battery: " + this.battery.Name);
        }
    }
}
