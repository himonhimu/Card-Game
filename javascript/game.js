 var cardRank = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
 var serializer = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n"]
 var nameofCard = ["heart", "spade", "clubs", "diamond"];
 var allCard = [];
 var playerOnearr = [];
 var playerTwoarr = [];
 var playerThreearr = [];
 var playerFourarr = [];

 const mainframe = document.querySelector(".MainFrame");
 const playerOne = mainframe.querySelector(".playerOne");
 const playerTwo = mainframe.querySelector(".playerTwo");
 const playerThree = mainframe.querySelector(".playerThree");
 const playerFour = mainframe.querySelector(".playerFour");
 const showplaycards = mainframe.querySelector(".showmessage");
 const winnertext = mainframe.querySelector(".winnertext");
 const playerturntext = mainframe.querySelector(".playerturn");
 const mainplayerCall = document.querySelector(".mainplayerCall");
 var roundPlay = 0;
 var whois = 1;

 //player turn boolean
 var playerOneTurn = true;
 var playerTwoTurn = false;
 var playerThreeTurn = false;
 var playerFourTurn = false;

 //genarate card
 function generateCard() {
   for (var i = 0; i < nameofCard.length; i++) {
     for (var j = 0; j < cardRank.length; j++) {
       var cardname = nameofCard[i] + cardRank[j];
       var serial = nameofCard[i] + serializer[j]
       if (cardRank[j] == "J") {
         allCard.push({
           name: cardname,
           group: nameofCard[i],
           value: 11,
           serializer: serial
         });
       } else if (cardRank[j] == "Q") {
         allCard.push({
           name: cardname,
           group: nameofCard[i],
           value: 12,
           serializer: serial
         });
       } else if (cardRank[j] == "K") {
         allCard.push({
           name: cardname,
           group: nameofCard[i],
           value: 13,
           serializer: serial
         });
       } else if (cardRank[j] == "A") {
         allCard.push({
           name: cardname,
           group: nameofCard[i],
           value: 14,
           serializer: serial
         });
       } else {
         allCard.push({
           name: cardname,
           group: nameofCard[i],
           value: cardRank[j],
           serializer: serial
         });
       }

     }
   }
 }
 //suffle card
 function shuffle(a) {
   for (let i = a.length - 1; i > 0; i--) {
     const j = Math.floor(Math.random() * (i + 1));
     [a[i], a[j]] = [a[j], a[i]];
   }
   return a;
 }

 //allCard.sort(() => Math.random() - 0.5);

 //console.log(allCard);


 function distributeCard() {
   for (var i = 0; i < allCard.length; i++) {
     if (i <= 12) {
       //	  	
       playerOnearr.push({
         name: allCard[i].name,
         group: allCard[i].group,
         value: allCard[i].value,
         serializer: allCard[i].serializer
       });
     } else if (i <= 25) {
       playerTwoarr.push({
         name: allCard[i].name,
         group: allCard[i].group,
         value: allCard[i].value,
         serializer: allCard[i].serializer
       });
     } else if (i <= 38) {
       playerThreearr.push({
         name: allCard[i].name,
         group: allCard[i].group,
         value: allCard[i].value,
         serializer: allCard[i].serializer
       });
     } else {
       playerFourarr.push({
         name: allCard[i].name,
         group: allCard[i].group,
         value: allCard[i].value,
         serializer: allCard[i].serializer
       });
     }
   }
 }
 //serialize cards 

 function compare(a, b) {
   // Use toUpperCase() to ignore character casing
   const bandA = a.serializer;
   const bandB = b.serializer;
   let comparison = 0;
   if (bandA > bandB) {
     comparison = 1;
   } else if (bandA < bandB) {
     comparison = -1;
   }
   return comparison;
 }
 //
 function shortCard() {
   playerOnearr.sort(compare);
   playerTwoarr.sort(compare);
   playerThreearr.sort(compare);
   playerFourarr.sort(compare);
 }

 //show cards to view
 function showacard() {
   for (var i = 0; i < playerOnearr.length; i++) {

     playerOne.innerHTML += `<img player = "1" index ="${playerOnearr[i].name}" value = "${playerOnearr[i].value}" group =${playerOnearr[i].group} src="illustration-online-gambling/ready file/${playerOnearr[i].name}.jpg" alt="">`;

     playerTwo.innerHTML += `<img player = "2" index ="${playerTwoarr[i].name}" value = "${playerTwoarr[i].value}" group =${playerTwoarr[i].group} src="illustration-online-gambling/ready file/${playerTwoarr[i].name}.jpg" alt="">`;

     playerThree.innerHTML += `<img player = "3" index ="${playerThreearr[i].name}" value = "${playerThreearr[i].value}" group =${playerThreearr[i].group} src="illustration-online-gambling/ready file/${playerThreearr[i].name}.jpg" alt="">`;

     playerFour.innerHTML += `<img player = "4" index ="${playerFourarr[i].name}" value = "${playerFourarr[i].value}" group =${playerFourarr[i].group} src="illustration-online-gambling/ready file/${playerFourarr[i].name}.jpg" alt="">`;


   }

   playerTwo.innerHTML +='<img class = "cover" src="illustration-online-gambling/ready file/cover.jpg">' + '<div class="playerCircle image2"></div>';
   playerThree.innerHTML +='<img class = "cover" src="illustration-online-gambling/ready file/cover.jpg">'+ '<div class="playerCircle image3"></div>';
   playerFour.innerHTML +='<img class = "cover" src="illustration-online-gambling/ready file/cover.jpg">'+ '<div class="playerCircle image4"></div>';
 }
 //for(var i=0; i<playerOnearr.length; i++){
 //	mainframe.innerHTML += i + `. ${playerOnearr[i].serializer}  `;
 //}

 function finalCard() {
   generateCard();
   shuffle(allCard);
   distributeCard();
   shortCard();
   showacard();
 }

 // call the function for card
 finalCard();

 //new section start from here

 var p4img = playerFour.querySelectorAll("img");
 var p3img = playerThree.querySelectorAll("img");
 var p2img = playerTwo.querySelectorAll("img");
 var p1img = playerOne.querySelectorAll("img");


 var mIndex;
 var temparr = [];
 var samecardfound = true;
 var matchCard;
 var showcardsarr = [];

 // click function for remove item
 function removeItem(section, arr) {

   var arrIndex;
   var group;
   section.forEach(item => {
     item.addEventListener('click', () => {
       group = item.getAttribute("group");
       //console.log(item);

       showcards(group, arr, item);
       autoPlayCard();

     })
   });
 }


 // remove item function
 function removeItemok(arr, mIndex, item) {
   for (var i = 0; i < arr.length; i++) {
     if (mIndex == arr[i].name) {
      group =  arr[i].group;
       arrIndex = i;
     }
   }
  separateCard(arr, group, arrIndex);
   arr.splice(arrIndex, 1);
   // console.log(arr);

   item.classList.add("displayNone");
   playerTurn();

 }

 function showcards(group, arr, item) {
   checkCards(group, arr, item);
 }
 // check cards
 var matchfound = false;

 function checkCards(group, arr, item) {


   var mIndex = item.getAttribute("index");
   //console.log(mGroup);

   if (showcardsarr.length > 0) {
     var mGroup = showcardsarr[0].group;
     if (mGroup == group) {
       removeItemok(arr, mIndex, item);
       //console.log(mGroup);
       showcardsarr.push({
         group: group,
         value: item.getAttribute("value"),
         player: item.getAttribute("player")
       });
       showCardFunction(item, mIndex);

     } else {
       for (var i = 0; i < arr.length; i++) {
         var foundgroup = arr[i].group;

         //console.log(foundgroup);
         if (mGroup == foundgroup) {
           matchfound = true;
           console.log(arr[i].name);
           break;
         }
       }
       if (matchfound) {
         console.log("match found, you must select the same group item");
         matchfound = false;

       } else {
         console.log("match not found");
         removeItemok(arr, mIndex, item);
         showcardsarr.push({
           group: group,
           value: item.getAttribute("value"),
           player: item.getAttribute("player")
         });
         showCardFunction(item, mIndex);

       }
     }
   } else {
     showcardsarr.push({
       group: group,
       value: item.getAttribute("value"),
       player: item.getAttribute("player")
     });
     showCardFunction(item, mIndex);
     removeItemok(arr, mIndex, item);
   }


 }
 var positoion = 1;
 function showCardFunction(item, mIndex){
    var player = item.getAttribute("player");
   var showClass = "" ;
   if (player == "1") {
    showClass = "playerOneClass";
    
   } else if(player == "2"){
    showClass = "playerTwoClass";
    
   }else if(player == "3"){
    showClass = "playerThreeClass";
    
   }else{
    showClass = "playerFourClass";
    
   }
   
  showplaycards.innerHTML += `<img class="${showClass}" positoion = "${positoion}" player="${item.getAttribute("player")}" index ="${mIndex}" value = "${item.getAttribute("value")}" group ="${item.getAttribute("group")}" src="illustration-online-gambling/ready file/${mIndex}.jpg" alt="">`;
  positoion++;
 }

