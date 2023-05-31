
async function NewYork () {

  document.getElementById('CityOne').innerHTML = 'New York'

  const response = await fetch('https://timeapi.io/api/Time/current/zone?timeZone=america/new_york')
  const data = await response.text()
  console.log(data)

  const time = data.slice(data.indexOf('time') + 7, data.indexOf('time') + 12)
  document.getElementsByClassName("tid").innerHTML = time
}

async function Budapest () {
  const response = await fetch('https://timeapi.io/api/Time/current/zone?timeZone=Europe/Budapest')
  const data = await response.text()
  console.log(data)

  const time = data.slice(data.indexOf('time') + 7, data.indexOf('time') + 12)
  document.getElementsByClassName('tid').innerHTML = time
}

async function Seoul () {
  const response = await fetch('https://timeapi.io/api/Time/current/zone?timeZone=Asia/Seoul')
  const data = await response.text()
  console.log(data)

  const time = data.slice(data.indexOf('time') + 7, data.indexOf('time') + 12)
  document.getElementsByClassName('tid').innerHTML = time
}

async function Lissabon () {
  const response = await fetch('https://timeapi.io/api/Time/current/zone?timeZone=Europe/Lisbon')
  const data = await response.text()
  console.log(data)

  const time = data.slice(data.indexOf('time') + 7, data.indexOf('time') + 12)
  document.getElementsByClassName('tid').innerHTML = time
}

const btnone = document.querySelector('#buttonOne')

btnone.onclick = function () {
  const x = document.getElementById('CityChoiceOne').value
  document.getElementById('CityOne').innerHTML = x



  if (x === 'NewYork') {
   
    NewYork()
    
  }

  if (x === 'Budapest') {
    Budapest()
  }

  if (x === 'Seoul') {
    Seoul()
  }

  if (x === 'Lissabon') {
    Lissabon()
  }

}
    const btntwo = document.querySelector('#buttonTwo')

    btntwo.onclick = function () {
      const x = document.getElementById('CityChoiceTwo').value
      document.getElementById('CityTwo').innerHTML = x
  


  if (x === 'NewYork') {
    
    NewYork()
  }

  if (x === 'Budapest') {
    Budapest()
  }

  if (x === 'Seoul') {
    Seoul()
  }

  if (x === 'Lissabon') {
    Lissabon()
  }
  }


  const btnthree = document.querySelector('#buttonThree')

btnthree.onclick = function () {
  const x = document.getElementById('CityChoiceThree').value
  document.getElementById('CityThree').innerHTML = x



  if (x === 'NewYork') {
    
    NewYork()
  }

  if (x === 'Budapest') {
    Budapest()
  }

  if (x === 'Seoul') {
    Seoul()
  }

  if (x === 'Lissabon') {
    Lissabon()
  }
}

const btnfour = document.querySelector('#buttonFour')

btnfour.onclick = function () {
  const x = document.getElementById('CityChoiceFour').value
  document.getElementById('CityFour').innerHTML = x

 
  if (x === 'NewYork') {
    
    NewYork()
  }

  if (x === 'Budapest') {
    Budapest()
  }

  if (x === 'Seoul') {
    Seoul()
  }

  if (x === 'Lissabon') {
    Lissabon()
  }
}


// const btntwo = document.querySelector('#btntwo');

// btntwo.onclick = function(){

//         var x = document.getElementById("citiestwo").value;
//          document.getElementById("stadtwo").innerHTML = x;

//     }

// const btnthree = document.querySelector('#btnthree');

// btnthree.onclick = function(){

//         var x = document.getElementById("citiesthree").value;
//          document.getElementById("stadtre").innerHTML = x;

//     }

// const btnfour = document.querySelector('#btnfour');

// btnfour.onclick = function(){

//         var x = document.getElementById("citiesfour").value;
//          document.getElementById("stadfyra").innerHTML = x;

//     }