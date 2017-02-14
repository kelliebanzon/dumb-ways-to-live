 function init() {
  // Get a reference to our touch-sensitive element
  var touchzone = document.getElementById("touchzone");
  // Add an event handler for the touchstart event
  touchzone.addEventListener("touchstart", touchHandler, false);
}

function touchHandler(event) {
  // Get a reference to our coordinates div
  var coords = document.getElementById("coords");
  // Write the coordinates of the touch to the div
  coords.innerHTML = 'x: ' + event.touches[0].pageX + ', y: ' + event.touches[0].pageY;
}

var mSalary = 3;
var wSalary = 1;

var arrow = document.getElementById("arrow");
  arrow.style.visibility = "hidden";

function levelComplete(){
  if (mSalary === 5){
    if (mSalary === wSalary){
      console.log('Level Completed');
      arrow.style.visibility = "visible";
    }
  }
  if (mSalary != wSalary){
    arrow.style.visibility = "hidden";
  }
}

var draggable = document.getElementById('draggable');
  var xInitial = 0;
  var xFinal = 0;
  draggable.addEventListener('touchstart', function(event){
    var rect = draggable.getBoundingClientRect();
    xInitial = rect.left;
  }, false);
  draggable.addEventListener('touchmove', function(event) {
    var touch = event.targetTouches[0];

    // Place element where the finger is
    draggable.style.left = touch.pageX-32 + 'px';
    draggable.style.top = touch.pageY-20 + 'px';
    event.preventDefault();
  }, false);
  draggable.addEventListener('touchend', function(event){
    var rect = draggable.getBoundingClientRect();
    xFinal = rect.left;
    if (xFinal < 382) {
      mSalary = mSalary + 1;
      if (xInitial < 382){
        mSalary = mSalary -1;
      }
      else if (xInitial > 398){
        wSalary = wSalary - 1;
      }
    }
    else if (xFinal > 398){
      wSalary = wSalary + 1;
      if (xInitial < 382){
        mSalary = mSalary -1;
      }
      else if (xInitial > 398){
        wSalary = wSalary - 1;
      }
    }
    console.log('mSalary = ' + mSalary, 'wSalary = ' + wSalary);
    levelComplete();
  }, false);

var draggable2 = document.getElementById('draggable2');
  var xInitial = 0;
  var xFinal = 0;
  draggable2.addEventListener('touchstart', function(event){
    var rect = draggable2.getBoundingClientRect();
    xInitial = rect.left;
  }, false);
  draggable2.addEventListener('touchmove', function(event) {
    var touch = event.targetTouches[0];

    // Place element where the finger is
    draggable2.style.left = touch.pageX-32 + 'px';
    draggable2.style.top = touch.pageY-20 + 'px';
    event.preventDefault();
  }, false);
  draggable2.addEventListener('touchend', function(event){
    var rect = draggable2.getBoundingClientRect();
    xFinal = rect.left;
    if (xFinal < 382) {
      mSalary = mSalary + 1;
      if (xInitial < 382){
        mSalary = mSalary -1;
      }
      else if (xInitial > 398){
        wSalary = wSalary - 1;
      }
    }
    else if (xFinal > 398){
      wSalary = wSalary + 1;
      if (xInitial < 382){
        mSalary = mSalary -1;
      }
      else if (xInitial > 398){
        wSalary = wSalary - 1;
      }
    }
    console.log('mSalary = ' + mSalary, 'wSalary = ' + wSalary);
    levelComplete();
  }, false);

