var fs = require('fs');
var terminal = require( 'terminal-kit' ).terminal ;

class studentService{
    getWinner(){
        const allStudents = fs.readFile('./students.txt', 'utf-8' ,function(error, data){
            console.log(data);
            const studentsArray = data.split(';');
            terminal.drawImage( "./good.png" , 
            {shrink:{width:50, height:50}},(err,image)=>{
                console.log(err + 'image');
            })
            studentsArray.forEach(student => {
                //console.log(`Good morning ${student}`)
                terminal.slowTyping(
                    `Good morning ${student}\n`,
                    { flashStyle: terminal.brightWhite, flashDelay:10 },
                    () =>{}
                ) ;
            });
        })
    }
}

new studentService().getWinner();

module.exports.studentService = studentService;
module.exports.number = 1;