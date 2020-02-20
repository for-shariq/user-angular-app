import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name:string;
  email:string;
  message:string;

  constructor() { }

  ngOnInit() {
  }

  submitForm(){
    //const nameInput = document.querySelector('input[name=name]').value;
    const message = `My Name is ${this.name}`;
    alert(message);

  }


}
