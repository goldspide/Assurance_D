import { Component } from '@angular/core';
import { AideService } from '../services/aide.service';
import { FormGroup, FormBuilder } from '@angular/forms';

declare var window:any;
@Component({
  selector: 'app-aide',
  templateUrl: './aide.component.html',
  styleUrls: ['./aide.component.scss']
})
export class AideComponent {

  AideData!:any;
  formValue!:FormGroup;
  formModal:any;
  showAdd!:boolean;
  showUpdate!:boolean;

  constructor(private formbuilder: FormBuilder , private api: AideService){}

  ngOnInit(): void{
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    );
    this.formValue = this.formbuilder.group({
      nom: [''],
      ville:[''],
      numero_de_telephone:['']
    })
    this.getAide()
  }
  openModal(){
    this.formModal.show();
  }
  closeModal(){
    this.formModal.hide();
  }
  clickAddAide(){
    this.showAdd = true;
    this.showUpdate = false;
  }
  postAide(){

  }

  getAide(){
    this.api.getAide().subscribe((res)=>{
      this.AideData = res;
      console.log(res)
    });
  }

  modifierAide(Aide: any){
    this.showUpdate = true;

  }
  deleteAide(Aide: any){

  }
  updateAide(){

  }


}
