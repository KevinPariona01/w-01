import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  navChangeReponsive: boolean = false;

  constructor() { }

  ngOnInit(): void {
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
        nav1[0].scrollLeft+=400;
        nav1[0].scrollTo(nav1[0].scrollLeft,0);
      },300)
      setTimeout(()=>{
        nav1[0].classList.add('hiddenMe');
      },600)
      
    }else{
      console.log(this.i);
      
    }
    
  }
  back(){
      let nav1:HTMLCollectionOf<Element> = document.getElementsByClassName("cardsScroll");
      if(nav1[0].scrollLeft>0){
        nav1[0].classList.remove('hiddenMe');
      nav1[0].classList.remove('showMe');
      setTimeout(()=>{
        nav1[0].classList.add('showMe');
        nav1[0].scrollLeft-=400;
        nav1[0].scrollTo(nav1[0].scrollLeft,0);
      },300)
      setTimeout(()=>{
        nav1[0].classList.add('hiddenMe');
      },600)
      }
  }

  sombraCard(event:any){
    /* console.log("Este es el evento : ", event);
    console.log("Este es el evento2 : ", event.target.id );
    console.log("Este es el evento2 : ", event.target.id ); */
    let id = event.target.id
    
    let nav1: HTMLElement  = <HTMLElement>document.getElementById(id);
    let height = nav1.clientHeight;
    let width = nav1.clientWidth;
    //console.log("a" + event.x);

    nav1.addEventListener('mousemove', (evt:any) =>{
      //console.log(nav1);
      //console.log(evt);
      
    
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
      //console.log(nav1);
      //console.log(evt);
      
    
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
