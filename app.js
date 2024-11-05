let rad = document.querySelectorAll('#rad12 input')
let rod = document.querySelector('#rad12')
let res = document.querySelector('#span')
let tb = document.querySelectorAll('#tb td')
let tb1 = document.querySelector('#tb')
let res1 = document.querySelector('#span1')
let arr = []
let arr1 = []
let y2=-1
let x2=-1
let i = 0
let j = 0
let x1 = 0
let y1 = 0
let x = 0
let y = 0
let xarr = ['a','b','c','d','e','f','g','h']
let chhh1 = 0
let ochi = 'w'
let ochi2 = 0
if(ochi == 'w') {ochi2 = 'b'}else{ochi2 = 'w'}
let rado= '0'
for(let red of rad){
  if(red.checked==true){rado=red.id}
}
rod.addEventListener('click', ()=> {
  for(let red of rad){
  if(red.checked==true){rado=red.id}
    
}
})

function black(){
    return 'background-color: #7a382e;'
}

function white(){
    return 'background-color: khaki;'
}

function color(){
 return 'url(images/пб.png)'
}
function color1(){
    return 'url(images/хч.png)'
   }
   function color2(){
    return 'url(images/сб.png)'
   }
   function color3(){
       return 'url(images/сч.png)'
      }
       function color4(){
    return 'url(images/вб.png)'
   }
   function color5(){
       return 'url(images/вч.png)'
      }
      function color6(){
 return 'url(images/бч.png)'
}
function color7(){
    return 'url(images/бб.png)'
   }
   function color8(){
    return 'url(images/кч.png)'
   }
   function color9(){
       return 'url(images/кб.png)'
      }
       function color10(){
    return 'url(images/фч.png)'
   }
   function color11(){
       return 'url(images/фб.png)'
      }

      function del(){
        return 'url()'
       }


let hClv = []
for(let elem of tb){
    arr1.push(elem)
    i++
if( i == 8){
    arr.push(arr1)
    arr1 = []
     i = 0
    }
 
}


let a = 0
let b = 0
let chC = 0
for (j = 0; j < 64; j++)
{
   
    if(chC == 0){
         arr[b][a].style =  white()
         chC = 1
         
    }else {
        arr[b][a].style = black()
        chC = 0
    }
        if(a<7){
            a++
         } else {
            a=0
            b++
            if(chC==1){
                chC=0
            }else {chC=1}
         }
}

if(ochi == 'w'){res1.innerHTML = 'Ход Белых'}
if(ochi == 'b'){res1.innerHTML = 'Ход Чёрных'}
arr[6][0].style.backgroundImage = color()
arr[6][0].id = arr[6][0].id + 'P' + 'w'

arr[6][1].style.backgroundImage = color()
arr[6][1].id = arr[6][1].id + 'P' + 'w'

arr[6][2].style.backgroundImage = color()
arr[6][2].id = arr[6][2].id + 'P' + 'w'

arr[6][3].style.backgroundImage = color()
arr[6][3].id = arr[6][3].id + 'P' + 'w'

arr[6][4].style.backgroundImage = color()
arr[6][4].id = arr[6][4].id + 'P' + 'w'

arr[6][5].style.backgroundImage = color()
arr[6][5].id = arr[6][5].id + 'P' + 'w'

arr[6][6].style.backgroundImage = color()
arr[6][6].id = arr[6][6].id + 'P' + 'w'

arr[6][7].style.backgroundImage = color()
arr[6][7].id = arr[6][7].id + 'P' + 'w'

arr[7][2].style.backgroundImage = color2()
arr[7][2].id = arr[7][2].id + 'S' + 'w'

arr[7][5].style.backgroundImage = color2()
arr[7][5].id = arr[7][5].id + 'S' + 'w'

arr[7][3].style.backgroundImage = color11()
arr[7][3].id = arr[7][3].id + 'F' + 'w'

arr[7][4].style.backgroundImage = color9()
arr[7][4].id = arr[7][4].id + 'K' + 'w'

