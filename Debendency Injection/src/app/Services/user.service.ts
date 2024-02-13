import { EventEmitter, Inject, Injectable } from "@angular/core";
import { User } from "../Models/User";
import { LoggerService } from "./logger.service";
import { USER_TOKEN } from "../app.module";
@Injectable()
export class UserService{
    users: User[] = [
        new User('steve smith','male','monthle','active'),
        new User('Alaa Gamal','male','yearly','active'),
        new User('sarah smith','femal','qurterly','active'),
    ];
    constructor(private logger: LoggerService){

    }
    OnUserDetailsClicked: EventEmitter<User> = new EventEmitter<User>();

    OnShowUserDetails(user: User){
        this.OnUserDetailsClicked.emit();
    }
    GetAllUsers(){
        return this.users;
    }
    CreateUser(name: string, gender: string, subType: string, status: string){
       let user = new User(name, gender,subType,status);
       this.users.push(user);
       
       this.logger.logMessage(name, status);
    }
}