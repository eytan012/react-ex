<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>

export const successAlert = ()=>{
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })

}
