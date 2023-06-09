import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  constructor(private http: HttpClient) { }

  postContat(data:any){
    return this.http.post<any>('http://localhost:8001',data).pipe(map((res)=>{
      return res;
    }))
  }

  getContrat() {
    return this.http.get<any>('http://localhost:8001').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  deleteContrat(id:number){
    return this.http.delete<any>(''+id).pipe(map((res)=>{
    }))
  }
  updateContrat(data:any,id:number){
    return this.http.patch<any>(''+id,data).pipe(map((res)=>{

    }))
  }
}
