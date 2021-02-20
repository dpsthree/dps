import { Component } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent {
  dataSource = [
    {
      scenario: 'fetching data for display on page',
      source: 'HttpClient',
      destination: 'template',
      approach: 'resolve or async pipe'
    },
    {
      scenario: 'server side filtering of data table',
      source: 'HttpClient, FormControl',
      destination: 'template',
      approach: 'combineLatest + aync pipe'
    },
    {
      scenario: 'using Http to validate form input',
      source: 'HttpClient',
      destination: 'template',
      approach: 'return observable in custom async validator'
    },
    {
      scenario: 'API data is needed for two very different computations',
      source: 'HttpClient',
      destination: 'template',
      approach:
        'store http observable with .share() to a variable, create two different .pipe() computations from http result'
    },
    {
      scenario: 'combining results from multiple API calls',
      source: 'HttpClient',
      destination: 'template',
      approach: 'combineLatest + aync pipe'
    },
    {
      scenario: 'HTTP post, put, update and delete (with data refresh)',
      source: 'HttpClient, FormControl',
      destination: 'template',
      approach: 'switchmap + aync pipe'
    },
    {
      scenario: 'API results are needed in multiple spots in the same template',
      source: 'HttpClient',
      destination: 'template',
      approach: '*ngIf with async as or smart/view component pattern'
    },
    {
      scenario: 'displaying streaming data with websockets',
      source: 'manually created from RXJS',
      destination: 'template',
      approach: 'async pipe'
    },
    {
      scenario: 'performing auth lookup for routing',
      source: 'HttpClient',
      destination: 'canActivate',
      approach: 'return the observable'
    },
    {
      scenario: 'HTTP post, put, update and delete (with user notification)',
      source: 'HttpClient, FormControl',
      destination: 'modal or other notification system',
      approach: 'toPromise'
    },
    {
      scenario: 'fetching data from NgRx store',
      source: 'NgRx',
      destination: 'template',
      approach: 'async pipe'
    },
    {
      scenario: 'setting up effects in NgRx',
      source: 'Actions (usually)',
      destination: 'NgRx effects',
      approach: 'EffectsModule.run()'
    },
    {
      scenario: 'capturing user input in URL (navigating to new page)',
      source: 'FormControl',
      destination: 'URL',
      approach:
        'Don\'t forget that you can just ask FormControl for the current value'
    },
    {
      scenario: 'capturing user input in URL (query params on same page)',
      source: 'FormControl',
      destination: 'URL',
      approach: 'subscribe'
    },
    {
      scenario: 'setting initial form values from URL',
      source: 'ActivatedRoute',
      destination: 'FormControl.setValue',
      approach: 'subscribe'
    },
    {
      scenario: 'generating a form group based on HttpClient data',
      source: 'HttpClient',
      destination: 'new FormGroup()',
      approach: 'subscribe'
    },
    {
      scenario: 'data is needed by 3rd party library (d3 for example)',
      source: 'anywhere, but most likely HttpClient',
      destination: '3rd party API call',
      approach: 'subscribe'
    }
  ];
  displayedColumns = ['scenario', 'source', 'destination', 'approach'];
  constructor() {}
}
