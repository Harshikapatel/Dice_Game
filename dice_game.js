 var playler1 = "playler1";
    var playler2 = "playler2";
    function editNames() 
    {
        player1 = prompt("Player1 Name - ");
        player2 = prompt("Player2 Name - ");
        document.querySelector("#p1").innerHTML = player1;
         document.querySelector("#p2").innerHTML = player2;
    }
    function rollTheDice(){
        var randomNum1 = Math.floor(Math.random()*6) + 1;
        var randomNum2 = Math.floor(Math.random()*6) + 1;
        document.querySelector(".img1").setAttribute("src",`imagesjs/Die_face_${randomNum1}b.svg`);
        document.querySelector(".img2").setAttribute("src",`imagesjs/Die_face_${randomNum2}b.svg`);
       display();
    }  
    function display(){
        if(randomNum1 > randomNum2)
        {
           alert (playler1 + " wins");
        }
        else if(randomNum1 == randomNum2)
          alert ("try again");

        else{
            alert (playler2 + " wins");
        }
    }


