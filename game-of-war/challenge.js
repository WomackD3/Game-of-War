// Using oops-card lab deck as a template
//Each player draws a card
//Compare the value of the cards. Highest card wins
//Create a for loop for War. 
//If a Player has 52 cards they win. If a player has 0 cards they lose. 





// class PlayGame {
//   constructor(deck1, deck2, table) {
//     this.deck1 = 'playerOne'
//     this.deck2 = 'playerTwo'
//     this.table = 0
//   }
  

// }

//   for (let x = 0; x < deck1.length; x++) {
  //     table.push(x)
  
  //     for (let y = 0; y < deck2.length; y++) {
    //       if (deck1 < deck2) {
      //         console.log("anything")
      //       }
        
        //     }
        //   }
        // }
        //   if (deck1[x] < deck2[y]) {
          
          //   }
          
          // let player1 = new Player("Rick")
          // let player2 = new Player("Morty")
          
          class Card {
            constructor(suit, rank, score) {
              this.suit = suit
              this.rank = rank
              this.score = score
            }
}

class Deck {
  constructor() {
    this.cards = []
    this.deck()
  }
  
  deck() {
    let suits = ['spades', 'clubs', 'hearts', 'diamonds'];
    let ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let score = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
    
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        this.cards.push(new Card(suits[i], ranks[j], j + 1))
      }
    }
    this.shuffleCards()
  }
  shuffleCards() {
    this.cards = this.cards.sort((a, b) => 0.5 - Math.random());
  }
  draw() {
    return this.cards.pop()
    
  }
}

let playGame = function (deck1, deck2) {
  while (!gameOver) {
    let table = [deck1.shift(), deck2.shift()]
    if(deck1.length === 0 || deck2.length === 0){
      (deck1.length === 0 ) ? winner = "deck2" : winner = "deck1"
      gameOver = true
    }
 

    if (table[0].score > table[1].score) {
      deck1.push(...table)
      console.log("Deck1 wins", deck1.length, deck2.length)
      console.log(table[0].score, table[1].score)
      
    }
    else if (table[1].score > table[0].score) {
      deck2.push(...table)
      console.log("Deck2 wins", deck1.length, deck2.length)
      console.log(table[0].score, table[1].score)
    }
    else if (table[0].score === table[1].score) {
      console.log("Their are no ties. Let the Nuukess flyy. Itssss WAAAARRRR!!!!")
      console.log(table[0].score, table[1].score)
      warTable.push(...table)
      war()


 }
 
  }
  console.log(`The Winner isssssss drum roll `, winner)  
}

 //if both players could afford a war 

    // the person that cant afford the war loses

  // if both players have enough to enter a war 
  // while no one wins the war
  //        play 4 cards compare the last 
  //        if player one wins 
  //            player one wins the whole table
  //        if player two wins 
  //             player two wins the whole table 
  //        if tied 
  //            loop back top 

function war() {
  let warOver = false
  while (!warOver) {
    if (deck1.length < 4) {
      winner = "Deck2"
      gameOver = true
      break
    }
    if (deck2.length < 4) {
      winner = "Deck1"
      gameOver = true
      break
    }
    //play four cards
    tempDeck1 = (deck1.splice(0, 4))
    tempDeck2 = (deck2.splice(0, 4))
    warTable.push(...tempDeck1)
    warTable.push(...tempDeck2)
    console.log("war cards to compare", tempDeck1[3], tempDeck2[3])
    if (tempDeck1[3].score > tempDeck2[3].score) {
      deck1.push(...warTable)
      warOver = true
      console.log("Deck1 wins war", deck1.length, deck2.length)
    } else if (tempDeck1[3].score < tempDeck2[3].score) {
      deck2.push(...warTable)
      console.log("Deck2 wins war", deck1.length, deck2.length)
      warOver = true
    }


  }
  warTable.length = 0
}















// let preparation = []
// function war() {

//   ike = (deck1.splice(0, 4))
//   tempDeck2 = (deck2.splice(0, 4))



//   preparation.push(...ike,...tempDeck2)
//   // console.log((deck1.splice)(deck2.splice))
//   if (preparation[0].score > preparation[1].score) {
//     deck1.push(...preparation)
//     // console.log("Deck1 wins", deck1.length, deck2.length)
//   } else if (preparation[1].score > preparation[0].score) {
//     deck2.push(...preparation)
//     console.log("Deck2 wins", deck1.length, deck2.length)
//   } else if (preparation[0].score === preparation[1].score) {
//     console.log("Their are no ties. Let the Nuukess flyy. Itssss WAAAARRRR!!!!")
//     console.log(preparation[0], preparation[1])

//       // war()
//       throw "double tie " 
//  }

    
// }






 
//   let tie = 
// }
  
let deckOfCards = new Deck()
let winner = ""
let warTable = []
let gameOver = false;
const split = deckOfCards.cards.length/ 2
const deck1 = deckOfCards.cards.slice(0,split)
const deck2 = deckOfCards.cards.slice(split)

playGame(deck1, deck2)




// console.log(deck1)


// console.log(deckOfCards)
// console.log(deckOfCards.cards.length)
// console.log(deckOfCards.draw())

// Your game should run without errors
// The game starts immediately when the JavaScript is executed. Create your two players and start the rounds!
// There is no user input. The program simply loops through rounds until the game is finished.
// Print a message for each round showing the cards played by each user, who won the round, and how many cards each player has.
// Include a README written in well-formatted Markdown (hint: look up README templates)
// Show a good commit history with frequent commits (We're looking for lots of small commits!)
