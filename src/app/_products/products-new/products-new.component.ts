import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-new',
  templateUrl: './products-new.component.html',
  styleUrls: ['./products-new.component.scss']
})
export class ProductsNewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  checkNumber(event) {
    //this.value = this.value.replace(/[^0-9\.]/g,'');
    console.log(event.keyCode)
      if (event.keyCode != 46 && (event.keyCode < 48 || event.keyCode > 57)) {
          event.preventDefault();
      }
    /*if (event.key === "Enter") {
      console.log(event);
    }*/
  }

}
