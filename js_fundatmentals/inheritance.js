// // single level inheritance
// // ===================================================================


// class myclasss{
//     x=function(){
//         console.log("hello this is a");
        
//     }
//     y=function(){
//     console.log('yhis is the y ');
    

//     }
// }
// class myclass2 extends myclasss{
//     A=function(){
//         console.log("this is A");
        
//     }
    

// }

// let obj= new myclass2();


// obj.x()
// obj.y()
// obj.A()


// =============================================================================================================

// multi level inheritance
// ===================================================================


class myclasss{
    x=function(){
        console.log("hello this is a");
        
    }
    y=function(){
    console.log('yhis is the y ');
    

    }
}
class myclass2 extends myclasss{
    A=function(){
        console.log("this is A");
        
    }
}
class myclass3 extends myclasss2{
    greet=function(){
        console.log("this is A");
        
    }
}

let obj= new myclass3();

obj.x()
obj.y()
obj.A()
obj.greet()

// =============================================================================================================