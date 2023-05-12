import { Component } from '@angular/core';
import { contrat } from 'src/app/model/contrat';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContratService } from 'src/app/services/contrat.service';

declare var window:any;

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.scss']
})
export class ContratComponent {
  contratData!:any;
  formValue!:FormGroup;
  formModal:any;
  showAdd!:boolean;
  showUpdate!:boolean;

  contratModel = new contrat()
  constructor(private formbuilder: FormBuilder , private api: ContratService){}

  ngOnInit(): void{
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    );
    this.formValue = this.formbuilder.group({
      titre: [''],
      auteur:[''],
      // numero_de_telephone:['']
    })
    this.getContrat()
  }
  openModal(){
    this.formModal.show();
  }
  closeModal(){
    this.formModal.hide();
  }
  clickAddContrat(){
    this.showAdd = true;
    this.showUpdate = false;
  }
  postContrat(){

  }

  getContrat(){
    this.api.getContrat().subscribe((res)=>{
      this.contratData = res;
      console.log(res)
    });
  }

  modifierContrat(contrat: any){
    this.showUpdate = true;

  }
  deleteContrat(contrat: any){

  }
  updateContrat(){

  }

}
