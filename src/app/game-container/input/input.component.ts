import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  //@Input() disableInput: boolean = false;

  resetValue: string = '';

  @Input() disableInput(): boolean{
    this.resetValue = '';
    return false;
  }

  @Output() onInputChanged = new EventEmitter<string>();

  onInput(event){
    this.onInputChanged.emit(event.target.value);
  }
}
