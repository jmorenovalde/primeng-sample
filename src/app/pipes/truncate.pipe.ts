// Inspired from https://github.com/a8m/angular-filter/blob/master/src/_filter/string/truncate.js

import { Pipe, PipeTransform, NgModule } from '@angular/core';

/**
 * This pipe is getting from https://github.com/fknop/angular-pipes/blob/master/src/string/truncate.pipe.ts
 * I don't develop this pipe. It's part of a group of pipes very useful, but I only need that one.
 */
@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  private isString(value: any): value is string {
    return typeof value === 'string';
  }

  /**
   * The pipe tranform method
   * @param input if the content of this input is a string, return a string.
   * @param length if this field exist the input string will be cut this the number of characters of length.
   * @param suffix string to show when truncate.
   * @param preserve if there are an space at the final of the string delete it.
   */
  transform(input: any, length?: number, suffix?: string, preserve?: boolean): any {
    if (!this.isString(input)) {
      return input;
    }

    const size = !length ? input.length : length;

    if (input.length <= size) {
      return input;
    }

    preserve = preserve || false;
    suffix = suffix || '';
    let index = length;

    if (preserve) {
      if (input.indexOf(' ', length) === -1) {
        index = input.length;
      } else {
        index = input.indexOf(' ', length);
      }
    }

    return input.substring(0, index) + suffix;
  }
}

/**
 * Module for the pipe, to it could be used.
 */
@NgModule({
  declarations: [TruncatePipe],
  exports: [TruncatePipe],
})
export class NgTruncatePipeModule {}
