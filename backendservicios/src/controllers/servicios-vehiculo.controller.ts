import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Servicios,
  Vehiculo,
} from '../models';
import {ServiciosRepository} from '../repositories';

export class ServiciosVehiculoController {
  constructor(
    @repository(ServiciosRepository)
    public serviciosRepository: ServiciosRepository,
  ) { }

  @get('/servicios/{id}/vehiculo', {
    responses: {
      '200': {
        description: 'Vehiculo belonging to Servicios',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Vehiculo)},
          },
        },
      },
    },
  })
  async getVehiculo(
    @param.path.string('id') id: typeof Servicios.prototype.id,
  ): Promise<Vehiculo> {
    return this.serviciosRepository.vehiculo(id);
  }
}
