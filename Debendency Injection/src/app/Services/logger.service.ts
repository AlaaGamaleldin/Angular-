export class LoggerService{
    logMessage(name: string, status: string){
        console.log(`A new user with name ${name} with status ${status} is add to user list`)
    }
}