function othersAlloption(){
  if (showcardsarr.length >= 4) {
       //console.log(showcardsarr.length + "---" + showcardsarr);
       playerturnoff();
       roundPlay++;
       selectWinner(showcardsarr);
       showcardsarr = [];
       showplaycards.innerHTML = "";

       //roundPlay++;
       positoion = 1;
       reloadCard();
       autoPlayCard();
     }
}

 /*
     প্রথমে চেক করতে হবে সবগুলা একই গ্রুপে আছে কিনা
     দ্বিতীয়তঃ চেক করতে হবে যদি একই গ্রুপের না থাকে তাহলে কয়টা গ্রুপে আসে
     তৃতীয়তঃ চেক করতে হবে কোন স্পিড আছে কিনা
     চতুর্থত চেক করতে হবে
 */

 var normalwinner = [];
 var spadewinner = [];
 var winner = "";

 function selectWinner(arr) {

   var principlegroup = arr[0].group;
   for (var i = 0; i < arr.length; i++) {
     if (principlegroup == arr[i].group) {

       normalwinner.push(arr[i].value);


     } else {
       if (arr[i].group == "spade") {
         spadewinner.push(arr[i].value);

       }
     }

   }

   if (spadewinner.length > 0) {
     selectSpadeWinner(arr, spadewinner);
   } else {
     selectNormalWinner(arr, normalwinner);
   }


   //console.log("The winner is "+winner+"........"+normalwinner.length); 

   normalwinner = [];
   spadewinner = [];
 }

 function selectNormalWinner(arr, winnerarr) {
   var maxno = Math.max(...winnerarr);
   for (var i = 0; i < arr.length; i++) {
     if (maxno == arr[i].value) {
       winner = arr[i].player;
       break;
     }
   }
   showWinnerName(winner);
 }

 function selectSpadeWinner(arr, winnerarr) {
   var maxno = Math.max(...winnerarr);
   for (var i = 0; i < arr.length; i++) {
     if (maxno == arr[i].value) {
       winner = arr[i].player;
       break;
     }
   }
   showWinnerName(winner);

 }
 var PTplayer = ["player1", "player2", "player3", "player4"];
 var p1RunningP = 0;
 var p2RunningP = 0;
 var p3RunningP = 0;
 var p4RunningP = 0;

 var p1GainP = 0;
 var p2GainP = 0;
 var p3GainP = 0;
 var p4GainP = 0;

 function showWinnerName(noOFwinner) {
   if (noOFwinner == 1) {
     winnertext.innerHTML = "<h3>The winner is Player One</h3>";
     playerFourTurn = true;
     playerTurn();
     p1GainP++;
     pointCheck("player1", p1GainP, p1RunningP);
   } else if (noOFwinner == 2) {
     winnertext.innerHTML = "<h3>The winner is Player Two</h3>";
     playerOneTurn = true;
     playerTurn();
     p2GainP++;
     pointCheck("player2", p2GainP, p2RunningP);
   } else if (noOFwinner == 3) {
     winnertext.innerHTML = "<h3>The winner is Player Three</h3>";
     playerTwoTurn = true;
     playerTurn();
     p3GainP++;
     pointCheck("player3", p3GainP, p3RunningP);
   } else {
     winnertext.innerHTML = "<h3>The winner is Player Four</h3>";
     playerThreeTurn = true;
     playerTurn();
     p4GainP++;
     pointCheck("player4", p4GainP, p4RunningP);
   }
 }


 function playerTurn() {

   if (playerOneTurn) {
     playerturnoff();
     playerTwoTurn = true;
     playerturntext.innerHTML = "Player two Turn";
     allPointerNone();
     RemovePointerNone(playerTwo);


   } else if (playerTwoTurn) {
     playerturnoff();
     playerThreeTurn = true;
     playerturntext.innerHTML = "Player three Turn";
     allPointerNone();
     RemovePointerNone(playerThree);


   } else if (playerThreeTurn) {
     playerturnoff();
     playerFourTurn = true;
     playerturntext.innerHTML = "Player four Turn";
     allPointerNone();
     RemovePointerNone(playerFour);


   } else if (playerFourTurn) {
     playerturnoff();
     playerOneTurn = true;
     playerturntext.innerHTML = "Player one Turn";
     allPointerNone();
     RemovePointerNone(playerOne);


   }
   
   //console.log(playerOneTurn, playerTwoTurn, playerThreeTurn, playerFourTurn);
 }

 function allPointerNone() {
   PointerNone(playerOne);
   PointerNone(playerTwo);
   PointerNone(playerThree);
   PointerNone(playerFour);
 }

 function disableClick() {
   if (playerOneTurn) {
     removeItem(p1img, playerOnearr);

   } else if (playerTwoTurn) {
     removeItem(p2img, playerTwoarr);

   } else if (playerThreeTurn) {
     removeItem(p3img, playerThreearr);
   } else {
     removeItem(p4img, playerFourarr);
   }
   
   //initOnetime();
 }

