import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  isUpdate:Boolean=true;
  admins = [];
  adminDto = {
    "name": "",
    "address": "",
    "type": "",
    "id": 0,
    "description": "",
    "isActive": "yes",
    
  }
  constructor() { }

  ngOnInit(): void {
  }
  add()
  {
    this.isUpdate=false;
  }
  clear()
  { 
  this.adminDto.name= "",
  this.adminDto.address= "",
  this.adminDto.type="",
  this.adminDto.id=0,
  this.adminDto.description="",
  this.adminDto.isActive="yes"
  }
}
