const thumbUp = document.getElementsByClassName("fa-thumbs-up");
const thumbDown = document.getElementsByClassName("fa-thumbs-down");
const trash = document.getElementsByClassName("fa-regular fa-trash");




Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const weekday = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const mood = this.parentNode.parentNode.childNodes[5].innerText
        fetch('mood', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'weekday': weekday,
            'msg': msg,
            'mood': mood,
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
