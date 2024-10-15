import { Component } from '@angular/core';
import { HttpClientService } from '../../service/http-client.service';
import { NgFor, KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-triggerer',
  standalone: true,
  imports: [NgFor, KeyValuePipe],
  templateUrl: './triggerer.component.html',
  styleUrl: './triggerer.component.css',
  providers:[HttpClientService]
})
export class TriggererComponent {

  corrIds: any

  constructor(private httpClientService:HttpClientService){}

  envs = ["evd","evt","canary","aws"]
  dags = ["csv","wellbore","document","shapefile"]

  correlationIds = {
    "evd": {
      "csv": "evd",
      "wellbore": "1243",
      "document": "1432",
      "shapefile": "2341"
    },
    "evt": {
      "csv": "evt",
      "wellbore": "1243",
      "document": "1432",
      "shapefile": "2341"
    },
    "canary": {
      "csv": "canary",
      "wellbore": "1243",
      "document": "1432",
      "shapefile": "2341"
    },
    "aws": {
      "csv": "aws",
      "wellbore": "1243",
      "document": "1432",
      "shapefile": "2341"
    }

  }

  testMap = new Map<string,string>([["evd","1"],["evt","2"],
    ["canary","3"],["aws","4"]]);
  
    temp = this.httpClientService.getCorrelationIds().subscribe(data=>
      {
        console.log(data['evd-ltops'].csv_parser_wf_status_gsm);
      return this.corrIds = data['evd-ltops'].csv_parser_wf_status_gsm;
    });
    temp2 = this.httpClientService.getResponse().subscribe(data=>
      {
        console.log(data);});
}
