import {model, Schema, Types } from 'mongoose';

export interface IMateria {   
    label: string,
    color: string,
    headings: string[],
    value: string[],
}

const MateriaSchema = new Schema<IMateria>({  
    label: String,
    color: String,
    headings: [String],
    value: [String]
})
export const Materia =  model<IMateria>('Materia', MateriaSchema);