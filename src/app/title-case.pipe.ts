import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (!value)
      return null;

    let words = value.trim().split(' ');
    for (let i=0; i<words.length;i++){
      if (i>0  && this.isPreposition(words[i]))
        words[i] = words[i].toLowerCase()
      else
        words[i] = this.toTitleCase(words[i])
    }
    return words.join(' ');
  }

  private toTitleCase(word: string): string{
    return word[0].toUpperCase() + word.substr(1,).toLowerCase();
  }
  private isPreposition(word: string): boolean {
    let prepositions = [
      'of', 'the'
    ]
    return prepositions.includes(word.toLowerCase())
  }

}
