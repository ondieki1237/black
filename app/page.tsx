"use client"

import { useState, lazy, Suspense } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import BlackNovemberCarousel from "@/components/black-november-carousel"
import { FEATURED_PRODUCT_IDS } from "@/data/featured-products"
import {
  Microscope,
  Baby,
  Stethoscope,
  ScanLine,
  Activity,
  Armchair,
  Droplets,
  Smile,
  Refrigerator,
  TestTube,
  HomeIcon,
  BookOpen,
  Zap,
} from "lucide-react"
import CountdownTimer from "@/components/countdown-timer"

// Lazy load components that are below the fold
const OfficeMap = lazy(() => import("@/components/office-map"))
const TopRatedProducts = lazy(() => import("./components/top-rated-products"))

// Floating discount badge component with pulsing animation
function DiscountBadge() {
  return (
    <motion.div
      role="status"
      aria-label="Discount badge"
      className="absolute top-4 right-4 bg-[#0096d9] text-white font-extrabold text-sm px-4 py-2 rounded-full shadow-2xl z-50 flex items-center justify-center gap-1 border-2 border-cyan-400"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 14 }}
      whileHover={{ scale: 1.1 }}
    >
      <Zap size={16} className="animate-pulse" />
      Upto -35
    </motion.div>
  )
}

const departments = [
  {
    id: 1,
    name: "Laboratory Equipment",
    description: "Advanced diagnostic and testing equipment",
    icon: Microscope,
    color: "from-blue-50 to-blue-100",
  },
  {
    id: 2,
    name: "Maternity Equipment",
    description: "Comprehensive maternal and neonatal care solutions",
    icon: Baby,
    color: "from-pink-50 to-pink-100",
  },
  {
    id: 3,
    name: "Diagnostic Products",
    description: "Essential diagnostic tools and supplies",
    icon: Stethoscope,
    color: "from-purple-50 to-purple-100",
  },
  {
    id: 4,
    name: "Imaging Equipment",
    description: "Modern imaging and diagnostic technology",
    icon: ScanLine,
    color: "from-cyan-50 to-cyan-100",
  },
  {
    id: 5,
    name: "Theatre & ICU Equipment",
    description: "Critical care and surgical equipment",
    icon: Activity,
    color: "from-red-50 to-red-100",
  },
  {
    id: 6,
    name: "Hospital Furniture",
    description: "Quality healthcare furniture solutions",
    icon: Armchair,
    color: "from-green-50 to-green-100",
  },
  {
    id: 7,
    name: "Renal Equipment",
    description: "Dialysis and kidney care equipment",
    icon: Droplets,
    color: "from-teal-50 to-teal-100",
  },
  {
    id: 8,
    name: "Dental Equipment",
    description: "Complete dental care solutions",
    icon: Smile,
    color: "from-emerald-50 to-emerald-100",
  },
  {
    id: 9,
    name: "Cold Chain",
    description: "Temperature-controlled storage solutions",
    icon: Refrigerator,
    color: "from-sky-50 to-sky-100",
  },
  {
    id: 10,
    name: "CSSD",
    description: "Central Sterile Services Department equipment",
    icon: TestTube,
    color: "from-violet-50 to-violet-100",
  },
  {
    id: 11,
    name: "Homecare Equipment",
    description: "Home healthcare and medical equipment",
    icon: HomeIcon,
    color: "from-amber-50 to-amber-100",
  },
  {
    id: 12,
    name: "Medical Training Materials",
    description: "Educational tools and training equipment",
    icon: BookOpen,
    color: "from-orange-50 to-orange-100",
  },
]

function DepartmentCard({ dept, index }) {
  const Icon = dept.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
      className="group relative"
    >
      <Card className="h-full overflow-hidden bg-gradient-to-br from-white to-gray-50 border-2 border-transparent hover:border-[#0096d9] transition-all duration-300 p-4 sm:p-6 cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-600/0 group-hover:from-blue-500/5 group-hover:to-blue-600/5 transition-all duration-300" />

        <div className="relative z-10">
          <motion.div
            whileHover={{ scale: 1.15, rotate: 5 }}
            className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center mb-4 text-[#0096d9]"
          >
            <Icon size={24} />
          </motion.div>

          <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-[#0096d9] transition-colors">
            {dept.name}
          </h3>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">{dept.description}</p>

          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="flex items-center gap-2 text-[#0096d9] font-semibold text-sm"
          >
            <span className="inline-block bg-blue-100 px-2 py-1 rounded text-[#0096d9] font-bold">Black November</span>
            <span className="text-[#0096d9]">Shop Now →</span>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  )
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <CountdownTimer />

      {/* Hero section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative pt-20 sm:pt-32 pb-20 sm:pb-40 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-gray-950 via-gray-950 to-gray-950 overflow-hidden"
      >
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl opacity-60 animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-blue-600/10 rounded-full blur-3xl opacity-60" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-block px-4 py-2 bg-gradient-to-r from-[#0096d9] to-cyan-500 rounded-full border-2 border-cyan-400 shadow-lg"
              >
                <span className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  Black November • Exclusive Expo Offers
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight text-pretty"
              >
                Black November —{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Limited Time Deals
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed"
              >
                Massive discounts and exclusive bundles during Black November. Shop with us and get priority delivery.
              </motion.p>

              <div className="flex gap-3 sm:gap-4 flex-wrap">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/offers">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-[#0096d9] to-blue-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-blue-600/50 hover:shadow-2xl transition-all duration-300 text-sm sm:text-base"
                    >
                      🔥 Shop Black November →
                    </Button>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-cyan-400 text-white hover:bg-blue-600/10 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 bg-transparent text-sm sm:text-base"
                    onClick={() => {
                      const link = document.createElement("a")
                      link.href = "/interest"
                      link.click()
                    }}
                  >
                    Express Interest
                  </Button>
                </motion.div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <DiscountBadge />
              <BlackNovemberCarousel />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Top rated products */}
      <Suspense fallback={<div className="py-20 text-center text-muted-foreground">Loading top products...</div>}>
        <TopRatedProducts productIds={FEATURED_PRODUCT_IDS.length > 0 ? FEATURED_PRODUCT_IDS : undefined} />
      </Suspense>

      {/* Departments Grid */}
      <section id="departments" className="py-12 sm:py-20 px-4 md:px-8 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Shop by <span className="text-[#0096d9]">Department</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-2">
              Explore our comprehensive range of medical equipment across all departments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {departments.map((dept, index) => (
              <DepartmentCard key={dept.id} dept={dept} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 sm:py-24 px-4 md:px-8 lg:px-12 bg-gradient-to-r from-gray-950 via-blue-950 to-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl font-black"
          >
            Interested in Our <span className="text-cyan-400">Products?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed px-2"
          >
            Let us know what catches your interest and we'll follow up with you after the expo.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-white to-gray-100 text-[#0096d9] hover:from-gray-50 hover:to-white font-bold px-6 sm:px-10 py-4 sm:py-6 text-base sm:text-lg transition-all duration-300 shadow-2xl"
              onClick={() => {
                const link = document.createElement("a")
                link.href = "/interest"
                link.click()
              }}
            >
              Express Your Interest →
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Office locations */}
      <Suspense fallback={<div className="py-20 text-center text-muted-foreground">Loading map...</div>}>
        <OfficeMap />
      </Suspense>

      <Footer />
    </div>
  )
}