var draggable3 = document.getElementById('draggable3');
  var xInitial = 0;
  var xFinal = 0;
  draggable3.addEventListener('touchstart', function(event){
    var rect = draggable3.getBoundingClientRect();
    xInitial = rect.left;
  }, false);
  draggable3.addEventListener('touchmove', function(event) {
    var touch = event.targetTouches[0];

    // Place element where the finger is
    draggable3.style.left = touch.pageX-32 + 'px';
    draggable3.style.top = touch.pageY-20 + 'px';
    event.preventDefault();
  }, false);
  draggable3.addEventListener('touchend', function(event){
    var rect = draggable3.getBoundingClientRect();
    xFinal = rect.left;
    if (xFinal < 382) {
      mSalary = mSalary + 1;
      if (xInitial < 382){
        mSalary = mSalary -1;
      }
      else if (xInitial > 398){
        wSalary = wSalary - 1;
      }
    }
    else if (xFinal > 398){
      wSalary = wSalary + 1;
      if (xInitial < 382){
        mSalary = mSalary -1;
      }
      else if (xInitial > 398){
        wSalary = wSalary - 1;
      }
    }
    console.log('mSalary = ' + mSalary, 'wSalary = ' + wSalary);
    levelComplete();
  }, false);

var draggablew1 = document.getElementById('draggablew1');
  var xInitial = 0;
  var xFinal = 0;
  draggablew1.addEventListener('touchstart', function(event){
    var rect = draggablew1.getBoundingClientRect();
    xInitial = rect.left;
  }, false);
  draggablew1.addEventListener('touchmove', function(event) {
    var touch = event.targetTouches[0];

    // Place element where the finger is
    draggablew1.style.left = touch.pageX-32 + 'px';
    draggablew1.style.top = touch.pageY-20 + 'px';
    event.preventDefault();
  }, false);
  draggablew1.addEventListener('touchend', function(event){
    var rect = draggablew1.getBoundingClientRect();
    xFinal = rect.left;
    if (xFinal < 382) {
      mSalary = mSalary + 1;
      if (xInitial < 382){
        mSalary = mSalary -1;
      }
      else if (xInitial > 398){
        wSalary = wSalary - 1;
      }
    }
    else if (xFinal > 398){
      wSalary = wSalary + 1;
      if (xInitial < 382){
        mSalary = mSalary -1;
      }
      else if (xInitial > 398){
        wSalary = wSalary - 1;
      }
    }
    console.log('mSalary = ' + mSalary, 'wSalary = ' + wSalary);
    levelComplete();
  }, false);

var draggablec0 = document.getElementById('draggablec0');
  var xInitial = 0;
  var xFinal = 0;
  var yInitial = 0;
  draggablec0.addEventListener('touchstart', function(event){
    var rect = draggablec0.getBoundingClientRect();
    xInitial = rect.left;
    yInitial = rect.top;
  }, false);
  draggablec0.addEventListener('touchmove', function(event) {
    var touch = event.targetTouches[0];

    // Place element where the finger is
    draggablec0.style.left = touch.pageX-32 + 'px';
    draggablec0.style.top = touch.pageY-20 + 'px';
    event.preventDefault();
  }, false);
  draggablec0.addEventListener('touchend', function(event){
    var rect = draggablec0.getBoundingClientRect();
    xFinal = rect.left;
    if (yInitial <= 285){
      if (xFinal < 382) {
        mSalary = mSalary + 1;
      }
      if (xFinal > 398){
        wSalary = wSalary + 1;
      }
    }
    else if (yInitial > 285){
      if (xFinal < 382) {
        mSalary = mSalary + 1;
        if (xInitial < 382){
          mSalary = mSalary -1;
        }
        else if (xInitial > 398){
          wSalary = wSalary - 1;
        }
      }
      else if (xFinal > 398){
        wSalary = wSalary + 1;
        if (xInitial < 382){
          mSalary = mSalary -1;
        }
        else if (xInitial > 398){
          wSalary = wSalary - 1;
        }
      }
    }
    console.log('mSalary = ' + mSalary, 'wSalary = ' + wSalary);
    levelComplete();
  }, false);

