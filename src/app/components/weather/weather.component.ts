import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiCallService } from './../../api-call.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherData:any;
  public weatherSearchForm:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private apiCallService:ApiCallService) { }

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location:['']
    })
  }
onSubmit(formValues) {
  console.log(formValues);
  this.apiCallService.getWeather(formValues.location).subscribe(data=>
    {
      this.weatherData = data;
      console.log(data)
      console.log(this.weatherData);
    })


  //we can access this formValues by 
  //formValues.location

  }

}
