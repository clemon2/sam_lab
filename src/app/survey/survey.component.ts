import { Component, OnInit } from '@angular/core';
export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  constructor() { }

      ngOnInit(): void {
      }

      checked = false;
      indeterminate = false;
      labelPosition: 'before' | 'after' = 'after';
      disabled = false;



    folders: Section[] = [
        {
          name: 'Photos',
          updated: new Date('4/10/22'),
        },
        {
          name: 'Recipes',
          updated: new Date('4/9/22'),
        },
        {
          name: 'Work',
          updated: new Date('3/28/22'),
        },
      ];
      notes: Section[] = [
        {
          name: 'Vacation Itinerary',
          updated: new Date('2/20/21'),
        },
        {
          name: 'Kitchen Remodel',
          updated: new Date('1/18/21'),
        },
      ];
    }



