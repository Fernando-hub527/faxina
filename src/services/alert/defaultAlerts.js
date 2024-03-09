import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'




export function cancelOperation() {
  const MySwal = withReactContent(Swal)
  MySwal.fire({
    position: 'center',
    icon: 'error',
    title: 'Sua operação foi cancelada',
    showConfirmButton: false,
    timer: 1500
  })
}

export async function confirmRequest(text) {
  const MySwal = withReactContent(Swal)

  const result = await MySwal.fire({
    title: 'Você tem certeza?',
    text: text,
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim, confirmar',
    cancelButtonText: 'Não, cancelar!',
    reverseButtons: true
  })
  if (result.isConfirmed)
    return result
  else {
    cancelOperation()
    return result
  }
}


export async function selectValue(title, label, valMin, valMax, start){
  const MySwal = withReactContent(Swal)
  return await MySwal.fire({
    title: title,
    icon: 'question',
    input: 'range',
    inputLabel: label,
    inputAttributes: {
      min: valMin != undefined ? valMin : 10,
      max: valMax || 120,
      step: 1
    },
    inputValue: start != undefined ? start : 50
  })
}

export function alertRequestsInf(type, title, Placeholder){
  return Swal.fire({
      title: title,
      input: type,
      inputPlaceholder: Placeholder,
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Procurar',
      showLoaderOnConfirm: true
  })
}

export function confirmOperation(alert){
  const MySwal = withReactContent(Swal)

  return MySwal.fire({
    title: 'Deseja continuar com a operação?',
    html: alert,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    showLoaderOnConfirm: true,
    confirmButtonText: 'Continuar',
  })
}

export async function selectOption(title, name, option){
  return await Swal.fire({
    title: title,
    input: 'select',
    inputOptions: option,
    inputPlaceholder: name,
    showCancelButton: true,
  })
  
}



export async function selectText(title, name, type, text){
  return await Swal.fire({
    title: title,
    text: text,
    input: type || 'number',
    inputPlaceholder: name,
    showCancelButton: true,
  })
}

export async function inputArea(label, placeHolder){
  return await Swal.fire({
    input: 'textarea',
    inputLabel: label,
    inputPlaceholder: placeHolder,
    inputAttributes: {
      'aria-label': placeHolder
    },
    showCancelButton: true
  })
}


