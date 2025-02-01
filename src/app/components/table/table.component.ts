import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import clientData from './clientData.json';
@Component({
  selector: 'app-table',
  imports: [NgIf,NgFor],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  data: {
    client: string;
    clientIcon: string;
    appointmentDate: string;
    dateOfCancellationOfAppointment: string;
    responsibleForOppointment: string;
    localMinutes: string;
    internationalMinutes: string;
    amount: string;
  }[]=clientData;
  selectedItem: any = null;
  showModal = false;
  currentPage = 1;
  itemsPerPage = 7;

  get paginatedData(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.data.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.data.length / this.itemsPerPage);
  }

  get pageNumbers(): number[] {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  openModal(item: any): void {
    this.selectedItem = item;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedItem = null;
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  updatePagination(event: Event): void {
    this.itemsPerPage = Number((event.target as HTMLSelectElement).value);
    this.currentPage = 1;
  }

}
