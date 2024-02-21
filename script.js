var input = document.querySelector('input')

var data = [
  {
    name: "amy",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8fDI%3D",
    age: 22,
  },
  {
    name: "gina",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDI%3D",
    age: 28,
  },
  {
    name: "sally",
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDI%3D",
    age: 25,
  },
  {
    name: "robert",
    src: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8fDI%3D",
    age: 42,
  },
  {
    name: "john",
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDI%3D",
    age: 36,
  },
  {
    name: "amyliza",
    src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8fDI%3D",
    age: 30,
  },
  {
    name: "johnny",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXR8ZW58MHx8MHx8fDI%3D",
    age: 38,
  },
  {
    name: "sarah",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDI%3D",
    age: 32,
  },
];

var pers = "";
data.forEach(function (elem) {
  pers += `<div class="person">
    <div class="img">
      <img src="${elem.src}" alt="fem">
    </div>
    <h4> ${elem.name} </h4>
    <h6>Age : ${elem.age}</h6>
  </div>`;
});

document.querySelector(".people").innerHTML = pers;

input.addEventListener('input',function(){
    var matching = data.filter(function(e){
        return e.name.startsWith(input.value)
    })
    var newusers = '';
    matching.forEach(function (elem) {
        newusers += `<div class="person">
          <div class="img">
            <img src="${elem.src}" alt="fem">
          </div>
          <h4> ${elem.name} </h4>
          <h6>Age : ${elem.age}</h6>
        </div>`;
      });
      
      document.querySelector(".people").innerHTML = newusers;
})