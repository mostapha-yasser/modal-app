import { Component } from '@angular/core';
import { NumberHeaderComponent } from "../number-header/number-header.component";
import { FooterComponent } from "../footer/footer.component";
import { TableComponent } from "../table/table.component";

@Component({
  selector: 'app-number-parent',
  imports: [NumberHeaderComponent, FooterComponent, TableComponent],
  templateUrl: './number-parent.component.html',
  styleUrl: './number-parent.component.css'
})
export class NumberParentComponent {

}
