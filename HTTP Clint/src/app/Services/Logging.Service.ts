import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LoggingService{
    http: HttpClient = inject(HttpClient);
    logError(data: {statusCode: number, errorMessage: string, dateTime: Date}){
        this.http.post('https://angularhttpclint-6c95e-default-rtdb.firebaseio.com/log.json', data)
        .subscribe();
    }
    fetchError(){
        this.http.get('https://angularhttpclint-6c95e-default-rtdb.firebaseio.com/')
        .subscribe((data) => {
            console.log(data);
        })
    }
}