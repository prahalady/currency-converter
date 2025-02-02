import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";

const exchangeRates = {
  USD: 1300,
  JPY: 10,
  EUR: 1400,
};

export default function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const handleConvert = () => {
    setConvertedAmount(Number(amount) * exchangeRates[currency]);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-teal-200">
      <Card className="w-96 p-6 shadow-lg">
        <CardContent>
          <h2 className="text-xl font-bold text-center mb-4">환율 계산기</h2>
          <div className="mb-4">
            <label className="block mb-2">금액:</label>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="금액 입력"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">통화 선택:</label>
            <select
              className="w-full p-2 border rounded"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="USD">US 달러 (USD)</option>
              <option value="JPY">일본 엔화 (JPY)</option>
              <option value="EUR">유로 (EUR)</option>
            </select>
          </div>
          <Button className="w-full" onClick={handleConvert}>
            변환하기
          </Button>
          <div className="mt-4 text-center text-lg font-semibold">
            변환된 금액: {convertedAmount.toLocaleString()} KRW
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
