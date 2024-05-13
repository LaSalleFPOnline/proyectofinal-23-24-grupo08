const formValidations = {
    capacity: [(value) => value > 0, 'Debes introducir la capacidad'],
    intervalHourBooking: [(value) => value > 1, 'Debes introducir un intervalo de horas'],
    openTimeLaunch: [(value) => value?.length > 1, 'Debes introducir una hora de apertura para la comida'],
    closeTimeLaunch: [(value) => value?.length > 1, 'Debes introducir una hora de cierre del restaurante para la comida'],
    openTimeDinner: [(value) => value?.length > 1, 'Debes introducir una hora de apertura para la cena'],
    closeTimeDinner: [(value) => value?.length > 1, 'Debes introducir una hora de cierre del restaurante para la cena']
};

export { formValidations };
