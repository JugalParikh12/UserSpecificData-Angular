import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isPopupVisible: boolean;
  isPopupVisible2: boolean;
  longText: any;
  titleCard: any
  dataa: any;
  title: any;
  newCard: addCard[] = [];
  show: boolean = true;
  ivalue: any
  searchText: any
  searched: string = "";
  localitem: any;
  index = localStorage.getItem('index')
  filteredCard: any;
  val:any

  constructor(private router: Router) {
    this.localitem = localStorage.getItem("newCard")
    this.newCard = JSON.parse(this.localitem)
    this.isPopupVisible = false;
    this.isPopupVisible2 = false;
  }

  ngOnInit(): void {
    if (this.newCard != null) {
      this.filteredCard = this.newCard.filter(res => res.userIndex === this.index)
      console.log(this.filteredCard)
    }
  }
  submit() {
    this.isPopupVisible = false;
    if (this.show == true && this.newCard == null) {
      this.newCard = [{
        dataa: this.longText,
        title: this.titleCard,
        userIndex: this.index,
        
      }]
    }
    else if (this.show == true) {
      this.newCard.push({
        dataa: this.longText,
        title: this.titleCard,
        userIndex: this.index,
        
      })
      
      this.longText = "";
      this.titleCard = ""
    }
    else {
      this.filteredCard[this.ivalue].dataa = this.longText
      this.filteredCard[this.ivalue].title = this.titleCard
      this.show = true
      this.longText = "";
      this.titleCard = ""
    }
    localStorage.setItem("newCard", JSON.stringify(this.newCard))
    if (this.newCard != null) {
      this.filteredCard = this.newCard.filter(res => res.userIndex === this.index)
      console.log(this.filteredCard)
    }
    
    


  }
  deleteData(i: any) {

    this.isPopupVisible = false
    this.isPopupVisible2 = !this.isPopupVisible2;
    this.val=this.newCard.findIndex(s => s.dataa== this.filteredCard[i].dataa && s.title== this.filteredCard[i].title && s.userIndex==this.filteredCard[i].userIndex)
  
    this.filteredCard.splice(i, 1)
    this.newCard.splice(this.val,1)
    localStorage.setItem("newCard", JSON.stringify(this.newCard))
    

  }


  togglePopup(): void {
    this.isPopupVisible = !this.isPopupVisible;
    this.longText = ""
    this.titleCard = ""
    this.show = true
  }
  toggleDelete(i: any) {
    this.ivalue = i;
    this.isPopupVisible = false;
    this.isPopupVisible2 = !this.isPopupVisible2;
    console.log(i)
  }

  toggleCard(i: any, show: any) {
    this.isPopupVisible = !this.isPopupVisible;
    this.ivalue = i;
    
    this.longText = this.filteredCard[i].dataa
    this.titleCard = this.filteredCard[i].title

    this.show = false
    console.log(i)
  }
  logout(pageName: string): void {
    this.router.navigate([`${pageName}`]);

  }
  searchEvent(e: any) {
    this.searched = e.event.currentTarget.value
  }

}
export class addCard {
  dataa: string = ""
  title: string = ""
  userIndex: any
}

