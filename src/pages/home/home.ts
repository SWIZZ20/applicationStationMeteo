import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase';
import { dataTable } from '../../modals/dataTable';
import * as moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public temperature:number;
  public day=new Date().getDay();
  public month=new Date().getMonth()+1;
  public year= new Date().getFullYear();
  public hour: any;
  public minutes: any;
  public rootRef=firebase.database().ref();
  public dataTable:dataTable;
  
  constructor(public navCtrl: NavController) {
    this.dataTable={} as dataTable;
    moment.locale('fr');
    setInterval(()=>this.getTemperature(), 1000);
   //this.getTemperature();
  }

  getTemperature(){
    this.hour = moment().hour();
    this.minutes = moment().minute();
    this.rootRef.once('value').then((snapShot)=>{
      console.log(snapShot.val());
      this.dataTable=snapShot.val();
    }).catch((err)=>{
      
    })
  }

  maFunction(){
    console.log('setTimeOut');
  }

  fucntionMap(){

  }

}
 