function autoPlayCard(){


  if (mainplayerCall.classList.contains('displayNone')) {
    while(!playerOneTurn && showcardsarr.length<4){
      if (playerTwoTurn) {
        selectCardAuto("playerTwo", playerTwoarr);
        playerTurn();
      } else if (playerThreeTurn) {
        selectCardAuto("playerThree", playerThreearr);
        playerTurn();
      }
      else if (playerFourTurn) {
        selectCardAuto("playerFour", playerFourarr);
        playerTurn();
      }

      //console.log("lenght : "+showcardsarr.length);
  }
  }
  //console.log(playerOneTurn, playerTwoTurn, playerThreeTurn, playerFourTurn);

}


function selectCardAuto(className, arrname){
  const selectClass = mainframe.querySelector("."+className);
  const selectAll = selectClass.querySelectorAll("img");

 // console.log(valuearr);
  //selectCardbyValue(valuearr, selectAll, arrname);
  autoCardValidation(selectAll, arrname);
}

function autoCardValidation(className,  arr){
    var samegroupCard = [];
      //console.log(showcardsarr);
  if (showcardsarr.length>0) {
      var mGroup = showcardsarr[0].group;
        for(item of arr){
            if (item.group==mGroup) {
              samegroupCard.push(item);

            }
        }
        //যদি একই গ্রুপের কার্ড পাওয়া যায় তবে এই ফাংশন কল করবে
         if (samegroupCard.length>0) {
            var valuearr =[];
              for(item of samegroupCard){
                 valuearr.push(item.value); 
              }
              selectCardbyValue(valuearr, className, arr, mGroup);

         }else{
          var valuearr =[];
              for(item of arr){
                 valuearr.push(item.value); 
              }
              //console.log(valuearr);
              selectCardbyValue(valuearr, className, arr);

         }

  }else{
   
      var valuearr =[];
              for(item of arr){
                 valuearr.push(item.value); 
              }
              //console.log(valuearr);
              selectCardbyValue(valuearr, className, arr);
  }
}


