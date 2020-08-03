import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.css']
})
export class DangNhapComponent implements OnInit {
  form = new FormGroup({
    name:new FormControl('',[Validators.required,
      Validators.maxLength(200),
     Validators.minLength(1),
     Validators.pattern("^[^ \s]+|[^\s ]+$"),
   ]),
   mk:new FormControl('',[Validators.required,
    Validators.pattern("^[^ \s]+|[^\s ]+$"),]),

  })
  constructor() { }

  ngOnInit(): void {
  }

}
