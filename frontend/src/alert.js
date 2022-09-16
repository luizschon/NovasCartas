// Wrapper para facilitar criação/uso de alertas

import Swal from 'sweetalert2';

export default class Alert {
  
  constructor(params) {

    this.params = params;
    
    // Mensagem de erro
    this.errorPopUp = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      background: '#fee',
      color: '#323232'
    });
    
    // Mensagem de sucesso
    this.succPopUp = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      background: '#efe',
      color: '#323232'
    });
  }

  // Manda alerta de erro
  fireError() {
    this.errorPopUp.fire({
      icon: this.params.errorIcon,
      title: this.params.errorTitle
    });
  }

  // Manda alerta de sucesso
  fireSuccess() {
    this.succPopUp.fire({
      icon: this.params.succIcon,
      title: this.params.succTitle
    });
  }
}
