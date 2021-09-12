
export const successAlert = ()=>{
    // eslint-disable-next-line no-undef
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Item deleted!',
        showConfirmButton: false,
        timer: 1200
      })
}
