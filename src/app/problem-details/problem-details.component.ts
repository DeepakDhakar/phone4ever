import { Component, OnInit } from '@angular/core';
import { mobileBrand, mobileModels, issues } from './detailJson/detail_json';

@Component({
  selector: 'app-problem-details',
  templateUrl: './problem-details.component.html',
  styleUrls: ['./problem-details.component.scss'],
})
export class ProblemDetailsComponent implements OnInit {
  phones = mobileBrand;
  allModels = mobileModels;
  defaultIssues = issues;
  selectedModels= [];
  ngOnInit(){
  }
  brandSelected(event){
    let data = this.allModels.filter(obj =>obj.B_id == event)
    this.selectedModels = data[0].models
  }
}
