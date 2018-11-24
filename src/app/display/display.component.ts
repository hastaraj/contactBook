import { Contacts } from './../contacts.model';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  contactList: Contacts[];
  details;
  id;
  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService) { 
    let id = this.route.snapshot.paramMap.get('id');
    if(id) this.contactService.get(id).valueChanges().subscribe(p =>this.details = p);
  }
  update(con: Contacts){
    this.contactService.contactSelected = Object.assign({},con);
  }
  delete(key: string){
    if(confirm('Are you sure you want to delete?')){
      this.contactService.delete(key);
    }
  }
  ngOnInit() {
    var goal = this.contactService.getAll();
    goal.snapshotChanges().subscribe(item => {
      this.contactList = [];
      item.forEach(element => {
        var play = element.payload.toJSON();
        play["$key"] = element.key;
        this.contactList.push(play as Contacts);
      });
    });
  }


}