var draggablec1 = document.getElementById('draggablec1');
  var xInitial = 0;
  var xFinal = 0;
  var yInitial = 0;
  draggablec1.addEventListener('touchstart', function(event){
    var rect = draggablec1.getBoundingClientRect();
    xInitial = rect.left;
    yInitial = rect.top;
  }, false);
  draggablec1.addEventListener('touchmove', function(event) {
    var touch = event.targetTouches[0];

    // Place element where the finger is
    draggablec1.style.left = touch.pageX-32 + 'px';
    draggablec1.style.top = touch.pageY-20 + 'px';
    event.preventDefault();
  }, false);
  draggablec1.addEventListener('touchend', function(event){
    var rect = draggablec1.getBoundingClientRect();
    xFinal = rect.left;
    if (yInitial <= 285){
      if (xFinal < 382) {
        mSalary = mSalary + 1;
      }
      if (xFinal > 398){
        wSalary = wSalary + 1;
      }
    }
    else if (yInitial > 285){
      if (xFinal < 382) {
        mSalary = mSalary + 1;
        if (xInitial < 382){
          mSalary = mSalary -1;
        }
        else if (xInitial > 398){
          wSalary = wSalary - 1;
        }
      }
      else if (xFinal > 398){
        wSalary = wSalary + 1;
        if (xInitial < 382){
          mSalary = mSalary -1;
        }
        else if (xInitial > 398){
          wSalary = wSalary - 1;
        }
      }
    }
    console.log('mSalary = ' + mSalary, 'wSalary = ' + wSalary);
    levelComplete();
  }, false);

var draggablec2 = document.getElementById('draggablec2');
  var xInitial = 0;
  var xFinal = 0;
  var yInitial = 0;
  draggablec2.addEventListener('touchstart', function(event){
    var rect = draggablec2.getBoundingClientRect();
    xInitial = rect.left;
    yInitial = rect.top;
  }, false);
  draggablec2.addEventListener('touchmove', function(event) {
    var touch = event.targetTouches[0];

    // Place element where the finger is
    draggablec2.style.left = touch.pageX-32 + 'px';
    draggablec2.style.top = touch.pageY-20 + 'px';
    event.preventDefault();
  }, false);
  draggablec2.addEventListener('touchend', function(event){
    var rect = draggablec2.getBoundingClientRect();
    xFinal = rect.left;
    if (yInitial <= 285){
      if (xFinal < 382) {
        mSalary = mSalary + 1;
      }
      if (xFinal > 398){
        wSalary = wSalary + 1;
      }
    }
    else if (yInitial > 285){
      if (xFinal < 382) {
        mSalary = mSalary + 1;
        if (xInitial < 382){
          mSalary = mSalary -1;
        }
        else if (xInitial > 398){
          wSalary = wSalary - 1;
        }
      }
      else if (xFinal > 398){
        wSalary = wSalary + 1;
        if (xInitial < 382){
          mSalary = mSalary -1;
        }
        else if (xInitial > 398){
          wSalary = wSalary - 1;
        }
      }
    }
    console.log('mSalary = ' + mSalary, 'wSalary = ' + wSalary);
    levelComplete();
  }, false);

var draggablec3 = document.getElementById('draggablec3');
  var xInitial = 0;
  var xFinal = 0;
  var yInitial = 0;
  draggablec3.addEventListener('touchstart', function(event){
    var rect = draggablec3.getBoundingClientRect();
    xInitial = rect.left;
    yInitial = rect.top;
  }, false);
  draggablec3.addEventListener('touchmove', function(event) {
    var touch = event.targetTouches[0];

    // Place element where the finger is
    draggablec3.style.left = touch.pageX-32 + 'px';
    draggablec3.style.top = touch.pageY-20 + 'px';
    event.preventDefault();
  }, false);
  draggablec3.addEventListener('touchend', function(event){
    var rect = draggablec3.getBoundingClientRect();
    xFinal = rect.left;
    if (yInitial <= 285){
      if (xFinal < 382) {
        mSalary = mSalary + 1;
      }
      if (xFinal > 398){
        wSalary = wSalary + 1;
      }
    }
    else if (yInitial > 285){
      if (xFinal < 382) {
        mSalary = mSalary + 1;
        if (xInitial < 382){
          mSalary = mSalary -1;
        }
        else if (xInitial > 398){
          wSalary = wSalary - 1;
        }
      }
      else if (xFinal > 398){
        wSalary = wSalary + 1;
        if (xInitial < 382){
          mSalary = mSalary -1;
        }
        else if (xInitial > 398){
          wSalary = wSalary - 1;
        }
      }
    }
    console.log('mSalary = ' + mSalary, 'wSalary = ' + wSalary);
    levelComplete();
  }, false);

