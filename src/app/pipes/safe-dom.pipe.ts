import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeDom'
})
export class SafeDomPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {}

  transform(value: string, url: any): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
