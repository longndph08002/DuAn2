import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form = new FormGroup({
    name:new FormControl('',[Validators.required,
      Validators.maxLength(200),
     Validators.minLength(1),
     Validators.pattern("^[^ \s]+|[^\s ]+$"),
   ]),
   email:new FormControl('',[Validators.required,
    Validators.pattern("^[^ \s]+|[^\s ]+$"),
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),
  ]),
  sdt:new FormControl('',[Validators.required,
    Validators.pattern("^[^ \s]+|[^\s ]+$"),]),
    tieude:new FormControl('',[Validators.required,
      Validators.pattern("^[^ \s]+|[^\s ]+$"),]),
      noidung:new FormControl('',[Validators.required,
        Validators.pattern("^[^ \s]+|[^\s ]+$"),]),
        
  })
  constructor() { }

  ngOnInit(): void {
  }

}