function selectCardbyValue(valuearr, itemarr, arrname, mgroup){
  var minmaxValue;
  var index;
  var highvalue;
  var showArr = [];
  var runningHighValeu;
  if (showcardsarr.length>0) {
    if (showcardsarr[0].group=="spade") {
    highvalue = spadeHighCard;
  }else if (showcardsarr[0].group=="heart") {
    highvalue = heartHighCard;
  }else if (showcardsarr[0].group=="clubs") {
    highvalue = clubHighCard;
  }else {
    highvalue = diamondHighCard;
  }

  if (mgroup==showcardsarr[0].group) {
    
        for (var i = 0; i < showcardsarr.length; i++) {
          showArr.push(showcardsarr[i].value);
       }
        runningHighValeu = Array.max(showArr);
        minmaxValue = Array.max(valuearr);
        if (minmaxValue==highvalue && minmaxValue >runningHighValeu) {
           minmaxValue =  getAKQJ(minmaxValue);
          index = mgroup+""+minmaxValue;
        }else{
          minmaxValue = Array.min(valuearr);
           minmaxValue =  getAKQJ(minmaxValue);
          index = mgroup+""+minmaxValue;
        } 
    //console.log("max : "+index);

   // console.log(valuearr.indexOf(minmaxValue));
}else{
   minmaxValue = Array.min(valuearr);
   minmaxValue =  getAKQJ(minmaxValue);
   mgroup = getOthersMin(minmaxValue, arrname);
   index = mgroup+""+minmaxValue;
   
}

  }else{
    minmaxValue = Array.max(valuearr);
    mgroup = getOthersMin(minmaxValue, arrname);
    if (mgroup=="spade") {
    highvalue = spadeHighCard;
    }else if (mgroup=="heart") {
      highvalue = heartHighCard;
    }else if (mgroup=="clubs") {
      highvalue = clubHighCard;
    }else {
      highvalue = diamondHighCard;
    }
    // console.log(highvalue);
    // console.log(minmaxValue);

   if (minmaxValue==highvalue) {
          minmaxValue =  getAKQJ(minmaxValue);
          index = mgroup+""+minmaxValue;
         // console.log("called 2")
        }else{
          minmaxValue = Array.min(valuearr);
           minmaxValue =  getAKQJ(minmaxValue);
          mgroup = getOthersMin(minmaxValue, arrname);
          index = mgroup+""+minmaxValue;
         // console.log("called 3")
        }
  }
  
  AddandRemove(itemarr, index, arrname);
}


