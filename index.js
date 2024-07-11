
function addingEventListener() {
    const input = document.getElementById('button');
    if (input) {
      input.addEventListener('click', function() {
        console.log('Button was clicked!');
      });
    }
  }
  
  module.exports = addingEventListener;
  