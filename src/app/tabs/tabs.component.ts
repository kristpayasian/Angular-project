import { Component } from '@angular/core';
import { tab } from '../tab';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tabs',
  standalone:true,
  imports: [RouterLink,RouterLinkActive,MatIconModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {

}
