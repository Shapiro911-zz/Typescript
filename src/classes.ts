export interface dot {
    x: number,
    y: number
}

export abstract class MyGraphicsPrimitive2D {
    dot1: dot
    dot2: dot
    constructor(dot1: dot, dot2: dot) {
    }

    protected abstract move(x: number, y: number): void
}

export abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {
    protected abstract getArea(): number

    constructor(dot1: dot, dot2: dot) {
        super(dot1, dot2)
    }
}

export class MyCircle extends MyAreaPrimitive2D {
    private radius: number
    private center: dot

    constructor(dot1: dot, dot2: dot) {
        super(dot1, dot2)
        this.center.x = (this.dot1.x + this.dot2.x) / 2;
        this.center.y = (this.dot1.y + this.dot2.y) / 2;
        this.radius = this.center.x - this.dot1.x;
    }

    getArea(): number {
        return this.radius * this.radius * 3.14;
    }

    protected move(x: number, y: number): void {
        this.center.x + x;
        this.center.y + y;
    }
}

export class MyRectangle extends MyAreaPrimitive2D {
    private width: number
    private height: number

    constructor(dot1: dot, dot2: dot) {
        super(dot1, dot2)
        this.width = this.dot2.x - this.dot1.x;
        this.width = this.dot1.y - this.dot2.y;
    }

    protected getArea(): number {
        return this.width * this.height;
    }

    protected move(x: number, y: number): void {
        this.dot1.x + x;
        this.dot1.y + y;
        this.dot2.x + x;
        this.dot2.y + y;
    }
}