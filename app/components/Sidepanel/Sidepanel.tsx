"use client"

import React from 'react';
import { FaWater, FaChartLine, FaFileAlt, FaUserClock } from 'react-icons/fa';

interface SidePanelProps {
  selectedSection: string | null;
  onSelectSection: (section: string) => void;
}

const SidePanel: React.FC<SidePanelProps> = ({ selectedSection, onSelectSection }) => {
  return (
    <div className="w-64 bg-[#023047] p-4 text-[#e0ecf1]">
      <ul className="space-y-4">
        <li>
          <button
            onClick={() => onSelectSection('wetStockControl')}
            className={`w-full flex items-center space-x-2 text-left hover:text-[#FB8500] transition-colors ${
              selectedSection === 'wetStockControl' ? 'text-[#FB8500]' : ''
            }`}
          >
            <FaWater className="inline-block" />
            <span>Wet Stock Control</span>
          </button>
        </li>
        <li>
          <button
            onClick={() => onSelectSection('dailySales')}
            className={`w-full flex items-center space-x-2 text-left hover:text-[#FB8500] transition-colors ${
              selectedSection === 'dailySales' ? 'text-[#FB8500]' : ''
            }`}
          >
            <FaChartLine className="inline-block" />
            <span>Daily Sales</span>
          </button>
        </li>
        <li>
          <button
            onClick={() => onSelectSection('reports')}
            className={`w-full flex items-center space-x-2 text-left hover:text-[#FB8500] transition-colors ${
              selectedSection === 'reports' ? 'text-[#FB8500]' : ''
            }`}
          >
            <FaFileAlt className="inline-block" />
            <span>Reports</span>
          </button>
        </li>
        <li>
          <button
            onClick={() => onSelectSection('attendance')}
            className={`w-full flex items-center space-x-2 text-left hover:text-[#FB8500] transition-colors ${
              selectedSection === 'attendance' ? 'text-[#FB8500]' : ''
            }`}
          >
            <FaUserClock className="inline-block" />
            <span>Attendance</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SidePanel;