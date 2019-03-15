import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',action:''},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',action:''},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',action:''},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',action:''},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',action:''},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',action:''},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',action:''},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',action:''},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',action:''},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',action:''},
];

@Component({
  selector: 'app-products-index',
  templateUrl: './products-index.component.html',
  styleUrls: ['./products-index.component.scss']
})
export class ProductsIndexComponent implements OnInit {

  displayedColumns: string[] = ['name', 'weight', 'symbol', 'position','action'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: PeriodicElement[] = ELEMENT_DATA;

  addColumn() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }

  shuffle() {
    let currentIndex = this.columnsToDisplay.length;
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Swap
      let temp = this.columnsToDisplay[currentIndex];
      this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
      this.columnsToDisplay[randomIndex] = temp;
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
