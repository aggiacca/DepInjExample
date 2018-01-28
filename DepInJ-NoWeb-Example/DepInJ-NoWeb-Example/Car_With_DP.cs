using DepInJ_NoWeb_Example.Parts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DepInJ_NoWeb_Example
{
    class Car_With_DI
    {
        public Engine engine {get;set;} 
        public Tires tires {get;set;}
        public Battery battery { get; set; }

        public string type = "Using DI";

        public Car_With_DI(Engine eng, Tires tir, Battery bat)
        {
            this.engine = eng;
            this.tires = tir;
            this.battery = bat;

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
