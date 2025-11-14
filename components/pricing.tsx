'use client'

import { useState } from 'react'

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

  const pricingCategories = [
    {
      title: 'Coworking Space',
      items: [
        { name: 'Half Day', key: 'halfDay' as const },
        { name: 'Full Day', key: 'fullDay' as const },
        { name: 'Weekly Pass', key: 'week' as const },
        { name: 'Two Weeks', key: 'twoWeeks' as const },
        { name: 'Monthly Membership', key: 'month' as const },
      ]
    },
    {
      title: 'Meeting & Training',
      items: [
        { name: 'Meeting Room (per hour)', key: 'meetingRoomHour' as const },
        { name: 'Conference Room (2 hours)', key: 'conferenceRoom2h' as const },
        { name: 'Training Room (5 hours)', key: 'trainingRoom5h' as const },
      ]
    },
    {
      title: 'Additional Services',
      items: [
        { name: 'Domiciliation (per month)', key: 'domiciliation' as const },
      ]
    },
  ]

  return (
    <section id="pricing" className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Pricing Plans
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Flexible pricing for every need. All prices are in USD.
          </p>
          <button
            onClick={() => setEditMode(!editMode)}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors duration-200 ${
              editMode
                ? 'bg-accent text-accent-foreground hover:opacity-90'
                : 'bg-primary text-primary-foreground hover:bg-accent'
            }`}
          >
            {editMode ? 'Done Editing' : 'Edit Prices'}
          </button>
        </div>

        {/* Pricing table */}
        <div className="space-y-8">
          {pricingCategories.map((category, idx) => (
            <div key={idx} className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-accent p-6">
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <div
                      key={item.key}
                      className="flex justify-between items-center pb-4 border-b border-border last:border-0 last:pb-0"
                    >
                      <span className="text-foreground font-medium">{item.name}</span>
                      {editMode ? (
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground">Dt</span>
                          <input
                            type="number"
                            value={tempPrices[item.key]}
                            onChange={(e) => handleEdit(item.key, Number(e.target.value))}
                            className="w-20 px-3 py-1 border border-border rounded-lg text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                            min="0"
                          />
                        </div>
                      ) : (
                        <span className="text-lg font-bold text-accent">{prices[item.key]}Dt</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {editMode && (
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={handleSave}
              className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200"
            >
              Save Changes
            </button>
            <button
              onClick={() => {
                setTempPrices(prices)
                setEditMode(false)
              }}
              className="px-8 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-colors duration-200"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