arr[7][1].style.backgroundImage = color4()
arr[7][1].id = arr[7][1].id + 'L' + 'w'

arr[7][6].style.backgroundImage = color4()
arr[7][6].id = arr[7][6].id + 'L' + 'w'

arr[7][7].style.backgroundImage = color7()
arr[7][7].id = arr[7][7].id + 'B' + 'w'

arr[7][0].style.backgroundImage = color7()
arr[7][0].id = arr[7][0].id + 'B' + 'w'



arr[1][0].style.backgroundImage = color1()
arr[1][0].id = arr[1][0].id + 'P' + 'b'

arr[1][1].style.backgroundImage = color1()
arr[1][1].id = arr[1][1].id + 'P' + 'b'

arr[1][2].style.backgroundImage = color1()
arr[1][2].id = arr[1][2].id + 'P' + 'b'

arr[1][3].style.backgroundImage = color1()
arr[1][3].id = arr[1][3].id + 'P' + 'b'

arr[1][4].style.backgroundImage = color1()
arr[1][4].id = arr[1][4].id + 'P' + 'b'

arr[1][5].style.backgroundImage = color1()
arr[1][5].id = arr[1][5].id + 'P' + 'b'

arr[1][6].style.backgroundImage = color1()
arr[1][6].id = arr[1][6].id + 'P' + 'b'

arr[1][7].style.backgroundImage = color1()
arr[1][7].id = arr[1][7].id + 'P' + 'b'

arr[0][2].style.backgroundImage = color3()
arr[0][2].id = arr[0][2].id + 'S' + 'b'

arr[0][5].style.backgroundImage = color3()
arr[0][5].id = arr[0][5].id + 'S' + 'b'

arr[0][3].style.backgroundImage = color10()
arr[0][3].id = arr[0][3].id + 'F' + 'b'

arr[0][4].style.backgroundImage = color8()
arr[0][4].id = arr[0][4].id + 'K' + 'b'

arr[0][1].style.backgroundImage = color5()
arr[0][1].id = arr[0][1].id + 'L' + 'b'

arr[0][6].style.backgroundImage = color5()
arr[0][6].id = arr[0][6].id + 'L' + 'b'

arr[0][7].style.backgroundImage = color6()
arr[0][7].id = arr[0][7].id + 'B' + 'b'

arr[0][0].style.backgroundImage = color6()
arr[0][0].id = arr[0][0].id + 'B' + 'b'

let hodys = {
    L:[['+2+1'],['+2-1'],['-2+1'],['-2-1'], ['+1-2'], ['+1+2'],['-1-2'], ['-1+2']],
    S:[['+1+1','+2+2','+3+3','+4+4','+5+5','+6+6','+7+7'],['-1-1','-2-2','-3-3','-4-4','-5-5','-6-6','-7-7'],['+1-1','+2-2','+3-3','+4-4','+5-5','+6-6','+7-7'],['-1+1','-2+2','-3+3','-4+4','-5+5','-6+6','-7+7']],
    K:[['+1+1'],['-1-1'],['+1-1'],['-1+1'],['+0-1'],['+0+1'],['+1+0'],['-1+0']],
    F:[['+1+0','+2+0','+3+0','+4+0','+5+0','+6+0','+7+0'],['-1+0','-2+0','-3+0','-4+0','-5+0','-6+0','-7+0'],['-0+1','-0+2','-0+3','-0+4','-0+5','-0+6','-0+7'],['-0-1','-0-2','-0-3','-0-4','-0-5','-0-6','-0-7'],['+1+1','+2+2','+3+3','+4+4','+5+5','+6+6','+7+7'],['-1-1','-2-2','-3-3','-4-4','-5-5','-6-6','-7-7'],['+1-1','+2-2','+3-3','+4-4','+5-5','+6-6','+7-7'],['-1+1','-2+2','-3+3','-4+4','-5+5','-6+6','-7+7']],
    B:[['+1+0','+2+0','+3+0','+4+0','+5+0','+6+0','+7+0'],['-1+0','-2+0','-3+0','-4+0','-5+0','-6+0','-7+0'],['-0+1','-0+2','-0+3','-0+4','-0+5','-0+6','-0+7'],['-0-1','-0-2','-0-3','-0-4','-0-5','-0-6','-0-7']],
    P:[['+1+0'],['+1-1'],['+1+1']['+2+0']]
}
let h1 = 0
let h2 = 0
let hC = 0









