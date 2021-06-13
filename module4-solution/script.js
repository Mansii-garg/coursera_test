var names = ["Mansi", "Riya", "Jiya", "jolly", "Megha", "jaspreet", "moolik", "sagar", "Bhumika"]

for(var i=0; i<names.length; i++){
   if(names[i].charAt(0) === "J" || names[i].charAt(0) === "j"){
   	bye.sayGoodbye(names[i]);
   }
   else{
   	hello.sayHello(names[i]);
   }	
}