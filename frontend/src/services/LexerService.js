import axios from 'axios';

//const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api";
const LEXER_API_BASE_URL = "http://localhost:8001/expressionControl";


class LexerService {

    /* getEmployees() {
         return axios.get(EMPLOYEE_API_BASE_URL);
     }
 
     createEmployee(employee) {
         return axios.post(EMPLOYEE_API_BASE_URL, employee);
     }
 
     getEmployeeById(employeeId) {
         return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
     }
 
     updateEmployee(employee, employeeId) {
         return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
     }
 
     deleteEmployee(employeeId) {
         return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
     }*/

    sendMatrixString(string) {
        return axios.post(LEXER_API_BASE_URL + '/matrix', { value: string });
    }
    sendAlgebraString(string) {
        return axios.post(LEXER_API_BASE_URL + '/arithmetic', { value: string });
    }
    sendLogicString(string, numberOf) {
        return axios.post(LEXER_API_BASE_URL + '/logic', { input: string, number_of_variables: numberOf });
    }
}

export default new LexerService()