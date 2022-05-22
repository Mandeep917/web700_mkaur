/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Mandeep Kaur Student ID: 148986219 Date:21-05-2022
*
********************************************************************************/
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  } 
//STEP2
console.log("Hello World"); 

  //STEP4
  function httpRequest(httpverb,path){
  //STEP3
    serverVerbs=['GET','GET','GET','POST','GET','POST']
    serverPaths=['/','/about','/contact','/login','/panel','/logout']
    serverResponses=['Welcome to WEB700 Assignment 1','This assignment was prepared by Student Name','Student Name: Student Email','User Logged In','Main Panel','Logout Complete']
    for(i=0; i<serverPaths.length; i++) {
        if (serverPaths[i]==path){
            if (serverVerbs[i]==httpverb) {
                console.log(`200: ${serverResponses[i]}`)
            }
            else{
                console.log(`404: Unable to process ${httpverb} request for ${path}`)
            }
        }
    }
}

//STEP6
function automateTests(){
    let testVerbs=['GET','POST']
    let testPaths=['/','/about','/contact','/login','/panel','/logout','/randomPath1','randomPath2']
    function randomRequest(){
       
        let randVerb=testVerbs[getRandomInt(0,2)]
        let randPath=testPaths[getRandomInt(0,8)]
        httpRequest(randVerb,randPath)
    }
    setInterval(randomRequest,1000)
}

//STEP7
automateTests()

