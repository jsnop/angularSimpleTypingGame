import { Component, OnInit } from '@angular/core';
import { GetRandomWordService } from '../get-random-word.service';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.css']
})
export class GameContainerComponent implements OnInit {

  constructor(private getRandomWordService: GetRandomWordService) { }

  ngOnInit(): void {
    this.getNewWord();
  }
  
  currentWord:string = 'loading...';
  successMessage: string;
  matched:boolean = true; //init as true to force get ready message

  compareWords(event){
    if(this.currentWord == event){
      this.onMatch();
    }
  }

  onMatch(){
    this.matched = true;
    this.successMessage = 'Awesome Work!';

    setTimeout(() => this.successMessage = 'fetching next word...', 500);

    setTimeout(() => this.getNewWord(), 1000);
    

  }

  getNewWord(){
    this.getRandomWordService.getRandomWord().subscribe((newWord) => {
      this.successMessage = "get ready...";
      setTimeout(() => this.startNextRound(newWord), 500);
    })
  }

  startNextRound(newWord: string){
    this.currentWord = newWord;
    this.matched = false;
  }

}
