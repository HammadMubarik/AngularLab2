import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponentComponent } from './list-component/list-component.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-binding-app';
  myValue:boolean = true;
  hide:boolean = true;

  myCount:number = 0;
  onSave()
  {
    alert('button pressed!')
  }
  onclick()
  {
    alert("h2 clicked")
  }
  count()
  {
    this.myCount++;
    
  }
  onImgClick()
  {
    this.hide = !this.hide;
  }
}