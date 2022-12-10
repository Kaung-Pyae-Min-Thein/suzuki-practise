import { Component } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent {
  changeVal = 'header val changed';
  testInput(text:string){
    console.log(text);
  }
}
