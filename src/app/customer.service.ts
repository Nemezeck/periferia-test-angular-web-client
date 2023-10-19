import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'http://localhost:8090';

  constructor(private http: HttpClient) {}

  getCustomerInfo(docType: string, docNumber: string): Observable<any> {
    const params = {
      id: docNumber,
      idtype: docType
    };
    return this.http.get<any>(`${this.apiUrl}/customer`, { params });
  }
}
