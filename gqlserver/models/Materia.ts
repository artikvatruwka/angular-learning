import {model, Schema, Types } from 'mongoose';

export interface IMateria {   
    label: string,
    color: string,
    headers: string[],
    values: string[],
}

const MateriaSchema = new Schema<IMateria>({  
    label: String,
    color: String,
    headers: [String],
    values: [String]
})
export const Materia =  model<IMateria>('Materia', MateriaSchema);