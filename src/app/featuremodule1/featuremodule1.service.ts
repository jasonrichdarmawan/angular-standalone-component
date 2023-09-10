import { Injectable } from '@angular/core';

@Injectable()
export class Featuremodule1Service {

  constructor() { }

  getName(): string {
    return "works!";
  }
}
