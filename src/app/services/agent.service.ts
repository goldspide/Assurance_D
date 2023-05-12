import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentService {


  constructor(private http: HttpClient) { }

  postAgent(data:any){
    return this.http.post<any>('http://localhost:8001/agent',data).pipe(map((res)=>{
      return res;
    }))
  }

  getAgent() {
    return this.http.get<any>('http://localhost:8001/agent').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  deleteAgent(id:number){
    return this.http.delete<any>('http://localhost:8001/agent/'+id).pipe(map((res)=>{
    }))
  }
  updateAgent(data:any,id:number){
    return this.http.patch<any>('http://localhost:8001/agent/'+id,data).pipe(map((res)=>{

    }))
  }
}
