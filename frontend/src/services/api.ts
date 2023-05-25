import axios from "axios";

function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts: any = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function configHeader() {
  const token = getCookie("token");
  var header;
  if (!token) {
    return (header = { "Content-Type": "application/x-www-form-urlencoded" });
  }
  return (header = { Authorization: `Bearer ${token}` });
}

const api = axios.create({
  headers: configHeader(),
  baseURL: "http://localhost:3000",
});
export default api;
