import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform{
    transform(value: string, limit?:number, another?:any){

        let actualLimit = limit ? limit : 50;

        if (!value)
            return null;

        return value.substr(0, actualLimit) + '...'

    }
}