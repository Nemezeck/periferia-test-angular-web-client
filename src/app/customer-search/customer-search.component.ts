import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css']
})
export class CustomerSearchComponent {
  searchForm: FormGroup;
  docTypeOptions = [
    { value: 'C', display: 'Cedula de ciudadanía' },
    { value: 'P', display: 'Pasaporte' },
  ];
  customerInfo: any;
  error: string | null = null;

  constructor(private fb: FormBuilder, private customerService: CustomerService, private router : Router) {
    this.searchForm = this.fb.group({
      docType: [null, Validators.required],
      docNumber: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(11), Validators.pattern('^[0-9]*$')]]
    });
  }

  searchCustomer() {
    
    const { docType, docNumber } = this.searchForm.value;
    this.customerService.getCustomerInfo(docType, docNumber)
      .subscribe({
        next: (data : any) => {
          console.log(data)
          this.customerInfo = data;
          this.error = null;
          this.customerService.setCustomerData(data);
          this.router.navigate(['/summary']);
        },
        error: (error : any ) => {
          switch (error.status){
            case 404:
              this.error = "Registro no encontrado.";
              break;
            case 400:
              this.error = "Error en la consulta.";
              break;
            default:
              this.error = 'Failed to fetch customer information.';
              break;
          }
          this.customerInfo = null;
        }
        
      });
  }
}
