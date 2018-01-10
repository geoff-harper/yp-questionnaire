module.exports = {
  productsServicesOptions: [{
    title: 'Products and Services',
    options: [
      ['automotive', 'Automotive'],
      ['commercialIndustrialServices', 'Commercial & Industrial Services'],
      ['contractorsConstructions', 'Contractors & Constructions'],
      ['foodServices', 'Food Services'],
      ['healthBeautyWellBeing', 'Health, Beauty & Well-Being'],
      ['homeMaintenance', 'Home & Maintenance'],
      ['lawFinance', 'Law & Finance'],
      ['miscellaneous', 'Miscellaneous']
    ],
    nodes: [{
        title: 'Automotive',
        options: [
          ['glassAutomobile', 'Glass – Automobiles'],
          ['autoBodyRepairingPainting', 'Auto Body Repairing & Painting'],
          ['automobilePartsSupplies', 'Automobile Parts & Supplies'],
          ['automobileRepairingService', 'Automobile Repairing & Service'],
          ['autoWreckingRecycling', 'Auto Wrecking & Recycling'],
          ['homeMaintenance', 'Garages Auto Repairing'],
          ['tireDealersRetail', 'Tire Dealers – Retail'],
          ['towingAutomotive', 'Towing – Automotive'],
          ['transmissionsAutomotive', 'Transmissions – Automotive'],
          ['truckRepairingService', 'Truck Repairing & Service']
        ],
        nodes: [{
            title: 'Glass – Automobiles',
            options: [
              ['typeofVehicle', 'Type of Vehicle'],
              ['glassReplacement', 'Glass Replacement'],
              ['windshieldRepair', 'Windshield Repair']
            ],
            nodes: [{
                title: 'Type of Vehicle',
                options: [
                  ["cars", "Cars"],
                  ["trucks", "Trucks"],
                  ["motorcycles", "Motorcycles"],
                  ["boats", "Boats"],
                  ["rV", "RV"],
                  ["other", "Other"]
                ]
              },
              {
                title: 'Glass Replacement',
                options: [
                  ["glassReplacement", "Glass Replacement"],
                  ["frontWindshield", "Front Windshield"],
                  ["backWindshield", "Back Windshield"],
                  ["slideAutoGlass", "Slide Auto Glass"],
                  ["moonRoofGlass", "Moon Roof Glass"],
                  ["customGlass", "Custom Glass"]
                ]
              },
              {
                title: 'Windshield Repair',
                options: [
                  ["chippedWindshield", "Chipped Windshield"],
                  ["crackedWindshield", "Cracked Windshield"],
                  ["scratchedWindshield", "Scratched Windshield"]
                ]
              }
            ]
          },
          {
            title: 'Automobile Parts & Supplies',
            options: [
              ['productsServices', 'Products & Services']
            ],
            nodes: [{
              title: 'Products & Services',
              options: [
                ["smallEngineParts", "Small Engine Parts"],
                ["lightDieselTruckParts", "Light Diesel Truck Parts"],
                ["autoAccessoriesAddOns", "Auto Accessories/Add-Ons"],
                ["shippingNational", "Shipping – National"],
                ["shippingInternational", "Shipping – International"],
                ["automotiveRepair", "Automotive Repair"],
                ["lightDutyDieselRepairs", "Light Duty Diesel Repairs"],
                ["scrapCarRecycling", "Scrap Car Recycling"],
                ["partsRecycling", "Parts Recycling"],
                ["maintenance", "Maintenance"]
              ]
            }]
          },
          {
            title: 'Auto Wrecking & Recycling',
            options: [
              ['services', 'Services'],
              ['placeholder', 'Used Vehicle Parts']
            ],
            nodes: [{
                title: 'Services',
                options: [
                  ["scrapVehicleHauling", "Scrap Vehicle Hauling"],
                  ["freeHauling", "Free Hauling"],
                  ["vehiclePurchaseProgram", "Vehicle Purchase Program"],
                  ["ecoFriendlyAutoRecycling", "Eco-Friendly Auto Recycling"]
                ]
              },
              {
                title: 'Used Vehicle Parts',
                options: [
                  ["domestic", "Domestic"],
                  ["imports", "Imports"],
                  ["youpickPartsYard", "You-pick Parts Yard"],
                  ["fullServicePartsYard", "Full Service Parts Yard"],
                  ["onlineInventory", "Online Inventory"],
                  ["shippingAvailable", "Shipping Available"]
                ]
              }
            ]
          },
          {
            title: 'Garages Auto Repairing',
            options: [
              ['autoBodyRepair', 'Auto Body Repair'],
              ['autoGlassRepairReplacement', 'Auto Glass Repair/Replacement'],
              ['autoMechanicServices', 'Auto Mechanic Services'],
              ['autoMaintenance', 'Auto Maintenance']
            ],
            nodes: [{
                title: 'Auto Body Repair',
                options: [
                  ["bumperRepair", "Bumper Repair"],
                  ["autoPainting", "Auto Painting"],
                  ["fenderRepair", "Fender Repair"],
                  ["scratchScrapeRepair", "Scratch & Scrape Repair"],
                  ["dentDingRepair", "Dent & Ding Repair"],
                  ["paintChipRepair", "Paint Chip Repair"],
                  ["helpwithInsuranceClaims", "Help with Insurance Claims"]
                ]
              },
              {
                title: 'Auto Glass Repair/Replacement',
                options: [
                  ["windshieldChipRepair", "Windshield Chip Repair"],
                  ["windshieldCrackRepair", "Windshield Crack Repair"],
                  ["windshieldScratchRepair", "Windshield Scratch Repair"],
                  ["windshieldReplacement", "Windshield Replacement"],
                  ["sideWindowsReplacement", "Side Windows Replacement"],
                  ["moonRoofSunRoofReplacement", "Moon Roof/Sun Roof Replacement"]
                ]
              },
              {
                title: 'Auto Mechanic Services',
                options: [
                  ["mufflers", "Mufflers"],
                  ["transmission", "Transmission"],
                  ["engine", "Engine"],
                  ["fuelInjection", "Fuel Injection"],
                  ["airConditioning", "Air Conditioning"],
                  ["radiator", "Radiator"],
                  ["timingBelt", "Timing Belt"],
                  ["brakesSuspension", "Brakes & Suspension"],
                  ["batteryReplacement", "Battery Replacement"],
                  ["electricCharging", "Electric & Charging"],
                  ["prePurchaseInspection", "Pre-Purchase Inspection"],
                  ["noStartDiagnostics", "No Start Diagnostics"],
                  ["insuranceAMVICInspections", "Insurance & AMVIC Inspections"]
                ]
              },
              {
                title: 'Auto Maintenance',
                options: [
                  ["carWash", "Car Wash"],
                  ["checkReplaceEngineOil", "Check/Replace Engine Oil"],
                  ["checkReplaceOilFilter", "Check/Replace Oil Filter"],
                  ["checkReplaceFuelFilters", "Check/Replace Fuel Filters"],
                  ["windshieldWasherFluid", "Windshield Washer Fluid"],
                  ["tireBalancing", "Tire Balancing"],
                  ["tireRotation", "Tire Rotation"],
                  ["wheelAlignment", "Wheel Alignment"],
                  ["topUpBatteryFluid", "Top-Up Battery Fluid"],
                  ["checkorFlushBrakeFluid", "Check or Flush Brake Fluid"],
                  ["checkTransmissionFluid", "Check Transmission Fluid"],
                  ["checkPowerSteeringFluid", "Check Power Steering Fluid"],
                  ["checkEngineCoolant", "Check Engine Coolant"],
                  ["inspectorReplaceAirFilter", "Inspect or Replace Air Filter"],
                  ["inspectTimingBelt", "Inspect Timing Belt"],
                  ["checkAllLights", "Check All Lights"],
                  ["tightenNutsBolts", "Tighten Nuts & Bolts"],
                  ["checkorFlushBrakeFluid", "Check or Flush Brake Fluid"],
                  ["checkWiperBlades", "Check Wiper Blades"],
                  ["lubricateLocksLatchesHinges", "Lubricate Locks, Latches, Hinges"]
                ]
              }
            ]
          },
          {
            title: 'Tire Dealers – Retail',
            options: [
              ["vehicleTypes", "Vehicle Types"],
              ["products", "Products"],
              ["services", "Services"],
              ["tireBrands", "Tire Brands"],
              ["wheelBrands", "Wheel Brands"]
            ],
            nodes: [{
                title: 'Vehicle Types',
                options: [
                  ["car", "Car"],
                  ["truck", "Truck"],
                  ["minivan", "Minivan"],
                  ["sUV", "SUV"],
                  ["cUV", "CUV"],
                  ["commercial", "Commercial"],
                  ["oTR", "OTR"],
                  ["farm", "Farm"],
                  ["aTV", "ATV"],
                  ["trailer", "Trailer"]
                ]
              },
              {
                title: 'Products',
                options: [
                  ["tires", "Tires"],
                  ["wheels", "Wheels"],
                  ["accessories", "Accessories"],
                  ["chainsStuds", "Chains/Studs"]
                ]
              },
              {
                title: 'Services',
                options: [
                  ["tireInstallation", "Tire Installation"],
                  ["tireRepair", "Tire Repair"],
                  ["tirePatching", "Tire Patching"],
                  ["tireInflation", "Tire Inflation"],
                  ["tireRotation", "Tire Rotation"],
                  ["retread", "Retread"],
                  ["inspections", "Inspections"],
                  ["wheelAlignment", "Wheel Alignment"]
                ]
              },
              {
                title: 'Tire Brands',
                options: [
                  ["achilles", "Achilles"],
                  ["antares", "Antares"],
                  ["atturo", "Atturo"],
                  ["bFGoodrich", "BF Goodrich"],
                  ["carlisle", "Carlisle"],
                  ["bridgestone", "Bridgestone"],
                  ["continental", "Continental"],
                  ["dunlop", "Dunlop"],
                  ["falken", "Falken"],
                  ["gladiator", "Gladiator"],
                  ["goodride", "Goodride"],
                  ["goodyear", "Goodyear"],
                  ["gTRadial", "GT Radial"],
                  ["kelly", "Kelly"],
                  ["lexaniPerformance", "Lexani Performance"],
                  ["michelin", "Michelin"],
                  ["multiMile", "Multi-Mile"],
                  ["muteki", "Muteki"],
                  ["nexen", "Nexen"],
                  ["nitto", "Nitto"],
                  ["nokian", "Nokian"],
                  ["nordman", "Nordman"],
                  ["pirelli", "Pirelli"],
                  ["proComp", "Pro Comp"],
                  ["venezia", "Venezia"],
                  ["yokohama", "Yokohama"]
                ]
              },
              {
                title: 'Wheel Brands',
                options: [
                  ["advanti", "Advanti"],
                  ["akuzaRoadConcepts", "Akuza Road Concepts"],
                  ["blackIron", "Black Iron"],
                  ["coreRacing", "Core Racing"],
                  ["cragar", "Cragar"],
                  ["devinoRoadConcepts", "Devino Road Concepts"],
                  ["fRD", "FRD"],
                  ["klasseMotorSport", "Klasse Motor Sport"],
                  ["incubusAlloys", "Incubus Alloys"],
                  ["mamba", "Mamba"],
                  ["menzari", "Menzari"],
                  ["motoMetal", "Moto Metal"],
                  ["pantherWheels", "Panther Wheels"],
                  ["replica", "Replica"],
                  ["sonic", "Sonic"],
                  ["streetGear", "Street Gear"],
                  ["viscera", "Viscera"],
                  ["voxx", "Voxx"],
                  ["vision", "Vision"],
                  ["xDSeries", "XD Series"]
                ]
              }
            ]
          },
          {
            title: 'Towing – Automotive',
            options: [
              ["towingServices", "Towing Services"],
              ["roadsideAssistance", "Roadside Assistance"],
              ["miscellaneous", "Miscellaneous"]
            ],
            nodes: [{
                title: 'Towing Services',
                options: [
                  ["longDistanceTowing", "Long Distance Towing"],
                  ["motorcycleTowing", "Motorcycle Towing"],
                  ["rVTowing", "RV Towing"],
                  ["scrapCarRemoving", "Scrap Car Removing"],
                  ["equipmentTowing", "Equipment Towing"]
                ],
              },
              {
                title: 'Roadside Assistance',
                options: [
                  ["batteryBoosts", "Battery Boosts"],
                  ["fuelDeliveries", "Fuel Deliveries"],
                  ["impounds", "Impounds"],
                  ["tireChanges", "Tire Changes"],
                  ["recoveries", "Recoveries"],
                  ["unlocks", "Unlocks"],
                  ["vehicleStorage", "Vehicle Storage"],
                  ["vehicleTransport", "Vehicle Transport"]
                ],
              },
              {
                title: 'Miscellaneous',
                options: [
                  ["signSupplyInstallationforPrivateParkingLots", "Sign Supply & Installation for Private Parking Lots"],
                  ["licensedCertified", "Licensed/Certified"],
                  ["available247", "Available 24/7"]
                ],
              }
            ]
          },
          {
            title: 'Truck Repairing & Service',
            options: [
              ["truckType", "Truck Type"],
              ["fuelType", "Fuel Type"],
              ["services", "Services"]
            ],
            nodes: [{
                title: 'Truck Type',
                options: [
                  ["pickup", "Pickup"],
                  ["1Ton", "1 Ton"],
                  ["3Ton", "3 Ton"],
                  ["5Ton", "5 Ton"],
                  ["semiTrailer", "Semi-Trailer"],
                  ["trailers", "Trailers"]
                ]
              },
              {
                title: 'Fuel Type',
                options: [
                  ["diesel", "Diesel"],
                  ["gasoline", "Gasoline"],
                  ["propane", "Propane"]
                ]
              },
              {
                title: 'Services',
                options: [
                  ["247EmergencyService", "24/7 Emergency Service"],
                  ["airConditioning", "Air Conditioning"],
                  ["autoGreaserRepair", "Auto Greaser Repair"],
                  ["brakes", "Brakes"],
                  ["clutchDrivetrain", "Clutch & Drivetrain"],
                  ["differentialRebuild", "Differential Rebuild"],
                  ["electronicsRepair", "Electronics Repair"],
                  ["exhaustEmissionsControl", "Exhaust & Emissions Control"],
                  ["frameRepairAlterations", "Frame Repair/Alterations"],
                  ["fleetMaintenance", "Fleet Maintenance"],
                  ["maintenanceDiagnostic", "Maintenance & Diagnostic"],
                  ["mobileService", "Mobile Service"],
                  ["motorVehicleInspections", "Motor Vehicle Inspections"],
                  ["painting", "Painting"],
                  ["refuelling", "Refuelling"],
                  ["suspension", "Suspension"],
                  ["tires", "Tires"],
                  ["towing", "Towing"],
                  ["trailerServiceRepair", "Trailer Service/Repair"],
                  ["transmissionRebuild", "Transmission Rebuild"],
                  ["weldingFabrication", "Welding/Fabrication"]
                ]
              }
            ]
          }
        ]
      },
      {
        title: 'Commercial & Industrial Services',
        options: [
          ['glassAutomobile', 'Glass – Automobiles'],
          ['autoBodyRepairingPainting', 'Auto Body Repairing & Painting'],
          ['automobilePartsSupplies', 'Automobile Parts & Supplies'],
          ['automobileRepairingService', 'Automobile Repairing & Service'],
          ['autoWreckingRecycling', 'Auto Wrecking & Recycling'],
          ['homeMaintenance', 'Garages Auto Repairing'],
          ['tireDealersRetail', 'Tire Dealers – Retail'],
          ['towingAutomotive', 'Towing – Automotive'],
          ['transmissionsAutomotive', 'Transmissions – Automotive'],
          ['truckRepairingService', 'Truck Repairing & Service']
        ],
        nodes: [{
            title: 'Glass – Automobiles',
            options: [
              ['placeholder', 'placeholder'],
              ['placeholder', 'placeholder'],
              ['placeholder', 'placeholder']
            ],
            nodes: []
          },
          {
            title: 'Auto Body Repairing & Painting',
            options: [
              ['placeholder', 'placeholder'],
              ['placeholder', 'placeholder'],
              ['placeholder', 'placeholder']
            ],
            nodes: []
          },
          {
            title: 'Automobile Parts & Supplies',
            options: [
              ['placeholder', 'placeholder'],
              ['placeholder', 'placeholder'],
              ['placeholder', 'placeholder']
            ],
            nodes: []
          },
          {
            title: 'Automobile Repairing & Service',
            options: [
              ['placeholder', 'placeholder'],
              ['placeholder', 'placeholder'],
              ['placeholder', 'placeholder']
            ],
            nodes: []
          },
          {
            title: 'Auto Wrecking & Recycling',
            options: [
              ['placeholder', 'placeholder'],
              ['placeholder', 'placeholder'],
              ['placeholder', 'placeholder']
            ],
            nodes: []
          },
          {
            title: 'Tire Dealers – Retail',
            options: [
              ['placeholder', 'placeholder'],
              ['placeholder', 'placeholder'],
              ['placeholder', 'placeholder']
            ],
            nodes: []
          },
          {
            title: 'Towing – Automotive',
            options: [
              ['placeholder', 'placeholder'],
              ['placeholder', 'placeholder'],
              ['placeholder', 'placeholder']
            ],
            nodes: []
          },
          {
            title: 'Transmissions – Automotive',
            options: [
              ['placeholder', 'placeholder'],
              ['placeholder', 'placeholder'],
              ['placeholder', 'placeholder']
            ],
            nodes: []
          },
          {
            title: 'placeholder',
            options: [
              ['placeholder', 'placeholder'],
              ['placeholder', 'placeholder'],
              ['placeholder', 'placeholder']
            ],
            nodes: []
          },
          {
            title: 'Truck Repairing & Service',
            options: [
              ['placeholder', 'placeholder'],
              ['placeholder', 'placeholder'],
              ['placeholder', 'placeholder']
            ],
            nodes: []
          }
        ]
      }
    ]
  }]
}

/* eslint-disable */
/*
{
  title: 'placeholder',
  options: [
    ['placeholder', 'placeholder'],
    ['placeholder', 'placeholder'],
    ['placeholder', 'placeholder']
  ],
  nodes: []
}
*/

let tree = {
  label: 'root',
  nodes: [{
      label: 'item1',
      nodes: [{
          label: 'item1.1'
        },
        {
          label: 'item1.2',
          nodes: [{
            label: 'item1.2.1'
          }]
        }
      ]
    },
    {
      label: 'item2'
    }
  ]
}
/* eslint-enable */
