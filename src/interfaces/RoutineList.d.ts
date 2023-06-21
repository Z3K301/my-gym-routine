import { Select } from "./Select";

export interface RoutineList {
  image: string;
  exercices?: number;
  time: number;
  title: string;
  category: Select[];
  reviewCount?: number;
  rating?: number;
  id: number;
}
