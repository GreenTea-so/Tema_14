interface TriangleParties{
    a: number;
    b: number;
    c: number;
    h?: number;
}


class Triangle {
    parties: TriangleParties;

    constructor(parties: TriangleParties){
        this.parties = parties;
    }

    getP(): number{
        return this.parties.a + this.parties.b + this.parties.c;
    }
}


class TriangleRectangular extends Triangle{
    getS(): number {
        return (this.parties.a * this.parties.b)/2;
    }
}


class TriangleIsosceles extends Triangle{
    getS(): number {
        return (this.parties.b * this.parties.h)/2;
    }
}


const params: TriangleParties = {
    a: 1,
    b: 2,
    c: 3
};

const triangle = new Triangle(params);


const triangleRectangular = new TriangleRectangular(params);

console.log(triangleRectangular.getS())