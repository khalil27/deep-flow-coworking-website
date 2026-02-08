'use client'

import { useState } from 'react'
import { Edit3, Check, X } from 'lucide-react'

interface PricingItem {
  name: string
  price: number
  currency: string
  period: string
}

export default function Pricing() {
  const [prices, setPrices] = useState({
    halfDay: 10,
    fullDay: 15,
    week: 60,
    twoWeeks: 100,
    month: 170,
    meetingRoomHour: 20,
    conferenceRoom2h: 60,
    trainingRoom5h: 130,
    domiciliation: 50,
  })

  const [editMode, setEditMode] = useState(false)
  const [tempPrices, setTempPrices] = useState(prices)

  const handleEdit = (key: keyof typeof prices, value: number) => {
    setTempPrices(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const handleSave = () => {
    setPrices(tempPrices)
    setEditMode(false)
  }

  const coworkingPrices = [
    { name: 'Half Day', key: 'halfDay' as const },
    { name: 'Full Day', key: 'fullDay' as const },
    { name: 'Weekly Pass', key: 'week' as const },
    { name: 'Two Weeks', key: 'twoWeeks' as const },
    { name: 'Monthly', key: 'month' as const },
  ]

  const meetingRoomPrices = [
    { name: 'Meeting Room (per hour)', key: 'meetingRoomHour' as const },
    { name: 'Conference Room (2 hours)', key: 'conferenceRoom2h' as const },
  ]

  const trainingRoomPrices = [
    { name: 'Training Room (5 hours)', key: 'trainingRoom5h' as const },
  ]

  const domiciliationPrices = [
    { name: 'Domiciliation (per month)', key: 'domiciliation' as const },
  ]

  const PriceTable = ({ items, title }: { items: any[], title: string }) => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-[#b4c7d4]/30 overflow-hidden shadow-elevated animate-fade-in-up hover-lift" style={{animationDelay: `${['Coworking', 'Meeting', 'Training', 'Domiciliation'].indexOf(title.split(' ')[0]) * 0.1}s`}}>
      <div className="bg-gradient-to-r from-[#b4c7d4]/20 to-white/10 p-8 border-b border-[#b4c7d4]/20">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <div className="p-8 min-w-min">
          <div className="flex gap-6 flex-wrap sm:flex-nowrap">
            {items.map((item, idx) => (
              <div
                key={item.key}
                className="flex flex-col items-center justify-center bg-white rounded-xl p-8 w-56 flex-shrink-0 hover:shadow-elevated transition-smooth group hover-lift border border-[#e5e7eb]"
              >
                <span className="text-[#334247] font-semibold text-center mb-4 text-base group-hover:text-[#4f8fa3] transition-colors">{item.name}</span>
                {editMode ? (
                  <div className="flex items-center gap-2 w-full">
                    <span className="text-[#6b7280] font-medium">Dt</span>
                    <input
                      type="number"
                      value={tempPrices[item.key]}
                      onChange={(e) => handleEdit(item.key, Number(e.target.value))}
                      className="flex-1 px-3 py-2 border-2 border-[#4f8fa3] rounded-lg text-[#334247] bg-white focus:outline-none focus:ring-2 focus:ring-[#4f8fa3] text-center font-semibold"
                      min="0"
                    />
                  </div>
                ) : (
                  <span className="text-4xl font-bold text-[#4f8fa3]">{prices[item.key]}</span>
                )}
                {!editMode && <span className="text-[#6b7280] text-sm mt-2 font-medium">Dt</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section className="relative overflow-hidden py-20 sm:py-32 bg-gradient-to-br from-[#334247] to-[#4f8fa3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Pricing Plans
          </h2>
          <p className="text-lg text-[#b4c7d4] max-w-2xl mx-auto mb-12 leading-relaxed">
            Flexible pricing for every need. Choose the plan that works best for you. All prices are in Tunisian Dinars (Dt).
          </p>
          <button
            onClick={() => setEditMode(!editMode)}
            className={`px-8 py-3 rounded-lg font-semibold transition-smooth flex items-center gap-2 mx-auto shadow-elevated transform hover:scale-105 ${
              editMode
                ? 'bg-red-500/80 text-white hover:bg-red-600'
                : 'bg-gradient-to-r from-[#b4c7d4] to-white text-[#334247] hover:shadow-2xl'
            }`}
          >
            {editMode ? (
              <>
                <X size={20} />
                Cancel Editing
              </>
            ) : (
              <>
                <Edit3 size={20} />
                Edit Prices
              </>
            )}
          </button>
        </div>

        <div className="space-y-10">
          <PriceTable items={coworkingPrices} title="Coworking Space" />
          <PriceTable items={meetingRoomPrices} title="Meeting Rooms" />
          <PriceTable items={trainingRoomPrices} title="Training Rooms" />
          <PriceTable items={domiciliationPrices} title="Domiciliation" />
        </div>

        {editMode && (
          <div className="mt-12 flex justify-center gap-4 animate-fade-in-up">
            <button
              onClick={handleSave}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:shadow-elevated transition-smooth flex items-center gap-2 shadow-elevated transform hover:scale-105"
            >
              <Check size={20} />
              Save Changes
            </button>
            <button
              onClick={() => {
                setTempPrices(prices)
                setEditMode(false)
              }}
              className="px-8 py-3 border-2 border-[#b4c7d4]/50 text-white rounded-lg font-semibold hover:bg-white/10 transition-smooth"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
