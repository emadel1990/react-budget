export const revisarPresupuesto = (presupuesto, restante) => {
    let clase;

    if( ( (presupuesto * 0.25) > restante)){
        clase = 'alert alert-danger'
    } else if (( (presupuesto * 0.50) > restante)){
        clase = 'alert alert-warning'
    } else {
        clase = 'alert alert-success';
    }

    return clase;
}