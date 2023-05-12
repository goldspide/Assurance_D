import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { AgentService } from '../services/agent.service';
import { agent } from '../model/agent';

declare var window:any;
@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss']
})
export class AgentComponent {
  AgentData!:any;
  formValue!:FormGroup;
  formModal:any;
  showAdd!:boolean;
  showUpdate!:boolean;
  number!:number
  agentModel = new agent ()

  constructor(private formbuilder: FormBuilder , private api: AgentService){}

  ngOnInit(): void{
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    );
    this.formValue = this.formbuilder.group({
      nom: [''],
      prenom:[''],
      telephone:[''],
      qualite:['']
    })
    this.getAgent()
  }
  openModal(){
    this.formModal.show();
  }
  closeModal(){
    this.formModal.hide();
  }
  clickAddAgent(){
    this.showAdd = true;
    this.showUpdate = false;
  }
  postAgent(){
    this.agentModel.nom = this.formValue.value.nom;
    this.agentModel.prenom = this.formValue.value.prenom;
    this.agentModel.telephone = this.formValue.value.telephone
    this.agentModel.qualite = this.formValue.value.qualite;

    this.api.postAgent(this.agentModel).subscribe((res)=>{

      console.log(res);
      console.log(this.agentModel);
      alert('enregistrement effectue avec succes');
      this.formValue.reset();
      let ref = document.getElementById('cancel');
      ref?.click();
      this.getAgent();
    },
    (err)=>{
      alert("echec de l'ajout");
    });
  }

  getAgent(){
    this.api.getAgent().subscribe((res)=>{
      this.AgentData = res;
      console.log(res)
    });
  }

  modifierAgent(Agent: any){
    this.showUpdate = true;
    this.showAdd = false
    this.agentModel.nom = Agent.nom;
    this.agentModel.prenom = Agent.prenom;
    this.agentModel.telephone = Agent.telephone;
    this.agentModel.qualite = Agent.qualite;
    this.number = Agent._id

    this.formValue.controls['nom'].setValue(Agent.nom);
    this.formValue.controls['prenom'].setValue(Agent.prenom);
    this.formValue.controls['telephone'].setValue(Agent.telephone);
    this.formValue.controls['qualite'].setValue(Agent.qualite);

  }
  deleteAgent(Agent: any){
    this.api.deleteAgent(Agent._id).subscribe((res)=>{
      alert('suppresion effectue avec success');
      this.getAgent();
    })

  }
  updateAgent(){
    this.agentModel.nom = this.formValue.value.nom;
    this.agentModel.prenom = this.formValue.value.prenom;
    this.agentModel.telephone = this.formValue.value.telephone
    this.agentModel.qualite = this.formValue.value.qualite;

    this.api.updateAgent(this.agentModel,this.number).subscribe((res)=>{

      console.log(res);
      console.log(this.agentModel);
      alert('modification effectue avec succes');
      this.formValue.reset();
      let ref = document.getElementById('cancel');
      ref?.click();
      this.getAgent();
    },(err) => {
      alert('Echec de la mise ajour');
    })

  }


}
