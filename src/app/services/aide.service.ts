import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AideService {


  constructor(private http: HttpClient) { }

  postAide(data:any){
    return this.http.post<any>('http://localhost:8001',data).pipe(map((res)=>{
      return res;
    }))
  }

  getAide() {
    return this.http.get<any>('http://localhost:8001').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  deleteAide(id:number){
    return this.http.delete<any>(''+id).pipe(map((res)=>{
    }))
  }
  updateAide(data:any,id:number){
    return this.http.patch<any>(''+id,data).pipe(map((res)=>{

    }))
  }
}
