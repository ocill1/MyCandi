document.title = 'Tante Linda'

let countdownTime = 5

// Event listener untuk tombol "Mau"
document.querySelector('.say-yes').addEventListener('click', ev => {
  document.querySelector('#slide-1').style.display = 'none'
  document.querySelector('#slide-2').style.display = 'block'
  document.querySelector('#countdown').innerHTML = countdownTime
  startCountdown()
})

// Fungsi countdown
function startCountdown() {
  countdownTime--
  document.querySelector('#countdown').innerHTML = countdownTime
  
  if (countdownTime > 0) {
    setTimeout(() => {
      startCountdown()
    }, 1000)
  } else {
    // Countdown selesai
    document.title = 'Masuk ke Candi'
    document.querySelector('#countdown').innerHTML = '0'
    
    // Tampilkan gambar-gambar
    setTimeout(() => {
      document.querySelector('#imageOut').style.display = 'block'
    }, 500)
    
    setTimeout(() => {
      document.querySelector('#imageBye').style.display = 'block'
    }, 1500)
    
    // Tampilkan tombol masuk ke candi dengan animasi
    setTimeout(() => {
      const enterBtn = document.getElementById('enterBtn')
      enterBtn.classList.add('show')
    }, 2500)
  }
}

// Event listener untuk tombol "Masuk ke Candi"
document.getElementById('enterBtn').addEventListener('click', () => {
  // Fade out effect sebelum pindah halaman
  document.body.style.opacity = '0'
  document.body.style.transition = 'opacity 1s ease'
  
  setTimeout(() => {
    window.location.href = 'MyCandi.html'
  }, 1000)
})

// Logic untuk tombol "Ga" yang berpindah-pindah
document.querySelectorAll('.say-no').forEach((el, i) => {
  el.id = 'no-' + i
  el.addEventListener('mouseover', ev => {
    const showId = ev.target.id == 'no-0' ? 'no-1' :
                    ev.target.id == 'no-1' ? 'no-2' : 'no-0'
    removeStyleBtnNo()
    document.querySelector('#'+showId).style.display = 'block'
  })

  if (i != 0) {
    el.style.display = 'none'
  }
})

function removeStyleBtnNo() {
  document.querySelectorAll('.say-no').forEach(el => {
    el.style.display = 'none'
  })
}

// Show body after load
window.onload = function () {
  document.body.style.display = 'grid'
}
