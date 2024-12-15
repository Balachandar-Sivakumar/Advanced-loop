'using strict'

// 1. Add student

  let student = [];
  let grade=[];
  
  let inp = Number(prompt("Main menu \n 1. Add student \n 2. Calculate Average Grade \n  3. Filter Students by Grade\n 4. Modify Student Data\n 5. List Student Names \n 6. Iterate Over Grades \n 7. Reduce Grades to Total  \n8. Update Student Grades \n Enter '0' to Exit"));
     
    while(true){                                                                //start

           // Adding student details
        if(inp===1){
        var namedfun = function add(){
            let name=prompt("Enter your Name");
        let inp1=Number(prompt("Enter grades or  enter 0 to exit"));
        while (true){                                         //Grade push
           
            if(inp1===0){
                break;
            }else{
                grade.push(inp1);  //grade push
                inp1=Number(prompt("Enter grades or click enter '0' to exit"));
            }
        } ;
        
        let id=Math.floor(Math.random()*9999)    ;                                              
        student.push({id,name,grade});   // pushing datas to students

        (function IIFE(){                      //Imediatly Invoke  function Expression
            let std=student.map((n)=>{return n.grade.reduce((a,b)=>{return a+b})/n.grade.length});
            console.log('Imediatly Invoke  function Expression');                                
            for(let i=0;i<student.length;i++){
                console.log(`ID:${student[i].id} ${i+1}. Name: ${student[i].name}, Grades:${student[i].grade}, Average:${std[i]} `)
            }
        }());
        
        inp = Number(prompt("Main menu \n 1. Add student \n 2. Calculate Average Grade \n  3. Filter Students by Grade\n 4. Modify Student Data\n 5. List Student Names \n 6. Iterate Over Grades \n 7. Reduce Grades to Total  \n8. Update Student Grades \n Enter '0' to Exit"));
    
        }
        namedfun();    // function calling            

       

                                       
        
    } // Grade calculation
    else if(inp===2){                                        // Display students and Average

        let std = student.map((n)=>{return n.grade.reduce((a,b)=>{return a+b})/n.grade.length});
        console.log(`Display average grade`);
        
        for(let i=0;i<student.length;i++){
            console.log(` ${i+1}. Name: ${student[i].name}, Grades:${student[i].grade}, Average:${std[i]} `)
        };
        inp = Number(prompt("Main menu \n 1. Add student \n 2. Calculate Average Grade \n  3. Filter Students by Grade\n 4. Modify Student Data\n 5. List Student Names \n 6. Iterate Over Grades \n 7. Reduce Grades to Total  \n8. Update Student Grades \n Enter '0' to Exit"));
    

    }else if(inp===3){   //Using filter student Who got More than 85%

        
        let std = student.filter(n=> {return n.grade.reduce((a,b)=> a+b)/n.grade.length>85});
        if(std>85){
            console.log(`Average > 85 \n Name: ${student.map(n=>n.name)}, Average: ${std}`)
        }else{
            alert("No one is above 85%")
        }
       
        inp = Number(prompt("Main menu \n 1. Add student \n 2. Calculate Average Grade \n  3. Filter Students by Grade\n 4. Modify Student Data\n 5. List Student Names \n 6. Iterate Over Grades \n 7. Reduce Grades to Total  \n8. Update Student Grades \n Enter '0' to Exit"));
    

    }else if(inp==4){    //Using map to add 5 marks

        let std = student.map(n=>n.grade.map(n=>n+5));

        for(let i=0;i<student.length;i++){    // update to student grade
            student[i].grade=std[i]
        };
        
        console.log(`5 bonus points updated to students`);   // output in console
        for(let i=0;i<student.length;i++){
            console.log(`Name: ${student[i].name}, Grade : ${std[i]}`)
        };

        inp = Number(prompt("Main menu \n 1. Add student \n 2. Calculate Average Grade \n  3. Filter Students by Grade\n 4. Modify Student Data\n 5. List Student Names \n 6. Iterate Over Grades \n 7. Reduce Grades to Total  \n8. Update Student Grades \n Enter '0' to Exit"));
    

    }else if(inp==5){     

        let forof=()=>{                 // Using for of loop to print name
            
            console.log(` Using for of to print Name `);
            for (let x of student){
                console.log(x.name)
            }
            
        };
        forof()

        inp = Number(prompt("Main menu \n 1. Add student \n 2. Calculate Average Grade \n  3. Filter Students by Grade\n 4. Modify Student Data\n 5. List Student Names \n 6. Iterate Over Grades \n 7. Reduce Grades to Total  \n8. Update Student Grades \n Enter '0' to Exit"));
    
    }else if(inp===6){

        let forin=()=>{
            for(let b of student){
                console.log(b.name)
                for(let x in b.grade){
                    console.log(b.grade[x])
                }
            }   
            inp = Number(prompt("Main menu \n 1. Add student \n 2. Calculate Average Grade \n  3. Filter Students by Grade\n 4. Modify Student Data\n 5. List Student Names \n 6. Iterate Over Grades \n 7. Reduce Grades to Total  \n8. Update Student Grades \n Enter '0' to Exit"));
    
        }
        forin();

    }else if(inp===7){

        let ttlgrd=()=>{
            for(let x of student ){
                console.log(`Name :${x.name}, TotalGrade: ${x.grade.reduce((a,b)=>a+b)}`);
            }
        };
        ttlgrd()
        inp = Number(prompt("Main menu \n 1. Add student \n 2. Calculate Average Grade \n  3. Filter Students by Grade\n 4. Modify Student Data\n 5. List Student Names \n 6. Iterate Over Grades \n 7. Reduce Grades to Total  \n8. Update Student Grades \n Enter '0' to Exit"));
    

    }else if(inp===8){

    let gradeupdate=()=>{    let uip=Number(prompt('Enter id to update'));
        for(let x of student){
            if(x.id === uip){

                x.grade=[];
          let gpush=()=>{  
             let inp1=Number(prompt("Update grades or  enter 0 to exit"));
            while (true){                                         
           
            if(inp1===0){
                break;
            }else{
                x.grade.push(inp1);  //grade push
                inp1=Number(prompt("update grades or click enter '0' to exit"));
            }
                 } ;
             }
             gpush();


            }else{ alert('Incorrect id or Id excist');break;}
        };
        inp = Number(prompt("Main menu \n 1. Add student \n 2. Calculate Average Grade \n  3. Filter Students by Grade\n 4. Modify Student Data\n 5. List Student Names \n 6. Iterate Over Grades \n 7. Reduce Grades to Total  \n8. Update Student Grades \n Enter '0' to Exit"));
    
    }
    gradeupdate()

       

    }else if(inp==0){
        break;
    }
  } //end
  
 
