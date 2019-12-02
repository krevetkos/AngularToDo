import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo.service';

@Pipe({
    name:"todoFilter"
})

export class TodoFilterPipe implements PipeTransform{
    transform(todo:Todo[],search:string = ""):Todo[] {
        if(!search.trim()){
            return todo
        }
        return todo.filter(todo => {
            return todo.title.toLowerCase().indexOf(search.toLocaleLowerCase())!==-1
        })
    }
}