function calculateLoan() {
    let loanAmount = parseFloat(document.getElementById("loanAmount").value);
    let annualInterestRate = parseFloat(document.getElementById("annualInterestRate").value);
    let loanTerm = parseInt(document.getElementById("loanTerm").value);
    
    if (isNaN(loanAmount) || loanAmount <= 0 || isNaN(annualInterestRate) || annualInterestRate < 0 || isNaN(loanTerm) || loanTerm <= 0) {
        alert("⚠️ Vui lòng nhập thông tin hợp lệ.");
        return;
    }
    
    let monthlyInterestRate = annualInterestRate / 12 / 100;
    let totalPayments = loanTerm * 12;
    let monthlyPayment;
    
    if (annualInterestRate === 0) {
        monthlyPayment = loanAmount / totalPayments;
    } else {
        monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));
    }
    
    let totalPayment = monthlyPayment * totalPayments;
    
    document.getElementById("monthlyPayment").innerText = monthlyPayment.toLocaleString("vi-VN", {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.getElementById("totalPayment").innerText = totalPayment.toLocaleString("vi-VN", {minimumFractionDigits: 2, maximumFractionDigits: 2});
}
