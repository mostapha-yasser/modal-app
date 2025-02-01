import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-number-header',
  imports: [NgClass],
  templateUrl: './number-header.component.html',
  styleUrl: './number-header.component.css',
})
export class NumberHeaderComponent {
  items: any[] = [
    {
      id: 1,
      icon: '',
      header: 'اسم البرتوكول',
      detail: 'فودافون مصر',
    },
    {
      id: 2,
      icon: 'Flag_of_Saudi_Arabia.svg',
      header: 'الدولة',
      detail: 'المملكة الاردنية الهاشمية ',
    },
    {
      id: 3,
      icon: 'insecticide.svg',
      header: 'العميل الحالى',
      detail: 'الشركة الا لمانية للابادة الحشرات',
    },
    {
      id: 4,
      icon: '',
      header: 'عدد الامتدادت',
      detail: '09',
    },
    {
      id: 5,
      icon: '',
      header: 'تاريخ اخر شحنة',
      detail: '2024/12/29',
    },
    {
      id: 6,
      icon: '',
      header: 'الرصيد الحالى',
      detail: '5000 ج.م',
    },
    {
      id: 7,
      icon: '',
      header: 'الرصيد المستخدم للعميل الحالى',
      detail: '5000 ج.م',
    },
    {
      id: 8,
      icon: '',
      header: 'الرصيد المستخدم للرقم  ككل',
      detail: '5000 ج.م',
    },
  ];
  index: any;
  isListOpen: boolean = false;
  toggleList() {
    this.isListOpen=!this.isListOpen
    console.log(this.isListOpen)

  }
}
