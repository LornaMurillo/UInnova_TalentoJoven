// "₡650.000" → 650000
export const toNumber = (amount: string) => Number(amount.replace(/\D/g, ""));

// 650000 → "₡ 650.000"
export const colones = (n: number) => `₡ ${String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;

// 0.6 → "60 %"
export const percent = (rate: number) => `${Math.round(rate * 100)} %`;
