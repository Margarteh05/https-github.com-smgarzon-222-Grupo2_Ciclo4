import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Vehiculo} from './vehiculo.model';

@model()
export class Servicios extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
  })
  codigo_servicio: number;

  @property({
    type: 'date',
    required: true,
  })
  fecha_servicio: string;

  @property({
    type: 'number',
    required: true,
  })
  costo_servicio: number;

  @belongsTo(() => Vehiculo)
  vehiculoId: string;

  constructor(data?: Partial<Servicios>) {
    super(data);
  }
}

export interface ServiciosRelations {
  // describe navigational properties here
}

export type ServiciosWithRelations = Servicios & ServiciosRelations;
