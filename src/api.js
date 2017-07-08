import axios from 'axios';

const API_KEY = "hu0BgORHLmFGYbsJpY8vUuSIoa9aBc";
const instance = axios.create({
  baseURL: 'https://loyalty.collectapps.io/api/v1/',
  timeout: 5000,
  headers: { 'Authorization': `ApiKey ${API_KEY}` }
});

const fetchRewards = () => {
  return instance.get("rewards?PageNumber=&PageSize=&CreatedAfter=&CreatedBefore=")
}

export default {
  fetchRewards,
}