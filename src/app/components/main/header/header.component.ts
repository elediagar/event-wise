import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jQuery';


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

  faCoffee = faCoffee;

  constructor() { }

  ngOnInit(): void {
  }

}
