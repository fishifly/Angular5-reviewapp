import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name : string;
  age: number;
  email: string;
  //an address with an interface Address that is defined down
  address:Address;
  //an array of hobbies string
  hobbies: string[];
  //using any
  hello:any;
  //a property of posts witha an array interface
  posts: Post[];
  //for the toggle edit 
  isEdit: boolean = false;

  constructor(private dataService: DataService ) { }

  ngOnInit() {
    console.log('I love angular baby');

    this.name = "Fisayo Nathan";
    this.age = 30;
    this.email = 'oluwayemifsayo@gmail.com';
    this.address = {
      street: 'Boston Street',
      city: 'ABuja city',
      state: 'Nigeria'
    }
    this.hobbies =['coding', 'listening to music', 'bible reading'];
    this.hello = 'hello';

    this.dataService.getPosts().subscribe((posts)=>{
      // console.log(posts);
      this.posts = posts;
    })

  }

  //ends

  onClick(){
    // console.log('Hello geek');
    this.name ='Oluwayemi Doyinsola';
    this.hobbies.push('New Hobby');
  }

  addHobby(hobby){
    this.hobbies.unshift(hobby);
    return false;
  }

  toggleEdit(){
    //if its true: set to false and vice versa
    this.isEdit = !this.isEdit;
  }

  deleteHobby(hobby){
    for(let i = 0; i< this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }

}


interface Address{
  street: string,
  city: string,
  state: string

}

interface Post{
  id: number,
  title: string,
  body: string,
  userId: number
}
