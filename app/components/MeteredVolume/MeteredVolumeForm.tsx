'use client';

import { useState } from 'react';

interface MeteredVolumeFormProps {
  fuelType: 'petrol' | 'diesel';
  onTotalChange: (total: number) => void;
}

const MeteredVolumeForm: React.FC<MeteredVolumeFormProps> = ({ fuelType, onTotalChange }) => {
  const [pumps, setPumps] = useState([
    { open: 0, close: 0, total: 0 },
    { open: 0, close: 0, total: 0 },
    { open: 0, close: 0, total: 0 },
    { open: 0, close: 0, total: 0 },
  ]);

  const handleInputChange = (index: number, field: 'open' | 'close', value: string) => {
    const newPumps = [...pumps];
    const numericValue = parseFloat(value) || 0; // Ensure it's a number
    newPumps[index][field] = numericValue;

    // Calculate total for the pump
    newPumps[index].total = newPumps[index].close - newPumps[index].open;

    setPumps(newPumps);

    // Calculate total volume for all pumps
    const totalVolume = newPumps.reduce((sum, pump) => sum + pump.total, 0);
    onTotalChange(totalVolume);
  };

  const totalVolume = pumps.reduce((sum, pump) => sum + pump.total, 0);

  return (
    <div className="bg-[#e0ecf1] p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#023047] mb-6">{fuelType.toUpperCase()} Metered Volume</h2>
      <div className="space-y-4">
        {pumps.map((pump, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-[#023047] mb-2">Pump {index + 1}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#023047]">Open Figure</label>
                <input
                  type="number"
                  value={pump.open}
                  onChange={(e) => handleInputChange(index, 'open', e.target.value)}
                  className="w-full p-2 border border-[#023047] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FB8500]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#023047]">Close Figure</label>
                <input
                  type="number"
                  value={pump.close}
                  onChange={(e) => handleInputChange(index, 'close', e.target.value)}
                  className="w-full p-2 border border-[#023047] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FB8500]"
                />
              </div>
            </div>
            <div className="mt-2">
              <span className="text-sm font-medium text-[#023047]">Total Metered Volume: </span>
              <span className="font-bold">{pump.total.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-[#023047] rounded-lg">
        <h3 className="text-lg font-semibold text-[#e0ecf1]">Total Volume for {fuelType.toUpperCase()}</h3>
        <p className="text-2xl font-bold text-[#FB8500]">{totalVolume.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default MeteredVolumeForm;