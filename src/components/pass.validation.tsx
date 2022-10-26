// import { useEffect, useState } from "react";
export {};
// export const usePasswordValidation = ({
//     firstPassword = "",
//     secondPassword = "",
// }) => {
//     const [match, setMatch] = useState(null);
//     useEffect(() => {}, [firstPassword, secondPassword]);

//     return [match];
// };

// const [password, setPassword] = useState({
//     firstPassword: "",
//     secondPassword: "",
// });
// const [match] = usePasswordValidation({
//     firstPassword: password.firstPassword,
//     secondPassword: password.secondPassword,
// });
// const setFirst = (event) => {
//     setPassword({ ...password, firstPassword: event.target.value });
// };
// const setSecond = (event) => {
//     setPassword({ ...password, secondPassword: event.target.value });
// };

// export const useEffect(() => {
//     setMatch(firstPassword && firstPassword === secondPassword);
// }, [firstPassword, secondPassword]);