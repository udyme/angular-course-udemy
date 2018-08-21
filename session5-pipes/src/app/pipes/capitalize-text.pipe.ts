import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalizeText' })
export class CapitalizeTextPipe implements PipeTransform {
    transform(value: string, arg1: string, arg2: string, arg3: string): string {
        return value.toLocaleLowerCase().split(" ").map((w) => {
            return w.replace(/^[a-z]{1}/, function ($0) {
                return $0.toUpperCase();
            });

        }).join().replace(/,/gi," ");
    }
}