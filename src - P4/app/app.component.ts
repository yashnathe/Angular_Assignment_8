import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  public inputText : string = "";
  public inputLength : number = 0;

  public onInput(event : any){
    this.inputText = event.target.value;
    this.updateLength();
  }

  public onBlur(){
    this.updateLength();
  }

  public updateLength(){
    this.inputLength = this.inputText.length;
  }

}
