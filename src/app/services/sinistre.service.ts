import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SinistreService {



  constructor(private http: HttpClient) { }

  postSinistre(data:any){
    return this.http.post<any>('http://localhost:8001/sinistre',data).pipe(map((res)=>{
      return res;
    }))
  }

  getSinistre() {
    return this.http.get<any>('http://localhost:8001/sinistre').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  deleteSinistre(id:number){
    return this.http.delete<any>('http://localhost:8001/sinistre/'+id).pipe(map((res: any)=>{
    }))
  }
  updateSinistre(data:any,id:number){
    return this.http.patch<any>('http://localhost:8001/sinistre/'+id,data).pipe(map((res: any)=>{
    }))
  }
}
