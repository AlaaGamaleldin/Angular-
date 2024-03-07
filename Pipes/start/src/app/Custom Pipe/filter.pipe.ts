import { Pipe, PipeTransform } from "@angular/core";
import { Student } from "../Models/Student";

@Pipe({name: 'filter'})
export class filterPipe implements PipeTransform{
    transform(list: Student[], filterBy: string) {
        console.log('the filter pipe has been called');
        if(
            filterBy.toLowerCase() === 'all' || filterBy === '' || list.length === 0){
                return list;
    }else{
        return list.filter((std) => {
            return std.gender.toLowerCase() === filterBy.toLowerCase();
        })
    }
    }
}