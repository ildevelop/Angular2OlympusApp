/**
 * Created by Radu on 1/14/2017.
 */
import {Component, OnInit} from '@angular/core';
import {UserInfo} from './UserInfo';

@Component({
  selector:'main-menu',
  templateUrl:'./app/menu/menu.html',
  styles:[".text-center{background-color:darkgray;}.btn1{background-color:darkgray;font-weight:bold;}.btn1:hover{background-color:aquamarine;color:#6BE;}.row{margin:15px;}"]
})
export class MainComponent implements OnInit{
  user= new UserInfo();
  ngOnInit(): void {

  }

  sumbitForm(event: any,user: UserInfo){
    event.preventDefault();
    console.log(user);
  }
}

