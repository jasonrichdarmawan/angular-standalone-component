import { Component, OnInit } from '@angular/core';
import { Featuremodule1Service } from './featuremodule1.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  providers: [Featuremodule1Service],
  selector: 'app-featuremodule1',
  templateUrl: './featuremodule1.component.html',
  styleUrls: ['./featuremodule1.component.scss']
})
export class Featuremodule1Component implements OnInit {
  name!: Observable<String>;

  constructor(private featureModuleService: Featuremodule1Service) { }

  ngOnInit(): void {
    this.name = new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.next("works!");
        subscriber.complete();
      }, 1000);
    })
  }

  getName(): string {
    return this.featureModuleService.getName();
  }
}
