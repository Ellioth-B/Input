import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developer.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
  public developer: Developer = new Developer (
    "Elliot","Bobi",25,"Homme","Lorem ipsum",[{name: "Angular",logo:"../../assets/tmp.jpg", site:"https://angular.io/guide/user-input"}] // les skill sont envoyer dans le skill.ts
  )

  constructor() { }

  ngOnInit() {
  }

}