tb1.addEventListener('click', (e) => {

if(e.target.id[2] == 'L' & e.target.id[3] == ochi)
    {hC = hodys.L
     chhh1 = 'L'
      
    }
if(e.target.id[2] == 'B' & e.target.id[3] == ochi)
    {hC = hodys.B
     chhh1 = 'B'
      
    }
if(e.target.id[2] == 'S' & e.target.id[3] == ochi)
    {hC = hodys.S
     chhh1 = 'S'
         
    }
if(e.target.id[2] == 'F' & e.target.id[3] == ochi)
    {hC = hodys.F
     chhh1 = 'F'
    
    }
if(e.target.id[2] == 'K' & e.target.id[3] == ochi)
    {hC = hodys.K
     chhh1 = 'K'
     
    }
if(e.target.id[2] == 'P' & e.target.id[3] == ochi)
    {hC = hodys.P
     chhh1 = 'P'
         
    }          


if(chhh1 != 0 & e.target.id[2] != undefined & e.target.id[3] == ochi) {
   
     if(e.target.id[3] == ochi){
    y1= e.target.id[1]*1
    x1 = (xarr.indexOf( e.target.id[0]) + 1 )*1
    hClv=[]
    if(e.target.id[2] != 'P'){
for(h1=0; h1 < hC.length; h1++){
    for(h2 = 0; h2 < hC[h1].length; h2++){
    if( ((hC[h1])[h2])[0] == '+') {y = (y1*1  + ((hC[h1])[h2])[1]*1)} 
    else if ( ((hC[h1])[h2])[0] == '-') {y = (y1*1  - ((hC[h1])[h2])[1]*1)}
    
    if( (((hC[h1])[h2])[2]) == '+') {x = (x1*1  + ((hC[h1])[h2])[3]*1)} 
   else if ( ((hC[h1])[h2])[2] == '-') {x = (x1*1  - ((hC[h1])[h2])[3]*1)}
 
   if(x>8 || x < 1 || y > 8 || y<1 ){ 
break
}else if(arr[8-y][x-1].id[3] == ochi2){
    hClv.push(arr[8-y][x-1].id)
    break
}else if(arr[8-y][x-1].id[3] == ochi){
break
}else if(arr[8-y][x-1].id[2] == undefined){

    hClv.push(arr[8-y][x-1].id)
  
    }}
}}else{
    
     if(x1>8 || x1 < 1 || y1 > 8 || y1<1 ){}else{
 y1*1
 x1*1
 if(e.target.id[3] == 'w'){if(y1 == 2) {hClv.push(arr[8-y1-2][x1-1].id)}
if(x1 != 1) {if(arr[8-y1*1-1][x1*1-2].id[3] == ochi2) {hClv.push(arr[8-y1*1-1][x1*1-2].id)}}
 

 if(x1 != 8){ if(arr[8-y1*1-1][x1*1].id[3] == ochi2 ) {hClv.push(arr[8-y1*1-1][x1*1].id)}}  

  
  if(arr[8-y1*1-1][x1*1-1].id[2] == undefined) {hClv.push(arr[8-y1*1-1][x1*1-1].id)}}



 if(e.target.id[3] == 'b'){if(y1 == 7) {hClv.push(arr[8-y1+2][x1-1].id)}

 if(x1 != 1){if(arr[8-y1*1+1][x1*1-2].id[3] == ochi2) {hClv.push(arr[8-y1*1+1][x1*1-2].id)}}
 

if(x1 != 8 ){ if(arr[8-y1*1+1][x1*1].id[3] == ochi2 ) {hClv.push(arr[8-y1*1+1][x1*1].id)}}


if(arr[8-y1*1+1][x1*1-1].id[2] == undefined ) {hClv.push(arr[8-y1*1+1][x1*1-1].id)}}


}}}
if(x2 != -1 & y2 != -1 )
    arr[y2][x2].style.outline = ''
   if(hClv.length != 0) {arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].style.outline = '0.5vw solid green'}else{arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].style.outline = '0.5vw solid red'}
    y2 = 8-e.target.id[1]
    x2 = xarr.indexOf(e.target.id[0])

    for(let gh = 0; gh < hClv.length; gh++){
    if( arr[8 -(hClv[gh])[1]*1][xarr.indexOf((hClv[gh])[0])].id[3] == ochi2){arr[8 -(hClv[gh])[1]*1][xarr.indexOf((hClv[gh])[0])].style.outline = '0.5vw solid purple'}else{arr[8 -(hClv[gh])[1]*1][xarr.indexOf((hClv[gh])[0])].style.outline = '0.5vw solid blue'}
    
}
}

