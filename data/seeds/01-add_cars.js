
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '1ZVBP8EM0D5275985', make: 'Volkswagen', model: 'Tiguan SE', mileage: 7833, transmissionType: 'Automatic', titleStatus: 'Clear'},
        {VIN: '5FNRL18903B193988', make: 'Toyota', model: 'Camry', mileage: 2985, transmissionType: 'Automatic', titleStatus:'Reconstructed'},
        {VIN: '5GZCZ23DX3S826679', make: 'Pontiac', model: 'GTO', mileage: 12613,  transmissionType: 'Manual', titleStatus:'Clear'},
        {VIN: 'JTEBU5JR8E5156431', make: 'Chrysler', model: 'Crossfire', mileage: 100103,  transmissionType: 'Automatic', titleStatus:'Salvage'},
        {VIN: '3FAFP07126R108557', make: 'Toyota', model: 'Yaris', mileage: 206013,  transmissionType: 'Automatic', titleStatus:'Reconstructed'},
        {VIN: '19XFB2F53EE058119', make: 'Mazda', model: 'MX-5', mileage: 56130,  transmissionType: 'Automatic', titleStatus:'Clear'},
      ]);
    });
};
