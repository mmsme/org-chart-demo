import { Component } from '@angular/core';
import { employees } from './data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data = [...employees];
  title = 'orgChartTask';
}
