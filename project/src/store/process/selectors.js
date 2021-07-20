import {NameSpace} from '../root-reducer';

export const getCity = (state) => state[NameSpace.PROCESS].city;
export const getActiveSortTypes = (state) => state[NameSpace.PROCESS].activeSortType;
