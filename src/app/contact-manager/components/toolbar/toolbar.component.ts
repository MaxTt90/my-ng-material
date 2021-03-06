import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatSnackBar, SimpleSnackBar, MatSnackBarRef } from '@angular/material';
import { NewContactDialogComponent } from '../new-contact-dialog/new-contact-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();
  @Output() toggleTheme = new EventEmitter<void>();
  @Output() toggleDir = new EventEmitter<void>();

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
  }

  openSnackBar(message: string, action: string): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration: 5000 // 5 seconds
    });
  }

  openAddContactDialog(): void {
    const dialogRef = this.dialog.open(NewContactDialogComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log('The dialog was closed.', res);

      if (res) {
        this.openSnackBar('Contact added', 'Navigate')
        .onAction().subscribe(() => {
          this.router.navigate(['/contactmanager', res.id]);
        });
      }
    });
  }
}
