import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home', // document.querySelector('app-home')
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  prenom = 'Titi';
  prenoms = ['Toto', 'Titi', 'Tata'];

  constructor() { }

  ngOnInit(): void {
  }

}
