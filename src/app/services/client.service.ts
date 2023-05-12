import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  constructor(private http: HttpClient) { }

  postClient(data:any){
    return this.http.post<any>('http://localhost:8001/client',data).pipe(map((res)=>{
      return res;
    }))
  }

  getClient() {
    return this.http.get<any>('http://localhost:8001/client').pipe(
      map((res: any) => {
        return res;
      })
    );
  }


  getAgent() {
    return this.http.get<any>('http://localhost:8001/agent').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  deleteClient(id:number){
    return this.http.delete<any>('http://localhost:8001/client/'+id).pipe(map((res)=>{
    }))
  }
  updateClient(data:any,id:number){
    return this.http.patch<any>('http://localhost:8001/client/'+id,data).pipe(map((res)=>{

    }))
  }
}
