import { BASE_URL } from "../config/app";

export const loadData =(path='/') => fetch(`${BASE_URL}${path}`).then(r=>r.json())