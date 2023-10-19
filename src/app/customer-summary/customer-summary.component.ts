import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service'; // Adjust the path

@Component({
  selector: 'app-customer-summary',
  templateUrl: './customer-summary.component.html',
  styleUrls: ['./customer-summary.component.css']
})
export class CustomerSummaryComponent implements OnInit {

  error: string | null = null;
  customerInfo: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private customerService: CustomerService,
  ) { }

  ngOnInit() {
    this.customerInfo = this.customerService.getCustomerData();
  }
  
  goBack() {
    this.router.navigate(['/']);
  }
}

