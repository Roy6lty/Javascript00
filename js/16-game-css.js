/* object is initalized as th scripts run*/
        // get score from local storage and parse into object
        // using default operator

        
        let score = JSON.parse(localStorage.getItem('score')) || {
            wins: 0,
            losses: 0,
            ties: 0
        };

        function updateElement() {
             document.querySelector('.js-score')
            .innerHTML =`Wins ${score.wins}  Lossess ${score.losses}  Ties: ${score.ties}`;
        }
    

    function gameFunc(playermove) {
        const randomNumber =  Math.random();
        let computerMove = "";
        

        if (randomNumber>= 0 && randomNumber<= 1/3 ){
            computerMove = 'rock';
        }else if (randomNumber>= 1/3 && randomNumber < 2/3){
            computerMove = 'paper';
            
        }else {computerMove = 'scissors';}
        

        computerMove;

        let result ='';


            if (playermove === 'rock'){

                if (computerMove === 'rock'){
                    result ='Tie.';
                } else if (computerMove === 'paper'){
                    result = 'You lose.';
                }else if (computerMove === 'Scissors'){
                    result = 'You win';
                }
            }

            if (playermove ==='paper') {

                if (computerMove === 'rock'){
                result ='You win.';
                } else if (computerMove === 'paper'){
                result = 'Tie';
                }else if (computerMove === 'Scissors'){
                result = 'You lose.';
                }
            }

            if (playermove ==='scissors') {

                if (computerMove === 'rock'){
                result = 'You lose.';
                } else if (computerMove === 'paper'){
                    result = 'You win.';
                }else if (computerMove === 'Scissors'){
                    result = 'Tie';
                }
            }

            if  (result === 'You win.'){
                score.wins += 1;
            }else if (result === 'You lose.'){
                score.losses += 1;
            } else if (result === 'Tie'){
                score.ties += 1;
            }
        // Saving value to local storage
        localStorage.setItem('score', JSON.stringify(score));

        const final =`You picked ${playermove}, computer picked ${computerMove} ${result} 
        Wins ${score.wins}  Lossess ${score.losses}  Ties: ${score.ties}`;

        updateElement()

        document.querySelector('.js-result').
            innerHTML = result;

        document.querySelector('.js-move').
            innerHTML = `
                        You choose <img src="images/${playermove}.jpg"
                        class ='move-second-icon'>
                        and the computer choose
                        <img src="images/${computerMove}.jpg"
                        class="move-second-icon"> 
                   `

        return alert(final);
    }