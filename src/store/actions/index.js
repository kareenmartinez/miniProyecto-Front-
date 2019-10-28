import axios from "axios";
const SET_PADRE = padre => ({
  type: "ADD_PADRE",
  padre
});

const SET_HIJOS = hijos => ({
  type: "ADD_HIJOS",
  hijos
});

export const fetchPadre = () => dispatch =>
  axios
    .get("http://localhost:3000/padre/erik")
    .then(padre => dispatch(SET_PADRE(padre.data)));

export const fetchHijos = () => dispatch =>
  axios
    .get("http://localhost:3000/hijos/erik")
    .then(hijos => dispatch(SET_HIJOS(hijos.data)));
