import {IRes} from "../types/res.type";
import {ICar} from "../interfaces/car.interface";
import {carsAxiosService} from "./axios.service";
import {urls} from "../constans/urls";

const carService = {
    getAll:():IRes<ICar[]> => carsAxiosService.get(urls.carAPI.cars),
    create:(car:ICar):IRes<ICar> => carsAxiosService.post(urls.carAPI.cars, car);
    updateByid:(id:number, car:ICar):IRes<ICar> => carsAxiosService.put(urls.carAPI.byId(id), car),
    deleteByid:(id:number):IRes<void> => carsAxiosService.delete(urls.carAPI.byId(id))
}


export {
    carService
}