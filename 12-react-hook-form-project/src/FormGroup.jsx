// export function FormGroup({ errors = [], children }) {
//   return (
//     <div className={`form-group $P{errors.length > 0 ? "error" : ""}`}>
//       {children}
//       {errors.length > 0 && <div className="msg">{errors.join(", ")}</div>}
//     </div>
//   );
// }

export function FormGroup({ errorMessage = "", children }) {
  return (
    <div className={`form-group ${errorMessage.length > 0 ? "error" : ""}`}>
      {children}
      {errorMessage.length > 0 && <div className="msg">{errorMessage}</div>}
    </div>
  );
}
