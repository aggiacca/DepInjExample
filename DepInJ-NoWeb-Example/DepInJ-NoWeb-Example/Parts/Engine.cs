using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DepInJ_NoWeb_Example.Parts
{
    class Engine
    {
        public string ID { get; set; }
        public string Cylinders { get; set; }

        public Engine(string id, string cyl)
        {
            this.ID = id;
            this.Cylinders = cyl;
        }

    }
}
