import { Exercice } from "./Exercice";
import { RoutineList } from "./RoutineList";

interface Routine extends RoutineList {
  exercices: Exercice[];
}
