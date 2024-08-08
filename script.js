const boxes = document.querySelectorAll('.box')

const Obj = document.querySelector('#Obj')

const result = document.querySelector('.result')

const text = document.querySelector('.text')

const player = prompt('1. Computer \n 2. multiplayer')

const selection = prompt('1. X \n 2. O')

function multi(){

    // O Turn :
    if(player == 2 && selection == 'O' || selection == 'o' || selection == 2){

        const moves = ['O','X','O','X','O','X','O','X','O','-','']

        const move = ['round','cross','round','cross','round','cross','round','cross','round']

        let num = 0

        Obj.innerHTML = moves[num]

        Obj.style.color = 'black' 
        
        const pairObjectO = {

        }

        const pairObjectX = {

        }
        for(let i = 0 ; i < boxes.length ; i++){
            
            if(boxes[i].classList.length == 1 && boxes[i].innerHTML === ''){
                
                boxes[i].addEventListener('click',()=>{

                if(move[num]=='round' && boxes[i].classList.length === 1 && boxes[i].innerHTML === ''){

                    boxes[i].classList.add('clicked')
                    boxes[i].style.color = 'white'
                    boxes[i].style.filter = 'drop-shadow(2px 2px 2px 2px  rgba(0, 0, 0,1)'
                    boxes[i].innerHTML = moves[num]
                    pairObjectO[boxes[i].id] = boxes[i].innerHTML

                    if(pairObjectO.box1 == 'O' && pairObjectO.box2 == 'O' && pairObjectO.box3 == 'O'){
                        result.style.display = 'flex'
                        text.innerHTML = 'Player O Won This Game!!'
                    } 
                    else if(pairObjectO.box4 == 'O' && pairObjectO.box5 == 'O' && pairObjectO.box6 == 'O'){
                        result.style.display = 'flex'
                        text.innerHTML = 'Player O Won This Game!!'
                    } 
                    else if(pairObjectO.box7 == 'O' && pairObjectO.box8 == 'O' && pairObjectO.box9 == 'O'){
                        result.style.display = 'flex'
                        text.innerHTML = 'Player O Won This Game!!'
                    } 
                    else if(pairObjectO.box1 == 'O' && pairObjectO.box5 == 'O' && pairObjectO.box9 == 'O'){
                        result.style.display = 'flex'
                        text.innerHTML = 'Player O Won This Game!!'
                    } 
                    else if(pairObjectO.box3 == 'O' && pairObjectO.box5 == 'O' && pairObjectO.box7 == 'O'){
                        result.style.display = 'flex'
                        text.innerHTML = 'Player O Won This Game!!'
                    }
                    else if(pairObjectO.box1 == 'O' && pairObjectO.box4 == 'O' && pairObjectO.box7 == 'O'){
                        result.style.display = 'flex'
                        text.innerHTML = 'Player O Won This Game!!'
                    }
                    else if(pairObjectO.box2 == 'O' && pairObjectO.box5 == 'O' && pairObjectO.box8 == 'O'){
                        result.style.display = 'flex'
                        text.innerHTML = 'Player O Won This Game!!'
                    }
                    else if(pairObjectO.box3 == 'O' && pairObjectO.box6 == 'O' && pairObjectO.box9 == 'O'){
                        result.style.display = 'flex'
                        text.innerHTML = 'Player O Won This Game!!'
                    }      
                    num++
                    Obj.innerHTML = moves[num]
                    if(Obj.innerHTML == ''){
                        result.style.display = 'flex'
                        text.innerHTML = 'No-one Won!!'
                    }
                }

                else if(move[num]=='cross' && boxes[i].classList.length === 1 && boxes[i].innerHTML === ''){
                    boxes[i].classList.add('clicked')
                    boxes[i].innerHTML = moves[num]
                    pairObjectX[boxes[i].id] = boxes[i].innerHTML
                    if(pairObjectX.box1 == 'X' && pairObjectX.box2 == 'X' && pairObjectX.box3 == 'X'){
                        result.style.display = 'flex'
                        text.innerHTML = 'Player X Won This Game!!'
                    }
                    else if(pairObjectX.box4 == 'X' && pairObjectX.box5 == 'X' && pairObjectX.box6 == 'X'){
                        result.style.display = 'flex'
                        text.innerHTML = 'Player X Won This Game!!'
                    }
                    else if(pairObjectX.box7 == 'X' && pairObjectX.box8 == 'X' && pairObjectX.box9 == 'X'){
                        result.style.display = 'flex'
                        text.innerHTML = 'Player X Won This Game!!'
                    }
                    else if(pairObjectX.box1 == 'X' && pairObjectX.box4 == 'X' && pairObjectX.box7 == 'X'){
                        result.style.display = 'flex'
                        text.innerHTML = 'Player X Won This Game!!'
                    }
                    else if(pairObjectX.box2 == 'X' && pairObjectX.box5 == 'X' && pairObjectX.box8 == 'X'){
                        result.style.display = 'flex'
                        text.innerHTML = 'Player X Won This Game!!'
                    }
                    else if(pairObjectX.box3 == 'X' && pairObjectX.box6 == 'X' && pairObjectX.box9 == 'X'){
                        result.style.display = 'flex'
                        text.innerHTML = 'Player X Won This Game!!'
                    }
                    else if(pairObjectX.box1 == 'X' && pairObjectX.box5 == 'X' && pairObjectX.box9 == 'X'){
                        result.style.display = 'flex'
                        text.innerHTML = 'Player X Won This Game!!'
                    }
                    else if(pairObjectX.box3 == 'X' && pairObjectX.box5 == 'X' && pairObjectX.box7 == 'X'){
                        result.style.display = 'flex'
                        text.innerHTML = 'Player X Won This Game!!'
                    }
                    
                    num++
                    Obj.innerHTML = moves[num]
                   
                }
            })//end of click event listner
            }//end of if condition which checks length == 1
        }//end of main for loop for boxes
    }//end of player's turn selection (this is for cross )




    // X Turn :
    if(player == 2 && selection == 'X' || selection == 'x' || selection == 1){

        const moves1 = ['X','O','X','O','X','O','X','O','X','-','']

        const move1 = ['cross','round','cross','round','cross','round','cross','round','cross']

        let num1 = 0

        Obj.innerHTML = moves1[num1]

        Obj.style.color = 'black' 
        
        const pairObjectO1 = {

        }

        const pairObjectX1= {

        }
        for(let i = 0 ; i < boxes.length ; i++){
            
            if(boxes[i].classList.length == 1 && boxes[i].innerHTML === ''){
                
                boxes[i].addEventListener('click',()=>{
                if(move1[num1]=='cross' && boxes[i].classList.length === 1 && boxes[i].innerHTML === ''){
                        boxes[i].classList.add('clicked')
                        boxes[i].style.color = 'white'
                        boxes[i].innerHTML = moves1[num1]
                        pairObjectX1[boxes[i].id] = boxes[i].innerHTML
                        if(pairObjectX1.box1 == 'X' && pairObjectX1.box2 == 'X' && pairObjectX1.box3 == 'X'){
                            result.style.display = 'flex'
                            text.innerHTML = 'Player X Won This Game!!'
                        }
                        else if(pairObjectX1.box4 == 'X' && pairObjectX1.box5 == 'X' && pairObjectX1.box6 == 'X'){
                            result.style.display = 'flex'
                            text.innerHTML = 'Player X Won This Game!!'
                        }
                        else if(pairObjectX1.box7 == 'X' && pairObjectX1.box8 == 'X' && pairObjectX1.box9 == 'X'){
                            result.style.display = 'flex'
                            text.innerHTML = 'Player X Won This Game!!'
                        }
                        else if(pairObjectX1.box1 == 'X' && pairObjectX1.box4 == 'X' && pairObjectX1.box7 == 'X'){
                            result.style.display = 'flex'
                            text.innerHTML = 'Player X Won This Game!!'
                        }
                        else if(pairObjectX1.box2 == 'X' && pairObjectX1.box5 == 'X' && pairObjectX1.box8 == 'X'){
                            result.style.display = 'flex'
                            text.innerHTML = 'Player X Won This Game!!'
                        }
                        else if(pairObjectX1.box3 == 'X' && pairObjectX1.box6 == 'X' && pairObjectX1.box9 == 'X'){
                            result.style.display = 'flex'
                            text.innerHTML = 'Player X Won This Game!!'
                        }
                        else if(pairObjectX1.box1 == 'X' && pairObjectX1.box5 == 'X' && pairObjectX1.box9 == 'X'){
                            result.style.display = 'flex'
                            text.innerHTML = 'Player X Won This Game!!'
                        }
                        else if(pairObjectX1.box3 == 'X' && pairObjectX1.box5 == 'X' && pairObjectX1.box7 == 'X'){
                            result.style.display = 'flex'
                            text.innerHTML = 'Player X Won This Game!!'
                        }
                        
                        num1++
                        Obj.innerHTML = moves1[num1]
                        if(Obj.innerHTML == ''){
                            result.style.display = 'flex'
                            text.innerHTML = 'No-one Won!!'
                        }
                }
                else if(move1[num1]=='round' && boxes[i].classList.length === 1 && boxes[i].innerHTML === ''){

                    boxes[i].classList.add('clicked')
                    boxes[i].style.color = 'black'
                    boxes[i].innerHTML = moves1[num1]
                    pairObjectO1[boxes[i].id] = boxes[i].innerHTML

                    if(pairObjectO1.box1 == 'O' && pairObjectO1.box2 == 'O' && pairObjectO1.box3 == 'O'){
                        result.style.display = 'flex'
                        text.innerHTML = 'Player O Won This Game!!'
                    } 
                    else if(pairObjectO1.box4 == 'O' && pairObjectO1.box5 == 'O' && pairObjectO1.box6 == 'O'){
                        result.style.display = 'flex'
                        text.innerHTML = 'Player O Won This Game!!'
                    } 
                    else if(pairObjectO1.box7 == 'O' && pairObjectO1.box8 == 'O' && pairObjectO1.box9 == 'O'){
                        result.style.display = 'flex'
                        text.innerHTML = 'Player O Won This Game!!'
                    } 
                    else if(pairObjectO1.box1 == 'O' && pairObjectO1.box5 == 'O' && pairObjectO1.box9 == 'O'){
                        result.style.display = 'flex'
                        text.innerHTML = 'Player O Won This Game!!'
                    } 
                    else if(pairObjectO1.box3 == 'O' && pairObjectO1.box5 == 'O' && pairObjectO1.box7 == 'O'){
                        result.style.display = 'flex'
                        text.innerHTML = 'Player O Won This Game!!'
                    }
                    else if(pairObjectO1.box1 == 'O' && pairObjectO1.box4 == 'O' && pairObjectO1.box7 == 'O'){
                        result.style.display = 'flex'
                        text.innerHTML = 'Player O Won This Game!!'
                    }
                    else if(pairObjectO1.box2 == 'O' && pairObjectO1.box5 == 'O' && pairObjectO1.box8 == 'O'){
                        result.style.display = 'flex'
                        text.innerHTML = 'Player O Won This Game!!'
                    }
                    else if(pairObjectO1.box3 == 'O' && pairObjectO1.box6 == 'O' && pairObjectO1.box9 == 'O'){
                        result.style.display = 'flex'
                        text.innerHTML = 'Player O Won This Game!!'
                    }      
                    num1++
                    Obj.innerHTML = moves1[num1]
                }

                
            })//end of click event listner
            }//end of if condition which checks length == 1
        }//end of main for loop for boxes
    }//end of player's turn selection (this is for cross )
}//end of function

multi()
