import { Types } from 'mongoose';
import {Materia, IMateria} from '../models/Materia.js';
export default  {
    Query: {
        async materia(_: any,{ID}: {ID: Types.ObjectId}) {
            return await Materia.findById(ID)  
        },
        async getMaterias() {
            return await Materia.find()  
        }
    },
    Mutation: {
        async createMateria(_: any, {materia}: {materia : IMateria}) {
            return !!(await Materia.create(materia));
        },
        async removeMateria(_: any, {ID}: {ID: Types.ObjectId}) {
            return !!(await Materia.findByIdAndRemove(ID));
        },
        async updateMateria(_: any, {ID, materia}: {ID: string, materia: IMateria}) {
            return !!(await Materia.findByIdAndUpdate(ID,materia))
        }
    }
}