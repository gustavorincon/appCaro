export class Embarazada {

    public fechaCiclo: String;
    public fechaParto:String;
    public EdadGestacion:Number;
    public numeroSemanas:Number;
    public numeroDias: Number;


    constructor(fechaCiclo: String,
        fechaParto:String,EdadGestacion:Number, numeroSemanas:Number,numeroDias:Number){
            this.fechaCiclo=fechaCiclo;
            this.fechaParto=fechaParto;
            this.EdadGestacion=EdadGestacion;
            this.numeroSemanas=numeroSemanas;
            this.numeroDias=numeroDias;
    }
}