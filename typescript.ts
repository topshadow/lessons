
namespace HeroSpace {
    interface IHero{
        name: string;
        age: number;
}
    class Hero implements IHero{
        public name: string;
        constructor(name:string) {
            this.name = name;
        }
    }

    class HeroSon extends Hero{
        constructor(name:string) {
            super(name);
        }
    }
    var son = new HeroSon("jie");
    console.log(son.name); 
}

