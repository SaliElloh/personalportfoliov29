"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star, Package, Download, ChevronLeft, ChevronRight } from "lucide-react"

const users = [
  { id: "user1", name: "Sarah Johnson" },
  { id: "user2", name: "Michael Chen" },
  { id: "user3", name: "Emily Rodriguez" },
]

interface ProductItem {
  parent_asin: string
  rating: number
  title_y: string
}

const userData = {
  user1: {
    actual: [
      {
        parent_asin: "B0B93M1NPJ",
        rating: 5,
        title_y: "PIRISA - Miswak Sticks for Teeth - Vacummed Sewak - Muslim Traditional Toothbrush (4 Pack)",
      },
      { parent_asin: "B01MYXNLTI", rating: 5, title_y: "Dr. Mercola Organic White Grapefruit Essential Oil - 1 oz." },
      {
        parent_asin: "B09JSB4WZH",
        rating: 4,
        title_y:
          "Small Pill Box - 3 Compartment Travel Pill Box for Purse, Victorian Pattern Pill Container for Purse, Small Pill Case for Vitamins, Fish Oils, Capsules (Silver)",
      },
      {
        parent_asin: "B09YRZMWMW",
        rating: 4,
        title_y:
          "Grounding Half Sheet 10% Silver with Grounding Cord, Grounding Sheet Native Cotton for Better Sleep Healthy (36 x 91 Inch)",
      },
      {
        parent_asin: "B091BB58S9",
        rating: 5,
        title_y:
          "4 Pack Mop Head Replacement Microfiber Spin Mop Refill 360° Easy Cleaning Mop Replacement Heads Mop Refills (White)",
      },
      {
        parent_asin: "B095L4QG85",
        rating: 5,
        title_y:
          "Solgar Apple Cider Vinegar 1000 mg Gummies Great-Tasting Raspberry Pomegranate Flavor, Plus Vitamin B12, Supports Energy Metabolism, Non-GMO & Vegan, 90 Count",
      },
    ],
    predicted: [
      { parent_asin: "B002K3APZ0", rating: 5, title_y: "Tie Guang Yin Tea 125g (Gift Box)" },
      {
        parent_asin: "B002K66ACO",
        rating: 5,
        title_y: "Yuexi Cuilan (Yuexi Green Orchid Tea) - Organic Green Tea 10 Tea Bag 30g",
      },
      {
        parent_asin: "B002K72K3G",
        rating: 5,
        title_y: "Yuexi Cuilan (Yuexi Green Orchid Tea) - Super Gift 2 Pack 1 KG",
      },
      { parent_asin: "B002K79UC0", rating: 5, title_y: "China Premium Huang Shan Mao Feng Fur Peak Green Tea" },
      { parent_asin: "B002OIFHYA", rating: 5, title_y: "1st Grade Huangshang Maofeng Meidi Green Tea 50g Gift Tin" },
      {
        parent_asin: "B002T9JJNY",
        rating: 5,
        title_y: "NingHong New-Effect Slimming Diet weightloss Drinking Tea 60g 20 Tea Bags",
      },
    ],
  },
  user2: {
    actual: [
      {
        parent_asin: "B09GBMG83Z",
        rating: 5,
        title_y:
          "Vitamin C with Rose Hips | 500mg | 300 Tablets | Vegetarian, Non-GMO, and Gluten Free Supplement | High Potency Formula | by Carlyle",
      },
      {
        parent_asin: "B09FKT5PQ9",
        rating: 4,
        title_y:
          "9-in-1 Head Shavers for Bald Men w/ 7 Floating Heads, LED Display, USB Rechargeable, Mens Grooming Kit w/ Rotary Shaver, Nose Trimmer, Hair Clipper, Brush. Cordless Electric Razor Wet and Dry, Gold",
      },
      {
        parent_asin: "B08THJD1MH",
        rating: 4,
        title_y: "White Air Purifier and Dehumidifier Q10 True HEPA Air Purifier Purifier(200 sq.ft.)",
      },
      {
        parent_asin: "B08FCQML37",
        rating: 5,
        title_y: "SOSMAR 30pcs Christmas Drawstring Gift Bags with Tags, 5 Design, Gift Wrapping Present Goody Bag",
      },
      {
        parent_asin: "B08GYM3HVP",
        rating: 3,
        title_y:
          "Teeth Whitening Strips, Azdent White Strips Teeth Whitening Sensitive Teeth - Best Teeth Whitener - Natural Whitening Strips - 28 Strips - 14 Uses",
      },
      {
        parent_asin: "B0895LW9LL",
        rating: 5,
        title_y:
          "Jinri Professional Tourmaline Hair Dryer, Negative Ionic Blow Dryer with Concentrator, Lightweight Low Noise 1875W DC Motor Fast Dry Hair Blow Dryer",
      },
    ],
    predicted: [
      {
        parent_asin: "B002T9JJNY",
        rating: 5,
        title_y: "NingHong New-Effect Slimming Diet weightloss Drinking Tea 60g 20 Tea Bags",
      },
      { parent_asin: "B002TDPBNC", rating: 5, title_y: "Premium Liuan Guapian Green Tea 250g Gift Pack" },
      { parent_asin: "B002TDWDGU", rating: 5, title_y: "Taiping Houkui Green Tea 250g Gift Tin by A2AWorld Green Tea" },
      { parent_asin: "B005IRN7S2", rating: 5, title_y: "Bulk Herbs: Clay, Sea" },
      {
        parent_asin: "B006JIM8N4",
        rating: 5,
        title_y: "North American Herb and Spice Mineral Supplement Purely-Min, 5 Ounce",
      },
    ],
  },
  user3: {
    actual: [
      {
        parent_asin: "B09JG2G5FJ",
        rating: 5,
        title_y:
          "[2 Pack] Fiber Gummies for Adults and Kids - Prebiotic Fiber Supplement Immune Booster, Digestive Support, Constipation Relief, Gut Health, Vegetarian Formula",
      },
      {
        parent_asin: "B09GL3RDTD",
        rating: 4,
        title_y:
          "NatureWorks HydroMATE Electrolytes Powder Packets Hydration Accelerator Drink Mix Rapid Party Relief Recovery Vitamin C Orange Citrus 30 Count",
      },
      {
        parent_asin: "B09BYC8LRJ",
        rating: 4,
        title_y:
          "Monitor Wipes, Pre-Moistened Computer Screen Wipes for Electronics, Computer Monitor Cleaning Wipes for Eyeglasses, Tablets, Camera Lenses, Laptop, Screen Cleaner Wipes for Phones, TV, LCD",
      },
      {
        parent_asin: "B0B3MBVNDG",
        rating: 4,
        title_y: "JYM Supplement Science Plant Jym Oatmeal Cookie, 2 Lb, Oatmeal Cookie, 2 Pound",
      },
      {
        parent_asin: "B07TD6QCVN",
        rating: 3,
        title_y:
          "1Mission Nutrition, Pre Workout Powder, Fat Burning Pre-Workout, Great for Strength, Energy and Pumps (30 Servings, Watermelon Rage)",
      },
      {
        parent_asin: "B08WWWDBJK",
        rating: 1,
        title_y:
          "Univera I'MMUNE Aloe Vera 3-in-1 Immune Boost Jelly Stick, Clinically Proven for Immune Support, Digestive, Skin Health, 200:1 Aloe Concentration Supplement, 1 PK, 14 Sticks, Green Grape Apple",
      },
      {
        parent_asin: "B096LS88T8",
        rating: 4,
        title_y:
          "Slim Drops - All Natural Diet Supplement - Increase Energy & Focus - Reduce Bloating, Appetite & Cravings - Raspberry Ketone and African Mango Complex for Women (40 Day)",
      },
      {
        parent_asin: "B08RRFL7PL",
        rating: 5,
        title_y:
          "Center Pull Spunlace Dry Wipes, 6 Rolls, Multi-Use Hand Towels, Refill For Bucket Wipes To Create Own Cleaning Wipes, Ships Dry Or Use In Center Pull Dispenser Hand Towels",
      },
      {
        parent_asin: "B095JXWBPS",
        rating: 5,
        title_y:
          "Gua Sha Facial Tool, Rose Quartz Facial Tool for Scraping and SPA Acupuncture Therapy, Pink Crystal Stone for Facial Body Skin for SPA Acupuncture Therapy Trigger Point Treatment(1PCS)",
      },
    ],
    predicted: [
      {
        parent_asin: "B095XHJ3XJ",
        rating: 4.8,
        title_y:
          "Facial Toner for Women and Men by IQ Natural - Vitamin C Toner for Face - Hydrating, Anti Aging Skin Toner for face- (8oz/236ml)",
      },
      {
        parent_asin: "B096WNDHV6",
        rating: 4.8,
        title_y:
          "Apple Cider Vinegar Gummies for Weight Loss, Skin Health , Gut Health, Energy Boost and Detox with Vitamin B12, Folate,Pomegranate Juice Powder, Beet Juice Powder (BOBO'S ACV Gummies) (1)",
      },
      {
        parent_asin: "B07GQ38JY1",
        rating: 4.8,
        title_y:
          "Ziploc Slider Storage Gallon Bag, Great for Grab-and-go Snacking, Tailgating or homegating, 20 Count- NFL Arizona Cardinals",
      },
      {
        parent_asin: "B088YWRJ2C",
        rating: 5,
        title_y:
          "ANYI16 1st Birthday Baby Photo Banner Newborn to 12 Months Glitter Photo Rope Banner with 12 Pack Latex Balloons for Baby Milestone Photo Decoration First Birthday Party Celebration (Silver)",
      },
      {
        parent_asin: "B07XJGGJ5G",
        rating: 5,
        title_y: "Vegan Cla 4000MG Supports Weight Management, Lean Muscle 120 Vegetable softgels",
      },
      {
        parent_asin: "B07MH21XM9",
        rating: 5,
        title_y:
          "SUERTREE Anti Blue Reading Glasses 3 Pack Yellow Tint Computer Glasses Men Women Comfort Anti Rays Fashion Eyewear BM162 (1.5X3PC)",
      },
    ],
  },
}

