import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase';
import { dataTable } from '../../modals/dataTable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public temperature:number;
  public day=new Date().getDay();
  public month=new Date().getMonth()+1;
  public year= new Date().getFullYear();
  public hour= new Date().getHours();
  public minute= new Date().getMinutes();
  public rootRef=firebase.database().ref();
  public dataTable:dataTable;
  
  constructor(public navCtrl: NavController) {
    this.dataTable={} as dataTable;
   this.getTemperature();
  }

  getTemperature(){
    this.rootRef.once('value').then((snapShot)=>{
      console.log(snapShot.val());
      this.dataTable=snapShot.val();
    }).catch((err)=>{
      console.log(err);
    })
  }

  maFunction(){
    console.log('setTimeOut');
  }

}
 