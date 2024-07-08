import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersDbService {
  public usersList: User[] = [/*
    {
      "id": 0,
      "username": "Luis",
      "firstName": "Luis",
      "lastName": "Moreno",
      "password": "banana",
      "signUpDate": "09/03/1992",
      "lastSession": "19/06/2024"
    },
    {
      "id": 1,
      "username": "Eliana",
      "firstName": "Eliana",
      "lastName": "Ceballos",
      "password": "mybaby",
      "signUpDate": "26/06/1991",
      "lastSession": "17/06/2024"
    },
    {
      "id": 2,
      "username": "Samuel",
      "firstName": "Samuel",
      "lastName": "Moreno",
      "password": "roar",
      "signUpDate": "06/02/2023",
      "lastSession": "10/06/2024"
    },
    {
      "id": 3,
      "username": "Fanny",
      "password": "postredelimon",
      "firstName": "Fanny",
      "lastName": "Moreno",
      "signUpDate": "09/09/1990",
      "lastSession": "10/05/2024"
    },
    {
      "id": 4,
      "username": "luisangel2",
      "firstName": "Luis",
      "lastName": "Moreno",
      "password": "manoTengoFe",
      "signUpDate": "29/11/1955",
      "lastSession": "22/06/2024"
    }*/
  ]

  constructor() { }

  getAllUsers(): User[] {
    return this.usersList
  }

  checkUser(username: string, password: string): boolean {
    //Check if user exists
    let userExists = this.usersList.find!(user => user.username === username)

    switch (userExists) {
      //No match
      case undefined:
        alert("This username doesn't exist")
        return false
        //break;

      default:
        //There is a match
        //Check password
        if(password === userExists?.password){
          alert("Welcome " + userExists.firstName + " " + userExists.lastName)
          return true
          break;
        }
        alert('Check your password, whore')
        return false
        break;
    } 
  }
}