function getOthersMin(minvalue, arrname){
  var mgroup = "";
  if (minvalue=="A") {
    minvalue=14;
  }else if (minvalue=="K") {
    minvalue=13;
  }else if (minvalue=="Q") {
    minvalue=12;
  }else if (minvalue=="J") {
    minvalue=11;
  }else{
    minvalue = minvalue;
  }
  // console.log(minvalue);
    for (var i = 0; i < arrname.length; i++) {
      if (minvalue==arrname[i].value) {
        mgroup =arrname[i].group;
        
      }
    }
    //console.log(mgroup);
    return mgroup;
}



function getAKQJ(val){
  if (val==14) {
    val = "A";
  }
   else if(val==13){
    val = "K";
   }else if(val==12){
    val = "Q";
   }else if(val==11){
    val = "J";
   }else{
    val = val;
   }
   return val;
}

function AddandRemove(itemarr, index, arrname){
   //console.log("index : "+index);
 
  var group = "";
  var value = "";
  var player = "";
  var mIndex = "";
  //console.log(index);
    for(item of itemarr){
      
        if (index==item.getAttribute("index")) {
         // console.log(item.getAttribute("index"));
          group = item.getAttribute("group");
          value = item.getAttribute("value");
          player = item.getAttribute("player");
          mIndex = item.getAttribute("index");


          showcardsarr.push({
           group: group,
           value: value,
           player: player
         });


  showCardFunction(item, mIndex);
      removeItemAuto(arrname, mIndex, item);
        //}
    }


  
  //itemarr[index].classList.add("displayNone");
  //arrname.splice(index, 1);
}
}

var spadearr = [];
var heartarr = [];
var clubsarr = [];
var diamondarr = [];

var clubHighCard = 0;
var heartHighCard = 0;
var spadeHighCard = 0;
var diamondHighCard = 0;
 //var remainarr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12,13,14];
//  checkarr.sort(function(a, b){return a-b});
// console.log(checkarr);
function removeItemAuto(arr, mIndex, item) {
  
  var group = "";
   for (var i = 0; i < arr.length; i++) {
     if (mIndex == arr[i].name) {
       group =  arr[i].group;
       arrIndex = i;
     }
   }
   separateCard(arr, group, arrIndex);
   arr.splice(arrIndex, 1);
   // console.log(arr);
   item.classList.add("displayNone");

 }

function separateCard(arr, group, index){

    var item;
     if (group =="clubs") {
       item = arr[index];
       clubsarr.push(item.value);
     }else if ("heart" == group) {
       item = arr[index];
       heartarr.push(item.value);
     }else if ("spade" == group) {
       item = arr[index];
       spadearr.push(item.value);
     }else{
       item = arr[index];
        diamondarr.push(item.value);
      }
  
  // var c = compareTwoarray(clubsarr);
  // var h = compareTwoarray(clubsarr);
  // var s = compareTwoarray(clubsarr);
  // var d = compareTwoarray(clubsarr);

  var c = compareTwoarray(clubsarr);
  var h = compareTwoarray(heartarr);
  var s = compareTwoarray(spadearr);
  var d = compareTwoarray(diamondarr);
  


  c.sort(function(a, b){return a-b});
  h.sort(function(a, b){return a-b});
  s.sort(function(a, b){return a-b});
  d.sort(function(a, b){return a-b});

  clubHighCard = c[c.length-1];
  heartHighCard = h[h.length-1];
  spadeHighCard = s[s.length-1];
  diamondHighCard = d[d.length-1];
  //console.log(c[c.length-1]);
}
 
 function compareTwoarray(arrone){
  //var finalarray = [];
  var arrtwo = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12,13,14];

  for (var i = 0; i < arrone.length; i++) {
    var value = arrone[i];
    for (var j = 0; j < arrtwo.length; j++) {
      var value2 = arrtwo[j];
      if (value==value2) {
        arrtwo.splice(j, 1);
      }
    }
  }
  return arrtwo;
 }



