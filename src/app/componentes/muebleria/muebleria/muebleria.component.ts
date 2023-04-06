import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-muebleria',
  templateUrl: './muebleria.component.html',
  styleUrls: ['./muebleria.component.css']
})
export class MuebleriaComponent implements OnInit {

  navChangeReponsive: boolean = false;

  constructor(public router: Router) { }

  LISTA_IMAGENES:any = ['camarote1.jpg', 'camarote2.jpg', 'camarote3.jpg'];

  ngOnInit(): void {
  }

  irHome(){
    this.router.navigate(['']);
  }

  abrirNav(){
    let nav1:HTMLCollectionOf<Element> = document.getElementsByClassName("nav-menu");
    if(this.navChangeReponsive == false){
      nav1[0].classList.add('navChangeReponsive');
      this.navChangeReponsive = true
    }else{
      nav1[0].classList.remove('navChangeReponsive');
      this.navChangeReponsive = false
    }
    
  }

  i:number = 0;
  next(){
    let nav1:HTMLCollectionOf<Element> = document.getElementsByClassName("cardsScroll");
    let nav2:HTMLCollectionOf<Element> = document.getElementsByClassName("cardScroll");
    if(nav1[0].scrollLeft<nav2[0].clientWidth*(nav2.length-2)){
      nav1[0].classList.remove('hiddenMe');
      nav1[0].classList.remove('showMe');
      setTimeout(()=>{
        nav1[0].classList.add('showMe');
        nav1[0].scrollLeft+=300;
        nav1[0].scrollTo(nav1[0].scrollLeft,0);
      },300)
      setTimeout(()=>{
        nav1[0].classList.add('hiddenMe');
      },600)
    }
  }

  back(){
      let nav1:HTMLCollectionOf<Element> = document.getElementsByClassName("cardsScroll");
      if(nav1[0].scrollLeft>0){
        nav1[0].classList.remove('hiddenMe');
        nav1[0].classList.remove('showMe');
      setTimeout(()=>{
        nav1[0].classList.add('showMe');
        nav1[0].scrollLeft-=300;
        nav1[0].scrollTo(nav1[0].scrollLeft,0);
      },300)
      setTimeout(()=>{
        nav1[0].classList.add('hiddenMe');
      },600)
      }
  }

  sombraCard(event:any){
    let container_global: HTMLElement  = <HTMLElement>document.getElementById('container_nora');
    //console.log(container_global.clientWidth);
    if(container_global.clientWidth>600){
      let id = event.target.id
    
    let nav1: HTMLElement  = <HTMLElement>document.getElementById(id);
    let height = nav1.clientHeight;
    let width = nav1.clientWidth;

    nav1.addEventListener('mousemove', (evt:any) =>{
    
      const {layerX, layerY} = evt
      
      const yRotation = ((layerX - width/2 )/width)*20

      const xRotation = ((layerY - height/2 )/height)*20

      const String = `
        perspective(500px)
        scale(1.1)
        rotate(${xRotation}deg)
        rotate(${yRotation}deg)
      `
      nav1.style.transform = String;
    });

    nav1.addEventListener('mouseout', (evt:any) =>{
      
      const {layerX, layerY} = evt
      
      const yRotation = ((layerX - width/2 )/width)*20

      const xRotation = ((layerY - height/2 )/height)*20

      const String = `
      perspective(500px)
      scale(1)
      rotate(0)
      rotate(0)
      `
      nav1.style.transform = String;
    });
    }
  }

}
