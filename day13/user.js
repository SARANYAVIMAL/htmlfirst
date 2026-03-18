const CORRECT_PASSWORD = "secret"; 
 let attempts = 0;
 while(attempts<3)
 {
    if(attempts===2)
    {
        break;
        console.log("account locked");
    }
    else
    {
    attempts++
    console.log("attempt failed log again");
    }
 }
 if (attempts < 3) {
  console.log("Success: Password correct.");
}