import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jQuery';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


$(window).on('scroll', function () {
  if ($(window).scrollTop() > 20) {
    $('nav').removeClass('bg-dark');
    $('nav').addClass('bg-light');
    $('nav').removeClass('txt-light');
    $('.navbar .navbar-brand img').attr('src', 'assets/img/logo-400x55.png');
  } else {
    $('nav').removeClass('bg-light');
    $('nav').addClass('bg-dark');
    $('nav').addClass('txt-light');
  }

  if ($(window).scrollTop() < 20) {
    $('.navbar .navbar-brand img').attr('src', 'assets/img/logo-400x55-white.png');
  }
})

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})



export class HeaderComponent implements OnInit {

  show: boolean = true;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }


  ngOnInit() {
    this.userService.getlogOut$().subscribe(logout => {
      console.log('probando');

    })
  }

  ngDoCheck() {
    if (localStorage.getItem('token_event')) {
      this.show = false
    } else {
      this.show = true
    }
  }




  isCollapse = true;   // guardamos el valor
  toggleState() { // manejador del evento
    this.isCollapse = !this.isCollapse
  }
}


