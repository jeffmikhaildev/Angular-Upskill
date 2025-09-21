import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  imports: [FormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css',
})
export class TodolistComponent {
  task = '';
  editingId: number | null = null; // track if we’re editing

  taskList: { id: number; name: string }[] = [];

  constructor() {
    const savedTasks = localStorage.getItem('taskList');

    if (savedTasks) {
      this.taskList = JSON.parse(savedTasks);
    }
  }

  addTask() {
    if (!this.task.trim()) return;

    if (this.editingId) {
      //  Update existing task
      const taskToEdit = this.taskList.find((t) => t.id === this.editingId);

      if (taskToEdit) {
        taskToEdit.name = this.task;
      }

      this.editingId = null; // reset editing mode
    } else {
      //  Add new task
      this.taskList.push({
        id: this.taskList.length + 1,
        name: this.task,
      });
    }

    this.saveTasks();

    this.task = ''; // clear input
  }

  deleteTask(id: number) {
    const confirmDelete = confirm('Are you sure you want to delete this task?');
    if (confirmDelete) {
      this.taskList = this.taskList.filter((task) => task.id !== id);

      this.saveTasks();
    }
  }

  editTask(id: number) {
    const task = this.taskList.find((task) => task.id === id);

    if (task) {
      this.task = task.name; // put text in input
      this.editingId = task.id; // mark which one we’re editing
    }
  }

  private saveTasks() {
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
  }

  // *** for dynamic styling
  color: string = 'magenta';
  smallFont: string = '20px';
  largeFont: string = '30px';
  zoom: boolean = true;

  toggleZoom() {
    this.zoom = !this.zoom;
  }
}
