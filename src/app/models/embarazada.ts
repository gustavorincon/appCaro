export class Embarazada {

    public fechaCiclo: String;
    public fechaParto:String;
    public EdadGestacion:Number;
    public numeroSemanas:Number;


    constructor(fechaCiclo: String,
        fechaParto:String,EdadGestacion:Number, numeroSemanas:Number){
            this.fechaCiclo=fechaCiclo;
            this.fechaParto=fechaParto;
            this.EdadGestacion=EdadGestacion;
            this.numeroSemanas=numeroSemanas;
    }
}