var draggablec4 = document.getElementById('draggablec4');
  var xInitial = 0;
  var xFinal = 0;
  var yInitial = 0;
  draggablec4.addEventListener('touchstart', function(event){
    var rect = draggablec4.getBoundingClientRect();
    xInitial = rect.left;
    yInitial = rect.top;
  }, false);
  draggablec4.addEventListener('touchmove', function(event) {
    var touch = event.targetTouches[0];

    // Place element where the finger is
    draggablec4.style.left = touch.pageX-32 + 'px';
    draggablec4.style.top = touch.pageY-20 + 'px';
    event.preventDefault();
  }, false);
  draggablec4.addEventListener('touchend', function(event){
    var rect = draggablec4.getBoundingClientRect();
    xFinal = rect.left;
    if (yInitial <= 285){
      if (xFinal < 382) {
        mSalary = mSalary + 1;
      }
      if (xFinal > 398){
        wSalary = wSalary + 1;
      }
    }
    else if (yInitial > 285){
      if (xFinal < 382) {
        mSalary = mSalary + 1;
        if (xInitial < 382){
          mSalary = mSalary -1;
        }
        else if (xInitial > 398){
          wSalary = wSalary - 1;
        }
      }
      else if (xFinal > 398){
        wSalary = wSalary + 1;
        if (xInitial < 382){
          mSalary = mSalary -1;
        }
        else if (xInitial > 398){
          wSalary = wSalary - 1;
        }
      }
    }
    console.log('mSalary = ' + mSalary, 'wSalary = ' + wSalary);
    levelComplete();
  }, false);

var draggablec5 = document.getElementById('draggablec5');
  var xInitial = 0;
  var xFinal = 0;
  var yInitial = 0;
  draggablec5.addEventListener('touchstart', function(event){
    var rect = draggablec5.getBoundingClientRect();
    xInitial = rect.left;
    yInitial = rect.top;
  }, false);
  draggablec5.addEventListener('touchmove', function(event) {
    var touch = event.targetTouches[0];

    // Place element where the finger is
    draggablec5.style.left = touch.pageX-32 + 'px';
    draggablec5.style.top = touch.pageY-20 + 'px';
    event.preventDefault();
  }, false);
  draggablec5.addEventListener('touchend', function(event){
    var rect = draggablec5.getBoundingClientRect();
    xFinal = rect.left;
    if (yInitial <= 285){
      if (xFinal < 382) {
        mSalary = mSalary + 1;
      }
      if (xFinal > 398){
        wSalary = wSalary + 1;
      }
    }
    else if (yInitial > 285){
      if (xFinal < 382) {
        mSalary = mSalary + 1;
        if (xInitial < 382){
          mSalary = mSalary -1;
        }
        else if (xInitial > 398){
          wSalary = wSalary - 1;
        }
      }
      else if (xFinal > 398){
        wSalary = wSalary + 1;
        if (xInitial < 382){
          mSalary = mSalary -1;
        }
        else if (xInitial > 398){
          wSalary = wSalary - 1;
        }
      }
    }
    console.log('mSalary = ' + mSalary, 'wSalary = ' + wSalary);
    levelComplete();
  }, false);

var list = [draggable, draggable2, draggable3, draggablew1, draggablec0, draggablec1, draggablec2, draggablec3, draggablec4, draggablec5];

// while (true){
  for (var i = 0; i < list.length; i++){
    var rect = list[i].getBoundingClientRect();
    console.log(list[i], 'left = ' + rect.left, 'top = ' + rect.top);
  } 
//}