import { Component } from '@angular/core';
import { SinistreService } from '../services/sinistre.service';
import { FormGroup, FormBuilder } from '@angular/forms';


declare var window:any;
@Component({
  selector: 'app-sinistre',
  templateUrl: './sinistre.component.html',
  styleUrls: ['./sinistre.component.scss']
})
export class SinistreComponent {

  SinistreData!:any;
  formValue!:FormGroup;
  formModal:any;
  showAdd!:boolean;
  showUpdate!:boolean;

  constructor(private formbuilder: FormBuilder , private api: SinistreService){}

  ngOnInit(): void{
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    );
    this.formValue = this.formbuilder.group({
      date: [''],
      description:[''],
      montant:[''],
      lieu:['']
    })
    this.getSinistre()
  }
  openModal(){
    this.formModal.show();
  }
  closeModal(){
    this.formModal.hide();
  }
  clickAddSinistre(){
    this.showAdd = true;
    this.showUpdate = false;
  }
  postSinistre(){
    

  }

  getSinistre(){
    this.api.getSinistre().subscribe((res)=>{
      this.SinistreData = res;
      console.log(res)
    });
  }

  modifierSinistre(Sinistre: any){
    this.showUpdate = true;

  }
  deleteSinistre(Sinistre: any){

  }
  updateSinistre(){

  }


}
