import { Contacts } from './contacts.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactList: AngularFireList<any>;
  contactSelected: Contacts = new Contacts();
  constructor(private db: AngularFireDatabase) { }
  create(details: Contacts){
    this.contactList.push({
      name: details.name,
      address: details.address,
      company: details.company,
      email: details.email,
      phone: details.phone,
      section: details.section,
      zipcode: details.zipcode
    });
  }

  getAll(){
    this.contactList = this.db.list('/details');
    return this.contactList;
  }

  get($key){
    return this.db.object('/details/' + $key);
  }

  updates(details: Contacts ){
   this.contactList.update(details.$key, {
    name: details.name,
      address: details.address,
      company: details.company,
      email: details.email,
      phone: details.phone,
      section: details.section,
      zipcode: details.zipcode
   });
  }

  delete($key: string){
    this.contactList.remove($key);
  }
}
