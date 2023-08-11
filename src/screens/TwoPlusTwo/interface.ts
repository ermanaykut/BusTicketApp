export interface ISeat {
    id: number;
    seatNumber:number;
    is_active: boolean;
    taken?: ISeatStatus;
    is_door?: boolean;
  }
  
  export type ISeatStatus = {
    id: number;
    gender: 'male' | 'female';
  };