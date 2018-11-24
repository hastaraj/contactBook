import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'contactadd',
  templateUrl: './contactadd.component.html',
  styleUrls: ['./contactadd.component.css']
})
export class ContactaddComponent implements OnInit {
  details;
  id;
  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
    ) { 
      this.id = this.route.snapshot.paramMap.get('id');
      if(this.id) this.contactService.get(this.id).valueChanges().subscribe(p => this.details = p);
    }


  save(f: NgForm){
    this.contactService.create(f.value);
    this.resetForm(f);
  }

  resetForm(f?: NgForm){
    if(f!=null)
    f.reset();
    this.contactService.contactSelected = {
      $key: null,
      name: '',
      address: '',
      company: '',
      email: '',
      phone:0,
      section: '',
      zipcode:0,
    }
  }
  ngOnInit() {
    
    this.resetForm()
  }

}
