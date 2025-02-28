'use client'

import React, { useState } from 'react';
import SidePanel from '../components/Sidepanel/Sidepanel';
import ContentArea from '../components/Contentarea/Contentarea';
import MeteredVolumeForm from '../components/MeteredVolume/MeteredVolumeForm';
import SalesVolumeForm from '../components/SalesForm/SalesVolumeForm';
import { FaBars } from 'react-icons/fa';

const Dashboard: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState<boolean>(false);
  const [totalMeteredVolumePetrol, setTotalMeteredVolumePetrol] = useState<number>(0);
  const [totalMeteredVolumeDiesel, setTotalMeteredVolumeDiesel] = useState<number>(0);

  return (
    <div className="flex h-screen">
      {/* Side Panel (Collapsible on Mobile) */}
      <div
        className={`fixed md:relative z-20 transform ${
          isSidePanelOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300`}
      >
        <SidePanel
          selectedSection={selectedSection}
          onSelectSection={setSelectedSection}
        />
      </div>

      {/* Toggle Button for Mobile */}
      <button
        onClick={() => setIsSidePanelOpen(!isSidePanelOpen)}
        className="fixed top-4 left-4 z-30 p-2 bg-[#023047] text-[#e0ecf1] rounded-md md:hidden"
      >
        <FaBars className="w-6 h-6" />
      </button>

      {/* Content Area */}
      <div className="flex-1 bg-[#e0ecf1] text-[#023047] p-6 overflow-y-auto">
        {selectedSection === 'wetStockControl' && (
          <div className="space-y-6">
            <MeteredVolumeForm
              fuelType="petrol"
              onTotalChange={(total) => setTotalMeteredVolumePetrol(total)}
            />
            <MeteredVolumeForm
              fuelType="diesel"
              onTotalChange={(total) => setTotalMeteredVolumeDiesel(total)}
            />
            <SalesVolumeForm
              totalMeteredVolumePetrol={totalMeteredVolumePetrol}
              totalMeteredVolumeDiesel={totalMeteredVolumeDiesel}
            />
          </div>
        )}
        {selectedSection !== 'wetStockControl' && <ContentArea selectedSection={selectedSection} />}
      </div>
    </div>
  );
};

export default Dashboard;