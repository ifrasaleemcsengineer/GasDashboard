import React from "react";

export function BankForm() {
  return (
    <div className="form-content">
      <form>
        <div className="inputs">
          <input placeholder="Bank Account Number" />
          <input placeholder="Bank Account Title" />
        </div>
        <div className="submit-button">
          <button>Save</button>
        </div>
      </form>
    </div>
  );
}
export function EasyPaisaForm() {
  return (
    <div className="form-content">
      <form>
        <div className="inputs">
          <input placeholder="EasyPaisa Account Number" />
          <input placeholder="EasyPaisa Account Title" />
        </div>
        <div className="submit-button">
          <button>Save</button>
        </div>
      </form>
    </div>
  );
}
export function JazzCashForm() {
  return (
    <div className="form-content">
      <form>
        <div className="inputs">
          <input placeholder="JazzCash Account Number" />
          <input placeholder="JazzCash Account Title" />
        </div>
        <div className="submit-button">
          <button>Save</button>
        </div>
      </form>
    </div>
  );
}
