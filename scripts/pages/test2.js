console.log ("test2.js");


class User {
    constructor(firstName, lastName, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      if(this.firstName){
          this.displayFirstName();
      }
      else if (this.lastName){
          this.displaylastName();
      }
    }
  
    displayFirstName(){
        return `J'affiche le firstname : ${this.firstName}`;
    }
    displaylastName(){
        return `J'affiche le lastName : ${this.lastName}`;
    }

    /* fullName() {
      return `${this.firstName} ${this.lastName}`;
    } */
  }
  
  const user1 = new User("John","Doe","john@doe.com");
  
  const user2 = new User("Jane","Doe","jane@doe.com");

  console.log(user2.displayFirstName());