function remainingHighCard(group){

  var highCard = 0;
  var arr = [];
  if (group =="clubs") {
    arr = clubsarr;
  } else if(group =="heart"){
    arr = heartarr;
  }
   else if(group =="spade"){
    arr = spadearr;
  }
  else{
    arr = diamondarr;
  }

  for (var i = 0; i < arr.length; i++) {
      if (arr[i].value == 14) {
        highCard = 13;
      }else if (arr[i].value == 14) {
        highCard = 13;
      }
  }


}


function valueIndex(myArray, value, mgroup) {
    var index = 0;
   for (var i = 0; i < myArray.length; i++) {
     if (myArray[i].value==value && myArray[i].group==mgroup) {
        //console.log(myArray[i].name);
        index = i;
       }
   }
   return index;
}


//get max value
Array.max = function( array ){
    return Math.max.apply( Math, array );
};
//get min value
Array.min = function( array ){
    return Math.min.apply( Math, array );
};

//selectCardAuto("playerOne", playerOnearr);




 var inittime = 0;

 function initOnetime() {

   while (inittime < 1) {
     removeItem(p2img, playerTwoarr);
     removeItem(p3img, playerThreearr);
     removeItem(p4img, playerFourarr);

     inittime++;
     //console.log("call one time " + inittime);
   }

 }

 function PointerNone(section) {
   section.classList.add("pointerNone");
 }

 function RemovePointerNone(section) {
   section.classList.remove("pointerNone");
 }
//reload card
var firstRoundPlay = false;
 function reloadCard() {

   if (roundPlay == 13) {
     playerOne.innerHTML = "";
     playerTwo.innerHTML = "";
     playerThree.innerHTML = "";
     playerFour.innerHTML = "";
     totalPoint();
     eraseData();
     finalCard();
    
     p4img = playerFour.querySelectorAll("img");
     p3img = playerThree.querySelectorAll("img");
     p2img = playerTwo.querySelectorAll("img");
     p1img = playerOne.querySelectorAll("img");

     removeItem(p1img, playerOnearr);
     removeItem(p2img, playerTwoarr);
     removeItem(p3img, playerThreearr);
     removeItem(p4img, playerFourarr);
     cardSpliter(whois);
     whois++;
     getCallPoint();
     firstRoundPlay=true;
    spadearr = [];
    heartarr = [];
    clubsarr = [];
    diamondarr = [];
    mainplayerCall.classList.remove("displayNone");

   }


 }
 function mainplayerCallok(){
    var value;
    const calls = mainplayerCall.querySelectorAll("p");
    calls.forEach(item =>{
      item.addEventListener('click', ()=>{
        value = item.innerText;
        console.log(value);
        const divselect = mainframe.querySelector(".player1");
       const callPoint = divselect.querySelector(".call");
       //console.log(callPoint);
       callPoint.setAttribute('point', value);
       callPoint.innerHTML = "Call : "+value;
       mainplayerCall.classList.add("displayNone");
       autoPlayCard();
      })
    })
 }
 mainplayerCallok();

 function eraseData() {
   roundPlay = 0;
   allCard = [];
   playerOnearr = [];
   playerTwoarr = [];
   playerThreearr = [];
   playerFourarr = [];
   inittime = 0;
 }

 initOnetime();

 disableClick();


 function cardSpliter(whois) {
   playerturnoff();
   if (whois == 1) {
     console.log("cardSpliter called inner");
     playerTwoTurn = true;
     allPointerNone();
     RemovePointerNone(playerTwo);
     playerturntext.innerHTML = "Player two Turn";
   } else if (whois == 2) {
     playerThreeTurn = true;
     allPointerNone();
     RemovePointerNone(playerThree);
     playerturntext.innerHTML = "Player three Turn";
   } else if (whois == 3) {
     playerFourTurn = true;
     allPointerNone();
     RemovePointerNone(playerFour);
     playerturntext.innerHTML = "Player four Turn";
   } else {
     playerOneTurn = true;
     allPointerNone();
     RemovePointerNone(playerOne);
     playerturntext.innerHTML = "Player one Turn";
   }
   // console.log("cardSpliter called");
 }

 //all player boolean turn off
 function playerturnoff() {
   playerOneTurn = false;
   playerTwoTurn = false;
   playerThreeTurn = false;
   playerFourTurn = false;
 }
 
 //RP = Running Point
 //GP = Gain Point
 //CP = CALL Point