if(hClv.includes(e.target.id))
    {
        for(let gh = 0; gh < hClv.length; gh++){
       arr[8 -(hClv[gh])[1]*1][xarr.indexOf((hClv[gh])[0])].style.outline = ''}
            arr[y2][x2].style.outline = ''
          
    
    arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].id = arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].id[0] + arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].id[1] + chhh1 + ochi
    if(e.target.id[2]=='L')if(e.target.id[3]=='w'){{arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].style.backgroundImage = color4()}}else{{arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].style.backgroundImage = color5()}}
    if(e.target.id[2]=='S')if(e.target.id[3]=='w'){{arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].style.backgroundImage = color2()}}else{{arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].style.backgroundImage = color3()}}
    if(e.target.id[2]=='F')if(e.target.id[3]=='w'){{arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].style.backgroundImage = color11()}}else{{arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].style.backgroundImage = color10()}}
    if(e.target.id[2]=='K')if(e.target.id[3]=='w'){{arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].style.backgroundImage = color9()}}else{{arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].style.backgroundImage = color8()}}
    if(e.target.id[2]=='B')if(e.target.id[3]=='w'){{arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].style.backgroundImage = color7()}}else{{arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].style.backgroundImage = color6()}}
    if(e.target.id[2]=='P')if(e.target.id[3]=='w'){{arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].style.backgroundImage = color()}}else{{arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].style.backgroundImage = color1()}}
    arr[8-y1][x1-1].style.backgroundImage = del()
    arr[8-y1][x1-1].id = arr[8-y1][x1-1].id[0] + arr[8-y1][x1-1].id[1]
    chhh1 = 0
    hClv = []
      if(e.target.id[2]=='P'){
        if(e.target.id[3]=='w' & 8 - e.target.id[1] == 0){
            arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].id = arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].id[0] + arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].id[1] + rado + ochi
          if(rado == 'F'){arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].style.backgroundImage = color11()}
          if(rado == 'S'){arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].style.backgroundImage = color2()}
          if(rado == 'L'){arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].style.backgroundImage = color4()}
          if(rado == 'B'){arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].style.backgroundImage = color7()}
        
        }else if(e.target.id[3]=='b' & 8 - e.target.id[1] == 7){
            arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].id = arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].id[0] + arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].id[1] + rado + ochi
          if(rado == 'F'){arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].style.backgroundImage = color10()}
          if(rado == 'S'){arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].style.backgroundImage = color3()}
          if(rado == 'L'){arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].style.backgroundImage = color5()}
          if(rado == 'B'){arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].style.backgroundImage = color6()}
        
        }
        
      }
    if(ochi == 'w'){ochi = 'b', ochi2 = 'w'}else {ochi = 'w', ochi2 = 'b'}
    
    }
if(ochi == 'w'){res1.innerHTML = 'Ход Белых'}
if(ochi == 'b'){res1.innerHTML = 'Ход Чёрных'}
})
