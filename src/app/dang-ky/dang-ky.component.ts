import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.css']
})
export class DangKyComponent implements OnInit {
  form = new FormGroup({
    name:new FormControl('',[Validators.required,
      Validators.maxLength(200),
     Validators.minLength(1),
     Validators.pattern("^[^ \s]+|[^\s ]+$"),
   ]),
   diachi:new FormControl('',[Validators.required,
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

 tendn:new FormControl('',[Validators.required,
  Validators.pattern("^[^ \s]+|[^\s ]+$"),]),

 mk:new FormControl('',[Validators.required,
  Validators.pattern("^[^ \s]+|[^\s ]+$"),]),
  mk2:new FormControl('',[Validators.required,
    
    Validators.pattern("^[^ \s]+|[^\s ]+$"),

  ]),
  

  })
  constructor() { }

  ngOnInit(): void {
  }

}
