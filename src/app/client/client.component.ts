import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { client } from '../model/client';

declare var window:any;

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {
  ClientData!:any;
  formValue!:FormGroup;
  formModal:any;
  showAdd!:boolean;
  showUpdate!:boolean;
  number!:number;

  clientModel = new client ();

  constructor(private formbuilder: FormBuilder , private api: ClientService){}

  ngOnInit(): void{
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    );
    this.formValue = this.formbuilder.group({
      nom: [''],
      prenom:[''],
      telephone:[''],
      email:[''],
      age:[''],
      id_doc:[''],
      id_agent:[''],
    })
    this.getClient()
  }
  openModal(){
    this.formModal.show();
  }
  closeModal(){
    this.formModal.hide();
  }
  clickAddClient(){
    this.showAdd = true;
    this.showUpdate = false;
  }
  postClient(){

    this.clientModel.nom = this.formValue.value.nom;
    this.clientModel.prenom= this.formValue.value.prenom;
    this.clientModel.email = this.formValue.value.email;
    this.clientModel.age = this.formValue.value.age;
    this.clientModel.telephone = this.formValue.value.telephone;
    this.clientModel.id_doc = this.formValue.value.id_doc;
    this.clientModel.id_agent = this.formValue.value.id_agent;

    this.api.postClient(this.clientModel).subscribe((res)=>{

      console.log(res);
      console.log(this.clientModel);
      alert('enregistrement effectue avec succes');
      this.formValue.reset();
      let ref = document.getElementById('cancel');
      ref?.click();
      this.getClient();
    },
    (err)=>{
      alert("echec de l'ajout");
    })
  }

  getClient(){
    this.api.getClient().subscribe((res)=>{
      this.ClientData = res;
      console.log(res)
    });
  }

  modifierClient(Client: any){
    this.showUpdate = true;
    this.showAdd = false;
    this.clientModel.id = Client._id;
    this.clientModel.age = Client.age;
    this.clientModel.nom = Client.nom;
    this.clientModel.prenom = Client.prenom;
    this.clientModel.email = Client.email;
    this.clientModel.telephone = Client.telephone;
    this.clientModel.id_doc = Client.id_doc;
    this.clientModel.id_agent = Client.id_agent;

    this.formValue.controls['nom'].setValue(Client.nom);
    this.formValue.controls['prenom'].setValue(Client.prenom);
    this.formValue.controls['age'].setValue(Client.age);
    this.formValue.controls['email'].setValue(Client.email);
    this.formValue.controls['telephone'].setValue(Client.telephone);
    this.formValue.controls['id_doc'].setValue(Client.id_doc);
    this.formValue.controls['id_agent'].setValue(Client.id_agent);

  }
  deleteClient(Client: any){
    this.api.deleteClient(Client._id).subscribe((res)=>{
      alert('suppresion effectue avec success');
      this.getClient();
    })

  }
  updateClient(){
    this.clientModel.nom = this.formValue.value.nom;
    this.clientModel.prenom= this.formValue.value.prenom;
    this.clientModel.email = this.formValue.value.email;
    this.clientModel.age = this.formValue.value.age;
    this.clientModel.telephone = this.formValue.value.telephone;
    this.clientModel.id_doc = this.formValue.value.id_doc;
    this.clientModel.id_agent = this.formValue.value.id_agent;

    this.api.updateClient(this.clientModel,this.number).subscribe((res)=>{
      console.log(res);
      console.log(this.clientModel);
      alert('modification effectue avec succes');
      this.formValue.reset();
      let ref = document.getElementById('cancel');
      ref?.click();
      this.getClient();
    },(err) => {
      alert('Echec de la mise ajour');
    })

  }


}
