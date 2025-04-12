import { useState } from 'react';
import {
  LineChart,
  BarChart,
  PieChart,
  Line,
  Bar,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from 'recharts';
import { Download, Filter, TrendingUp, Layers } from "react-feather";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Mock data - replace with actual API calls
const forestCoverageData = [
  { year: '2018', primaryForest: 500, secondaryForest: 300, plantedForest: 200 },
  { year: '2019', primaryForest: 480, secondaryForest: 310, plantedForest: 210 },
  { year: '2020', primaryForest: 470, secondaryForest: 320, plantedForest: 230 },
  { year: '2021', primaryForest: 460, secondaryForest: 330, plantedForest: 250 },
  { year: '2022', primaryForest: 450, secondaryForest: 340, plantedForest: 270 },
];

const conservationData = [
  { name: 'Protected Areas', value: 35 },
  { name: 'Conservation Units', value: 25 },
  { name: 'Indigenous Lands', value: 20 },
  { name: 'Private Reserves', value: 15 },
  { name: 'Other', value: 5 },
];

const economicImpactData = [
  { sector: 'Timber', jobs: 12000, revenue: 450 },
  { sector: 'Pulp & Paper', jobs: 8000, revenue: 320 },
  { sector: 'Non-Timber Products', jobs: 5000, revenue: 180 },
  { sector: 'Ecotourism', jobs: 6500, revenue: 210 },
  { sector: 'Carbon Credits', jobs: 1200, revenue: 90 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export default function StatistikKehutanan() {
  const [activeTab, setActiveTab] = useState('coverage');
  const [startDate, setStartDate] = useState(new Date(2018, 0, 1));
  const [endDate, setEndDate] = useState(new Date());
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [reportType, setReportType] = useState('annual');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [exportFormat, setExportFormat] = useState('pdf');

  // Mock regions - replace with actual data
  const regions = ['North', 'Northeast', 'Central', 'South', 'East', 'West'];

  const handleRegionToggle = (region: string) => {
    if (selectedRegions.includes(region)) {
      setSelectedRegions(selectedRegions.filter(r => r !== region));
    } else {
      setSelectedRegions([...selectedRegions, region]);
    }
  };

  const handleExport = () => {
    // Implement export functionality
    alert(`Exporting ${exportFormat} report for selected data`);
    setIsExportOpen(false);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'coverage':
        return (
          <div className="grid grid-cols-1 gap-8 mt-10">
            <div className="bg-white p-6 rounded-lg shadow mt-10">
              <h3 className="text-lg font-semibold mb-4">Forest Coverage Over Time</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={forestCoverageData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis label={{ value: 'Area (kHa)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="primaryForest" stroke="#8884d8" name="Primary Forest" />
                    <Line type="monotone" dataKey="secondaryForest" stroke="#82ca9d" name="Secondary Forest" />
                    <Line type="monotone" dataKey="plantedForest" stroke="#ffc658" name="Planted Forest" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Forest Type Distribution (Latest Year)</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[
                          { name: 'Primary Forest', value: forestCoverageData[forestCoverageData.length - 1].primaryForest },
                          { name: 'Secondary Forest', value: forestCoverageData[forestCoverageData.length - 1].secondaryForest },
                          { name: 'Planted Forest', value: forestCoverageData[forestCoverageData.length - 1].plantedForest },
                        ]}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {COLORS.map((color, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Annual Change Rate</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={forestCoverageData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis label={{ value: 'Change (%)', angle: -90, position: 'insideLeft' }} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="primaryForest" fill="#8884d8" name="Primary Forest" />
                      <Bar dataKey="secondaryForest" fill="#82ca9d" name="Secondary Forest" />
                      <Bar dataKey="plantedForest" fill="#ffc658" name="Planted Forest" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'conservation':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Conservation Area Distribution</h3>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={conservationData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {conservationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Conservation Effectiveness</h3>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={conservationData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" name="Area (kHa)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        );
        
      case 'economic':
        return (
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Forestry Sector Economic Impact</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={economicImpactData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="sector" />
                    <YAxis yAxisId="left" orientation="left" stroke="#8884d8" label={{ value: 'Jobs', angle: -90, position: 'insideLeft' }} />
                    <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" label={{ value: 'Revenue (M$)', angle: 90, position: 'insideRight' }} />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="jobs" fill="#8884d8" name="Jobs" />
                    <Bar yAxisId="right" dataKey="revenue" fill="#82ca9d" name="Revenue (M$)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Sector Contribution</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={economicImpactData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="revenue"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {economicImpactData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        );
        
      case 'environment':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Environmental Indicators</h3>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={[
                  { year: '2018', carbonSequestration: 120, biodiversityIndex: 85, waterQuality: 78 },
                  { year: '2019', carbonSequestration: 118, biodiversityIndex: 84, waterQuality: 77 },
                  { year: '2020', carbonSequestration: 115, biodiversityIndex: 82, waterQuality: 76 },
                  { year: '2021', carbonSequestration: 112, biodiversityIndex: 80, waterQuality: 75 },
                  { year: '2022', carbonSequestration: 110, biodiversityIndex: 78, waterQuality: 74 },
                ]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis yAxisId="left" label={{ value: 'Carbon (Mt CO2)', angle: -90, position: 'insideLeft' }} />
                  <YAxis yAxisId="right" orientation="right" label={{ value: 'Index Score', angle: 90, position: 'insideRight' }} />
                  <Tooltip />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="carbonSequestration" stroke="#8884d8" name="Carbon Sequestration" />
                  <Line yAxisId="right" type="monotone" dataKey="biodiversityIndex" stroke="#82ca9d" name="Biodiversity Index" />
                  <Line yAxisId="right" type="monotone" dataKey="waterQuality" stroke="#ffc658" name="Water Quality Index" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Forestry Statistics</h1>
          <div className="flex space-x-2">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </button>
            <button 
              onClick={() => setIsExportOpen(!isExportOpen)}
              className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <Download className="mr-2 h-4 w-4" />
              Export
            </button>
          </div>
        </div>
        
        {/* Filter Panel */}
        {isFilterOpen && (
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h3 className="text-lg font-medium mb-4">Filter Data</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
                <div className="space-y-2">
                  <DatePicker
                    selected={startDate}
                    onChange={(date: Date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <DatePicker
                    selected={endDate}
                    onChange={(date: Date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Regions</label>
                <div className="grid grid-cols-2 gap-2">
                  {regions.map(region => (
                    <div key={region} className="flex items-center">
                      <input
                        id={`region-${region}`}
                        name="regions"
                        type="checkbox"
                        checked={selectedRegions.includes(region)}
                        onChange={() => handleRegionToggle(region)}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor={`region-${region}`} className="ml-2 block text-sm text-gray-700">
                        {region}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Report Type</label>
                <select
                  value={reportType}
                  onChange={(e) => setReportType(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="annual">Annual Report</option>
                  <option value="quarterly">Quarterly Report</option>
                  <option value="custom">Custom Report</option>
                </select>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => setIsFilterOpen(false)}
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}
        
        {/* Export Panel */}
        {isExportOpen && (
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h3 className="text-lg font-medium mb-4">Export Data</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Format</label>
                <div className="space-y-2">
                  {['pdf', 'csv', 'excel', 'json'].map(format => (
                    <div key={format} className="flex items-center">
                      <input
                        id={`format-${format}`}
                        name="export-format"
                        type="radio"
                        checked={exportFormat === format}
                        onChange={() => setExportFormat(format)}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor={`format-${format}`} className="ml-2 block text-sm text-gray-700">
                        {format.toUpperCase()}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                <div className="space-y-2">
                  {['Current View', 'All Data', 'Custom Selection'].map(option => (
                    <div key={option} className="flex items-center">
                      <input
                        id={`content-${option}`}
                        name="export-content"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor={`content-${option}`} className="ml-2 block text-sm text-gray-700">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-3">
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => setIsExportOpen(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={handleExport}
              >
                Export
              </button>
            </div>
          </div>
        )}
        
        {/* Main Content */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex">
              <button
                onClick={() => setActiveTab('coverage')}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'coverage' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Forest Coverage
              </button>
              <button
                onClick={() => setActiveTab('conservation')}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'conservation' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Conservation
              </button>
              <button
                onClick={() => setActiveTab('economic')}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'economic' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Economic Impact
              </button>
              <button
                onClick={() => setActiveTab('environment')}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'environment' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Environment
              </button>
            </nav>
          </div>
          
          {/* Tab Content */}
          <div className="p-6">
            {renderTabContent()}
          </div>
        </div>
        
        {/* Trend Analysis Section */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-indigo-600" />
              Trend Analysis
            </h2>
            <button className="text-sm text-indigo-600 hover:text-indigo-800">
              Compare Regions
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-700 mb-2">Deforestation Rate</h3>
              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={[
                    { year: '2018', value: 1.2 },
                    { year: '2019', value: 1.1 },
                    { year: '2020', value: 1.0 },
                    { year: '2021', value: 0.9 },
                    { year: '2022', value: 0.8 },
                  ]}>
                    <Line type="monotone" dataKey="value" stroke="#ef4444" strokeWidth={2} dot={{ r: 4 }} />
                    <XAxis dataKey="year" />
                    <YAxis domain={[0, 2]} />
                    <Tooltip />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-gray-500 mt-2">Annual deforestation rate (% per year)</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-700 mb-2">Reforestation Progress</h3>
              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={[
                    { year: '2018', value: 15 },
                    { year: '2019', value: 18 },
                    { year: '2020', value: 22 },
                    { year: '2021', value: 25 },
                    { year: '2022', value: 30 },
                  ]}>
                    <Bar dataKey="value" fill="#10b981" />
                    <XAxis dataKey="year" />
                    <YAxis domain={[0, 50]} />
                    <Tooltip />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-gray-500 mt-2">Area reforested (kHa per year)</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-700 mb-2">Carbon Stock Change</h3>
              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={[
                    { year: '2018', value: 120 },
                    { year: '2019', value: 118 },
                    { year: '2020', value: 115 },
                    { year: '2021', value: 112 },
                    { year: '2022', value: 110 },
                  ]}>
                    <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
                    <XAxis dataKey="year" />
                    <YAxis domain={[100, 130]} />
                    <Tooltip />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-gray-500 mt-2">Total carbon stock (Mt CO2 equivalent)</p>
            </div>
          </div>
        </div>
        
        {/* Comparative Studies Section */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              <Layers className="mr-2 h-5 w-5 text-indigo-600" />
              Comparative Studies
            </h2>
            <button className="text-sm text-indigo-600 hover:text-indigo-800">
              Add Comparison
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-700 mb-2">Regional Forest Coverage</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={[
                    { region: 'North', coverage: 65, nationalAvg: 42 },
                    { region: 'Northeast', coverage: 30, nationalAvg: 42 },
                    { region: 'Central', coverage: 45, nationalAvg: 42 },
                    { region: 'South', coverage: 55, nationalAvg: 42 },
                    { region: 'East', coverage: 60, nationalAvg: 42 },
                    { region: 'West', coverage: 35, nationalAvg: 42 },
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="region" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="coverage" fill="#3b82f6" name="Region Coverage" />
                    <Bar dataKey="nationalAvg" fill="#94a3b8" name="National Average" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-700 mb-2">Conservation Effectiveness</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={[
                    { type: 'Protected Areas', before: 1.5, after: 0.5 },
                    { type: 'Indigenous Lands', before: 1.2, after: 0.3 },
                    { type: 'Private Reserves', before: 1.8, after: 0.7 },
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="type" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="before" fill="#ef4444" name="Before Protection" />
                    <Bar dataKey="after" fill="#10b981" name="After Protection" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-gray-500 mt-2">Deforestation rates (% per year) before and after protection</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
