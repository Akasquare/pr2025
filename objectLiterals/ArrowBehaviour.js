const student={
    name: "shyam",
    marks: 95,
    prop: this, //global scope
    getName: function(){
        console.log(this);//this ->calling objects 
        return this.name;
    },
    getMarks: () => {
        console.log(this);//parent's scope -> window
        return this.marks;
    },
    getInfo1:function(){
        setTimeout(()=> {
            console.log(this);//student:: now we see the parents call of this , 
        },2000);
    },
    getInfo2:function(){
        setTimeout(function() {
            console.log(this);//window :: this is called by settimeOut func which is part of window here we'll see calling objects
        },2000);
    }
}