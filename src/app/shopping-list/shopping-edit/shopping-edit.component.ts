import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef
  @ViewChild('amountInput') amountInputRef: ElementRef
  @Output() itemAdded = new EventEmitter<{name: string, amount: number}>()

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    const name = this.nameInputRef.nativeElement.value
    const amount = this.amountInputRef.nativeElement.value
    const newItem = {name, amount}
    this.itemAdded.emit(newItem)
  }

}
