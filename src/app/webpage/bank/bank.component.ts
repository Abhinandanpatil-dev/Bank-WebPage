import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent {
  @ViewChild('navbar') navList!: ElementRef<any>;

  togglenavbar(): void {
    console.log('vertical navbar', this);

    const toggleNav: any = document.getElementById('navbar');

    if (toggleNav?.style.display !== 'flex') {
      toggleNav.style.display = 'flex';
      console.log('true', toggleNav.style.display);
    } else {
      toggleNav.style.display = 'none';
      console.log('false===>', toggleNav.style.display);
    }

    // console.log('wasuup==> ', toggleNav.style.display)

  }
  btnSign=false

  btnClick(){
  this.btnSign=!this.btnSign;
  console.log(this.btnSign)
  }
  ngAfterViewInit() { }

}
