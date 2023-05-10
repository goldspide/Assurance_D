import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

declare var window:any;

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {
  formModal!:any;
  number!:number;
  formValue!:FormGroup;
  showAdd!:boolean;
  showUpdate!:boolean;
  ElectionData!:any;

  constructor(private formbuilder:FormBuilder){}





  ngOnInit(): void{
    this.number=-1;
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    );
    this.formValue = this.formbuilder.group({
      label : [''],
      description: [''],
      status: [''],
      date: ['']
    })
  }
  openModal(){
    this.formModal.show()
  }
  doSomeThing(){
    this.formModal.hide();
  }

  clickAddElection(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate= false;
  }
  



}
