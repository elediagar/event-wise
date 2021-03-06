import { Component, OnInit } from '@angular/core';
import * as $ from 'jQuery';


$(window).on('scroll', function () {
  if ($(window).scrollTop() > 20) {
    $('nav').removeClass('bg-light');
    $('nav').addClass('bg-dark');
    $('nav').addClass('txt-dark');
    $('.navbar .navbar-brand img').attr('src', 'assets/img/logo-400x55-white.png');
  } else {
    $('nav').removeClass('bg-dark');
    $('nav').addClass('bg-light');
    $('nav').removeClass('txt-dark');
  }

  if ($(window).scrollTop() < 20) {
    $('.navbar .navbar-brand img').attr('src', 'assets/img/logo-400x55.png');
  }
})

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
