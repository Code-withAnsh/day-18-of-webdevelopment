 const Max = prompt("enter the maxium number");// hum maximum number kuch bhi daal diye let suppose 45 to jitna random
 //number generate hoga utna jo 45 se kam ho 
 console.log(Max);
   const random = Math.floor(Math.random()*Max) + 1;// to * max kiya becouse utna tak chahiye +1 we know why
 console.log(random);
 let guess = prompt("guess the number");
 while(true){
  if(guess == "quit"){
    console.log("user quit");
    break;
  }
  if(guess == random){
    console.log("you are right! congrats!! random number was:", random);
    break;
  }else if(guess < random){
    guess = prompt(" hint: your guess was too small. please try again");
  }else {
    guess = prompt("hint: your number is greater than actual number")
  }

  }
     
  
  
  //else{
    //guess = prompt("your guess was wrong. please try again");
  //}
 