// get the point after evry play
 function pointCheck(maindiv, GP, RP) {
   const divselect = mainframe.querySelector("." + maindiv);
   const gainPoint = divselect.querySelector(".gain");
   gainPoint.setAttribute("point", GP);
   gainPoint.innerHTML = "Gain :" + GP;

   //console.log(GP);
 }

// total point gain after once play
 function totalPoint() {
    console.log(PTplayer.length);

   for (var i = 0; i < PTplayer.length; i++) {
     const divselect = mainframe.querySelector("." + PTplayer[i]);
     const runningPoints = divselect.querySelector(".runningPoints");
     const callPoint = divselect.querySelector(".call");
     const gainPoint = divselect.querySelector(".gain");
     
     var gCP =callPoint.getAttribute("point");
     var gRP = runningPoints.getAttribute("point");
     var gGP = gainPoint.getAttribute("point");
     
      var CP = parseInt(gCP);
      var RP = parseInt(gRP);
      var GP = parseInt(gGP);

      console.log(PTplayer[i]+ "__" +CP);

     var totalPoint = 0;

    if (firstRoundPlay) {
       if (CP > GP) {
       totalPoint = RP - CP;
     } else {
       totalPoint = RP + CP;
     }
   }else{
      totalPoint = GP;
   }


     runningPoints.setAttribute("point", totalPoint);
     runningPoints.innerHTML = "Total Point :" + totalPoint;
     gainPoint.setAttribute("point", 0);
     gainPoint.innerHTML = "Gain :" + 0;
   }

p1GainP = 0;
p2GainP = 0;
p3GainP = 0;
p4GainP = 0;
 }

//the most impotat is get call point.
var playerCall = 0;
 function getCallPoint(){
   //PTplayer.shift();
  for (var i = 0; i < PTplayer.length; i++){
     const divselect = mainframe.querySelector("." + PTplayer[i]);
     const callPoint = divselect.querySelector(".call");
    var playerarr = [];
    if (i==1) {
      playerarr = playerTwoarr;
      
    }
    if (i==2) {
      playerarr = playerThreearr;
      
    }
    if (i==3) {
      playerarr = playerFourarr;
      
    }
   
    var spadecount = 0;
    for (var j = 0; j < playerarr.length ; j++) {
      var cardValue =playerarr[j].value;
      var spadegroup = playerarr[j].group;
      if (cardValue==14 || cardValue==13) {
        playerCall++;
      }

      if(spadegroup=="spade"){
        spadecount++;
        if (spadecount==4) {
          playerCall++;
        }
      }
      //console.log();
    }
    playerCall += AQtogether(playerarr);

    if (playerCall<2) {
      playerCall=2;
    }
    callPoint.setAttribute("point", playerCall);
    callPoint.innerHTML = "Call : "+playerCall;
    playerCall = 0;

  }
 }
//if same card A & Q then call should increase
function AQtogether(arr){
  var point = 0;
  for (var i = 0; i < arr.length; i++) {
    var cardno = arr[i].value;
    if (cardno==14) {
      var cardgroup = arr[i].group;
      //console.log("card found 14 " +cardname);
      for (var  j = 0;  j < arr.length; j++) {
        if (arr[j].value==12) {
          var card12group = arr[j].group;
         // console.log("card found "+card12name);
        }
      }
      if (cardgroup==card12group) {
        point++;
       // console.log("card found same group");
      }
    }
    
  }
  return point;
}


//for check function

 const clickme = document.querySelector(".clickme");
 clickme.addEventListener('click', () => {
   othersAlloption();

 })




