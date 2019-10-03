import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input() public skill: Skill[]; // input, données que on recoit depuis devloper.ts (marqué en dur dans le TS), puis envoyer dans le skill.html avec le binding de données

  constructor() { }

  ngOnInit() {
  }

}
