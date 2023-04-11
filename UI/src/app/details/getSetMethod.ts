export class getset{
    // lop:any
    static lop: any
  static data(value: any){
    console.log(value);
    
        this.lop=value
    }
   static rowdata(){
        return this.lop
    }
}