const downloadExcelData = (userId: string, dataType: "actual" | "predicted") => {
  const data = userData[userId as keyof typeof userData]?.[dataType]
  if (!data) return

  const csvContent = [
    "parent_asin,rating,title_y",
    ...data.map((item) => `"${item.parent_asin}","${item.rating}","${item.title_y}"`),
  ].join("\n")

  const blob = new Blob([csvContent], { type: "text/csv" })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = `${userId}_${dataType}_items.csv`
  link.click()
  URL.revokeObjectURL(url)
}

const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  const stars = []

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)
  }

  if (hasHalfStar) {
    stars.push(<Star key="half" className="h-4 w-4 fill-yellow-400/50 text-yellow-400" />)
  }

  const emptyStars = 5 - Math.ceil(rating)
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />)
  }

  return stars
}

const ProductSlideshow = ({ items, type }: { items: ProductItem[]; type: "actual" | "predicted" }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 3

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + itemsPerPage >= items.length ? 0 : prev + itemsPerPage))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, items.length - itemsPerPage) : Math.max(0, prev - itemsPerPage),
    )
  }

  const currentItems = items.slice(currentIndex, currentIndex + itemsPerPage)
  const totalPages = Math.ceil(items.length / itemsPerPage)
  const currentPage = Math.floor(currentIndex / itemsPerPage) + 1

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={prevSlide} disabled={currentIndex === 0}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm text-muted-foreground">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            disabled={currentIndex + itemsPerPage >= items.length}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentItems.map((item, index) => {
          const rating = item.rating
          const isActual = type === "actual"

          return (
            <Card
              key={index}
              className={`${isActual ? "border-green-200 bg-green-50/50" : "group hover:shadow-lg transition-shadow border-blue-200 bg-blue-50/50"}`}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge
                    variant="outline"
                    className={isActual ? "text-green-700 border-green-300" : "text-blue-700 border-blue-300"}
                  >
                    {isActual ? "Purchased" : "Recommended"}
                  </Badge>
                  <div className="flex items-center gap-1">
                    {renderStars(rating)}
                    <span className="text-sm text-muted-foreground ml-1">{rating}</span>
                  </div>
                </div>
                <h3 className="font-medium mb-2 text-sm leading-tight">{item.title_y}</h3>
                <p className="text-xs text-muted-foreground mb-3">ASIN: {item.parent_asin}</p>
                {!isActual && (
                  <Button size="sm" className="w-full">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default function ProductRecommendationDemoPage() {
  const [selectedUser, setSelectedUser] = useState<string>("")

  const currentUserData = selectedUser ? userData[selectedUser as keyof typeof userData] : null

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 font-sans">Product Recommendation Demo</h1>
          <p className="text-muted-foreground mb-6">
            Select a user to see their purchase history and AI-generated product recommendations with ratings.
          </p>

          <div className="max-w-xs">
            <Select value={selectedUser} onValueChange={setSelectedUser}>
              <SelectTrigger>
                <SelectValue placeholder="Select a user" />
              </SelectTrigger>
              <SelectContent>
                {users.map((user) => (
                  <SelectItem key={user.id} value={user.id}>
                    {user.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {selectedUser && currentUserData && (
          <div className="space-y-8">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold font-sans flex items-center gap-2">
                  <Package className="h-6 w-6" />
                  Previously Purchased Items
                </h2>
                <Button
                  variant="outline"
                  onClick={() => downloadExcelData(selectedUser, "actual")}
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download CSV
                </Button>
              </div>
              <ProductSlideshow items={currentUserData.actual} type="actual" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold font-sans flex items-center gap-2">
                  <Star className="h-6 w-6" />
                  Recommended Products
                </h2>
                <Button
                  variant="outline"
                  onClick={() => downloadExcelData(selectedUser, "predicted")}
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download CSV
                </Button>
              </div>
              <p className="text-muted-foreground mb-6">Based on machine learning analysis of purchase patterns</p>
              <ProductSlideshow items={currentUserData.predicted} type="predicted" />
            </div>
          </div>
        )}

        {!selectedUser && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🛍️</div>
            <h3 className="text-xl font-semibold mb-2 font-sans">Choose a User to View Recommendations</h3>
            <p className="text-muted-foreground">
              Each user has real purchase data and AI-generated recommendations with ratings and product details.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
