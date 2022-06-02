const MyForm = document.getElementById('myform');
const inputNama = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputPesan = document.getElementById('message');
const small = document.querySelectorAll('small');
let formValid = false;

MyForm.addEventListener('submit', (e) => {
  e.preventDefault();

  cekInput();
  if (formValid) {
    Swal.fire('Pesan Terkirim', 'Terima Kasih', 'success');
    MyForm.reset();
  }
});

function cekInput() {
  const namaValue = inputNama.value.trim();
  const emailValue = inputEmail.value.trim();
  const pesanValue = inputPesan.value.trim();

  if (namaValue == '') {
    small[0].style.visibility = 'visible';
    inputNama.style.border = '2px solid red';
    formValid = false;
  } else {
    inputNama.style.border = '2px solid rgb(128, 128, 128)';
    small[0].style.visibility = 'hidden';
    formValid = true;
  }

  if (emailValue == '') {
    small[1].style.visibility = 'visible';
    inputEmail.style.border = '2px solid red';
    formValid = false;
  } else {
    inputEmail.style.border = '2px solid rgb(128, 128, 128)';
    small[1].style.visibility = 'hidden';
    formValid = true;
  }

  if (pesanValue == '') {
    small[2].style.visibility = 'visible';
    inputPesan.style.border = '2px solid red';
    formValid = false;
  } else {
    inputPesan.style.border = '2px solid rgb(128, 128, 128)';
    small[2].style.visibility = 'hidden';
    formValid = true;
  }
}
