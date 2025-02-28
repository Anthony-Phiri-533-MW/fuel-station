import React, { useState } from 'react';

interface SalesVolumeFormProps {
  totalMeteredVolumePetrol: number;
  totalMeteredVolumeDiesel: number;
}

const SalesVolumeForm: React.FC<SalesVolumeFormProps> = ({
  totalMeteredVolumePetrol,
  totalMeteredVolumeDiesel,
}) => {
  const [pumpTestPetrol, setPumpTestPetrol] = useState<number>(0);
  const [pumpTestDiesel, setPumpTestDiesel] = useState<number>(0);
  const [unitPricePetrol, setUnitPricePetrol] = useState<number>(0);
  const [unitPriceDiesel, setUnitPriceDiesel] = useState<number>(0);

  // Calculate Total Sales Volume (C = A - B)
  const totalSalesVolumePetrol = totalMeteredVolumePetrol - pumpTestPetrol;
  const totalSalesVolumeDiesel = totalMeteredVolumeDiesel - pumpTestDiesel;

  // Calculate Total Sales Value (E = C * D)
  const totalSalesValuePetrol = totalSalesVolumePetrol * unitPricePetrol;
  const totalSalesValueDiesel = totalSalesVolumeDiesel * unitPriceDiesel;

  return (
    <div className="bg-[#e0ecf1] p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold text-[#023047] mb-6">Sales Volume Calculation</h2>
      <div className="space-y-4">
        {/* Row 1: Total Metered Volume (A) */}
        <div className="grid grid-cols-4 gap-4 bg-white p-4 rounded-lg shadow-sm">
          <div className="font-medium text-[#023047]">Total Metered Volume (A)</div>
          <div className="text-right">{totalMeteredVolumePetrol.toFixed(2)}</div>
          <div className="text-right">{totalMeteredVolumeDiesel.toFixed(2)}</div>
        </div>

        {/* Row 2: Pump Test (B) */}
        <div className="grid grid-cols-4 gap-4 bg-white p-4 rounded-lg shadow-sm">
          <div className="font-medium text-[#023047]">Pump Test (B)</div>
          <div>
            <input
              type="number"
              value={pumpTestPetrol}
              onChange={(e) => setPumpTestPetrol(parseFloat(e.target.value) || 0)}
              className="w-full p-2 border border-[#023047] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FB8500]"
            />
          </div>
          <div>
            <input
              type="number"
              value={pumpTestDiesel}
              onChange={(e) => setPumpTestDiesel(parseFloat(e.target.value) || 0)}
              className="w-full p-2 border border-[#023047] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FB8500]"
            />
          </div>
        </div>

        {/* Row 3: Total Sales Volume (C = A - B) */}
        <div className="grid grid-cols-4 gap-4 bg-white p-4 rounded-lg shadow-sm">
          <div className="font-medium text-[#023047]">Total Sales Volume (C = A - B)</div>
          <div className="text-right">{totalSalesVolumePetrol.toFixed(2)}</div>
          <div className="text-right">{totalSalesVolumeDiesel.toFixed(2)}</div>
        </div>

        {/* Row 4: Unit Price (D) */}
        <div className="grid grid-cols-4 gap-4 bg-white p-4 rounded-lg shadow-sm">
          <div className="font-medium text-[#023047]">Unit Price (D)</div>
          <div>
            <input
              type="number"
              value={unitPricePetrol}
              onChange={(e) => setUnitPricePetrol(parseFloat(e.target.value) || 0)}
              className="w-full p-2 border border-[#023047] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FB8500]"
            />
          </div>
          <div>
            <input
              type="number"
              value={unitPriceDiesel}
              onChange={(e) => setUnitPriceDiesel(parseFloat(e.target.value) || 0)}
              className="w-full p-2 border border-[#023047] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FB8500]"
            />
          </div>
        </div>

        {/* Row 5: Total Sales Value (E = C * D) */}
        <div className="grid grid-cols-4 gap-4 bg-white p-4 rounded-lg shadow-sm">
          <div className="font-medium text-[#023047]">Total Sales Value (E = C * D)</div>
          <div className="text-right">{totalSalesValuePetrol.toFixed(2)}</div>
          <div className="text-right">{totalSalesValueDiesel.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default SalesVolumeForm;